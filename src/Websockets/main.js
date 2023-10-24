const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const fetch = require('node-fetch');
const { type } = require('os');
const app = express();
const server = http.createServer(app);
const ws = new WebSocket.Server({ server });
var clients = [];
var messages = [];

ws.on('connection', (ws, req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const token = url.searchParams.get('token');
    if (!token) {
        console.log('Client tried to connect without token');
        return;
    } else {
        console.log('Getting user data...');
        fetch(`http://${url.hostname}/api/users.json`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                let userData = data.user;
                userData['ws'] = ws;
                clients.push(userData);
                console.log(`${userData.first_name} ${userData.last_name} connected`);

                let unSentMessages = messages.filter(m => !m.sent && m.ws === ws);
                unSentMessages.forEach(message => {
                    handleClientMessage(ws, message.message);
                })
            } else {
                console.log(data);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    ws.on('message', (message) => {
        const buf = Buffer.from(message);
        const str = buf.toString('utf8');
        const data = JSON.parse(str);
        handleClientMessage(ws, data);
    });

    ws.on('close', () => {
        handleClientDisconnect(ws);
    });
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

function handleClientDisconnect(ws) {
    let user = clients.find(c => c.ws == ws);
    if (user) {
        console.log(`${user.first_name} ${user.last_name} disconnected`);
        user.disconnected = true;
    } else {
        console.error('Client disconnected but the user was not found');
    }
}

function handleClientMessage(ws, message) {
    let user = clients.find(c => c.ws == ws);
    if (user) {
        if (user.admin) {
            switch (message.action) {
                case 'CHAT_MESSAGE':
                    let receiverClients = clients.filter(c => c.id == message.receiver_id && !c.disconnected);
                    let senderClients = clients.filter(c => c.id == message.sender_id && !c.disconnected);
                    let payload = {
                        message: message.message,
                        action: 'CHAT_MESSAGE'
                    };
                    // console.log(receiver, sender);
                    if (receiverClients.length > 0) {
                        payload.received = 1;
                        receiverClients.forEach(client => {
                            client.ws.send(JSON.stringify(payload));
                        })
                    }
                    if (senderClients.length > 0) {
                        payload.received = 0;
                        senderClients.forEach(client => {
                            client.ws.send(JSON.stringify(payload));
                        })
                    }
                    break;
            }
        }
    } else {
        messages.push({
            ws: ws,
            message: message,
            sent: false
        });
    }
}
const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const fetch = require('node-fetch');
const { type } = require('os');
const app = express();
const server = http.createServer(app);
const ws = new WebSocket.Server({ server });
const moment = require('moment');
require('moment-timezone');

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
            console.log(message);
            let receiverClients = clients.filter(c => c.id == message.receiver_id && !c.disconnected);
            switch (message.action) {
                case 'CHAT_MESSAGE':
                    let senderClients = clients.filter(c => c.id == message.sender_id && !c.disconnected);

                    let payload = {
                        action: message.action,
                        message: {
                            job_hashed_id: message.job_hashed_id,
                            message: message.message,
                            time: message.time,
                            id: message.id,
                            other_full_name: message.other_full_name,
                            job_title: message.job_title
                        }
                    };
                    if (receiverClients.length > 0) {
                        payload.message.received = 1;
                        payload.message.other_user_id = message.sender_id;
                        receiverClients.forEach(client => {
                            client.ws.send(JSON.stringify(payload));
                        });
                    }
                    if (senderClients.length > 0) {
                        payload.message.received = 0;
                        payload.message.other_user_id = message.receiver_id;
                        senderClients.forEach(client => {
                            client.ws.send(JSON.stringify(payload));
                        });
                    }
                    break;

                case 'CHAT_SEEN':
                    if (receiverClients.length > 0) {
                        receiverClients.forEach(client => {
                            client.ws.send(JSON.stringify(message));
                        });
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
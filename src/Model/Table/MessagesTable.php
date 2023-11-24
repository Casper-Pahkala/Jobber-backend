<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Messages Model
 *
 * @method \App\Model\Entity\Message newEmptyEntity()
 * @method \App\Model\Entity\Message newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Message[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Message get($primaryKey, $options = [])
 * @method \App\Model\Entity\Message findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Message patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Message[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Message|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Message saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Message[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Message[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Message[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Message[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 */
class MessagesTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);
        $this->setTable('messages');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->belongsTo('Receiver', [
            'foreignKey' => 'receiver_id',
            'className' => 'Users'
        ]);

        $this->belongsTo('Sender', [
            'foreignKey' => 'sender_id',
            'className' => 'Users'
        ]);

        $this->belongsTo('Job', [
            'foreignKey' => 'job_hashed_id',
            'className' => 'Jobs',
            'bindingKey' => 'hashed_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->scalar('job_hashed_id')
            ->maxLength('job_hashed_id', 255)
            ->allowEmptyString('job_hashed_id');

        $validator
            ->integer('sender_id')
            ->allowEmptyString('sender_id');

        $validator
            ->integer('receiver_id')
            ->allowEmptyString('receiver_id');

        $validator
            ->scalar('message')
            ->allowEmptyString('message');

        $validator
            ->scalar('attachment_id')
            ->maxLength('attachment_id', 255)
            ->allowEmptyString('attachment_id');

        $validator
            ->scalar('attachment_name')
            ->maxLength('attachment_name', 255)
            ->allowEmptyString('attachment_name');

        $validator
            ->dateTime('modified_at')
            ->notEmptyDateTime('modified_at');

        $validator
            ->dateTime('created_at')
            ->notEmptyDateTime('created_at');

        $validator
            ->dateTime('seen')
            ->allowEmptyDateTime('seen');

        return $validator;
    }
}

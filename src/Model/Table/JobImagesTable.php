<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * JobImages Model
 *
 * @method \App\Model\Entity\JobImage newEmptyEntity()
 * @method \App\Model\Entity\JobImage newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\JobImage[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\JobImage get($primaryKey, $options = [])
 * @method \App\Model\Entity\JobImage findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\JobImage patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\JobImage[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\JobImage|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\JobImage saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\JobImage[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\JobImage[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\JobImage[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\JobImage[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 */
class JobImagesTable extends Table
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

        $this->setTable('job_images');
        $this->setDisplayField('name');
        $this->setPrimaryKey('id');
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
            ->scalar('name')
            ->maxLength('name', 255)
            ->requirePresence('name', 'create')
            ->notEmptyString('name');

        $validator
            ->scalar('job_hashed_id')
            ->maxLength('job_hashed_id', 255)
            ->allowEmptyString('job_hashed_id');

        $validator
            ->integer('image_index')
            ->requirePresence('image_index', 'create')
            ->notEmptyFile('image_index');

        $validator
            ->dateTime('created_at')
            ->allowEmptyDateTime('created_at');

        return $validator;
    }
}

<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * ProfileAreas Model
 *
 * @property \App\Model\Table\ProfilesTable&\Cake\ORM\Association\BelongsTo $Profiles
 * @property \App\Model\Table\AreasTable&\Cake\ORM\Association\BelongsTo $Areas
 *
 * @method \App\Model\Entity\ProfileArea newEmptyEntity()
 * @method \App\Model\Entity\ProfileArea newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\ProfileArea[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\ProfileArea get($primaryKey, $options = [])
 * @method \App\Model\Entity\ProfileArea findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\ProfileArea patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\ProfileArea[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\ProfileArea|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\ProfileArea saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\ProfileArea[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\ProfileArea[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\ProfileArea[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\ProfileArea[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 */
class ProfileAreasTable extends Table
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

        $this->setTable('profile_areas');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->belongsTo('Profiles', [
            'foreignKey' => 'profile_id',
        ]);
        $this->belongsTo('Areas', [
            'foreignKey' => 'area_id',
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
            ->integer('profile_id')
            ->allowEmptyFile('profile_id');

        $validator
            ->integer('area_id')
            ->allowEmptyString('area_id');

        $validator
            ->dateTime('created_at')
            ->allowEmptyDateTime('created_at');

        $validator
            ->dateTime('updated_at')
            ->allowEmptyDateTime('updated_at');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules): RulesChecker
    {
        $rules->add($rules->existsIn('profile_id', 'Profiles'), ['errorField' => 'profile_id']);
        $rules->add($rules->existsIn('area_id', 'Areas'), ['errorField' => 'area_id']);

        return $rules;
    }
}

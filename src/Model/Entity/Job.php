<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Job Entity
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string|null $area
 * @property int|null $contract_type
 * @property int|null $hours
 * @property \Cake\I18n\FrozenTime|null $date
 * @property string|null $salary
 * @property int|null $salary_type
 * @property int|null $user_id
 * @property bool|null $is_deleted
 * @property \Cake\I18n\FrozenTime|null $created_at
 * @property \Cake\I18n\FrozenTime|null $modified_at
 * @property string|null $hashed_id
 */
class Job extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array<string, bool>
     */
    protected $_accessible = [
        'title' => true,
        'description' => true,
        'area' => true,
        'contract_type' => true,
        'hours' => true,
        'date' => true,
        'salary' => true,
        'salary_type' => true,
        'user_id' => true,
        'is_deleted' => true,
        'created_at' => true,
        'modified_at' => true,
        'hashed_id' => true,
    ];
}

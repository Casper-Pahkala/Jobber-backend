<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Job Entity
 *
 * @property int $id
 * @property int|null $user_id
 * @property string|null $title
 * @property string|null $description
 * @property \Cake\I18n\FrozenDate|null $date
 * @property int|null $estimated_time
 * @property string|null $full_salary
 * @property \Cake\I18n\FrozenTime|null $modified_at
 * @property \Cake\I18n\FrozenTime|null $created_at
 * @property float|null $lat
 * @property float|null $lng
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
        'user_id' => true,
        'title' => true,
        'description' => true,
        'address' => true,
        'date' => true,
        'estimated_time' => true,
        'full_salary' => true,
        'pictures' => true,
        'modified_at' => true,
        'created_at' => true,
        'lat' => true,
        'lng' => true,
        'hashed_id' => true,
    ];
}

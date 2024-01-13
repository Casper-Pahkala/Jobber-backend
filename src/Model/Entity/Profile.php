<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Profile Entity
 *
 * @property int $id
 * @property int|null $user_id
 * @property bool|null $show_publicly
 * @property int|null $visibility
 * @property int|null $role
 * @property string|null $description
 * @property \Cake\I18n\FrozenTime|null $created_at
 * @property \Cake\I18n\FrozenTime|null $modified_at
 *
 * @property \App\Model\Entity\User $user
 * @property \App\Model\Entity\ProfileArea[] $profile_areas
 * @property \App\Model\Entity\ProfileJob[] $profile_jobs
 */
class Profile extends Entity
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
        'show_publicly' => true,
        'visibility' => true,
        'role' => true,
        'description' => true,
        'created_at' => true,
        'modified_at' => true,
        'user' => true,
        'profile_areas' => true,
        'profile_jobs' => true,
    ];
}

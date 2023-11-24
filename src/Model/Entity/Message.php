<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Message Entity
 *
 * @property int $id
 * @property string|null $job_hashed_id
 * @property int|null $sender_id
 * @property int|null $receiver_id
 * @property string|null $message
 * @property string|null $attachment_id
 * @property \Cake\I18n\FrozenTime $modified_at
 * @property \Cake\I18n\FrozenTime $created_at
 * @property \Cake\I18n\FrozenTime|null $seen
 *
 * @property \App\Model\Entity\User $receiver
 * @property \App\Model\Entity\User $sender
 * @property \App\Model\Entity\Job $job
 */
class Message extends Entity
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
        'job_hashed_id' => true,
        'sender_id' => true,
        'receiver_id' => true,
        'message' => true,
        'attachment_id' => true,
        'attachment_name' => true,
        'modified_at' => true,
        'created_at' => true,
        'seen' => true,
        'receiver' => true,
        'sender' => true,
        'job' => true,
    ];
}

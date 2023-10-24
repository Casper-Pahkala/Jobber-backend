<?php

namespace App\Model\Behavior;

use Cake\ORM\Behavior;
use Cake\Utility\Security;

class HashedIdBehavior extends Behavior
{
    public function beforeSave($event, $entity, $options)
    {
        if ($entity->isNew() && !$entity->get('hashed_id')) {
            $entity->set('hashed_id', Security::hash(uniqid('', true), 'sha256', true));
        }
    }
}

?>
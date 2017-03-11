<?php

namespace Tests\Unit\Traits;

trait TestData
{
    private $testTask = [
        [
            'name' => 'Task Name',
            'priority' => 1,
            'status' => true,
        ],
        [
            'priority' => 2,
            'status' => false,
        ],
        [
            'priority' => 3,
            'status' => true,
        ],
    ];

    private $testTags = [
        [
            'tags' => [
                'new1',
                'old1',
            ],
        ],
        [
            'tags' => [
                'new2',
                'old2',
                'mid2',
            ],
        ],
        [
            'tags' => [
                'new3',
                'old3',
                'old4',
            ],
        ],
    ];
}

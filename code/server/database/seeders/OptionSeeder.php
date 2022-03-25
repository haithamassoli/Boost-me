<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Option::create([
            'option' => 'Live Stream',
            'price' => 20,
            'tags' => "NEW",
            'description' => 'The booster will send you a private link to a live stream where you can watch the booster fulfilling your order.'
        ]);

        Option::create([
            'option' => 'Play With Booster',
            'price' => 30,
            'tags' => "HOT",
            'description' => 'You will not need to share your account credentials with the booster. Instead, the booster will play together with you in a shared lobby.'
        ]);

        Option::create([
            'option' => 'Appear Online',
            'price' => 0,
            'description' => 'The booster will play with offline mode enabled so your friends are not aware that there is another person playing on your account.'
        ]);
        Option::create([
            'option' => 'Priority Order',
            'price' => 20,
            'description' => 'The order will be prioritized over non-priority orders and usually these are completed around 2 times faster.'
        ]);
        Option::create([
            'option' => 'Priority Order',
            'price' => 0,
            'description' => 'You can select agents and communicate other preferences free of charge. Agent selection is available after the order is made.'
        ]);
    }
}

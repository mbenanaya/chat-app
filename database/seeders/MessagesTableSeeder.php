<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('messages')->truncate();
        DB::table('messages')->insert([
            [
                'sender_id'   => 3,
                'receiver_id' => 1,
                'message'     => 'Fin a Kbid hani lia',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-10-26 12:15:00'),
            ],
            [
                'sender_id'   => 1,
                'receiver_id' => 3,
                'message'     => 'cv 3chiri nta mzn',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-10-26 12:23:30'),
            ],
            [
                'sender_id'   => 3,
                'receiver_id' => 1,
                'message'     => 'بخير الله يحفظك.. فين شادها',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-10-26 13:47:47'),
            ],
            [
                'sender_id'   => 1,
                'receiver_id' => 2,
                'message'     => 'Fin a weld Majida cv hhh',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-11-14 09:17:03'),
            ],
            [
                'sender_id'   => 4,
                'receiver_id' => 1,
                'message'     => 'Fin Asi Mouhcine hania',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-11-25 12:15:00'),
            ],
            [
                'sender_id'   => 3,
                'receiver_id' => 2,
                'message'     => 'Fin aweldi cv',
                'created_at'  => Carbon::createFromFormat('Y-m-d H:i:s', '2023-10-30 22:15:00'),
            ],
        ]);
    }
}

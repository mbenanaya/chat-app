<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();
        DB::table('users')->insert([
            [
                'name'     => 'Mouhcine BEN-ANAYA',
                'email'    => 'mba@mba.mba',
                'password' => Hash::make('12341234'),
            ],
            [
                'name'     => 'Youness AMHIDRA',
                'email'    => 'younes@mba.mba',
                'password' => Hash::make('12341234'),
            ],
            [
                'name'     => 'Issam SABIR',
                'email'    => 'issam@me.dev',
                'password' => Hash::make('12341234'),
            ],
            [
                'name'     => 'Khalid LEFHAL',
                'email'    => 'khalid@me.dev',
                'password' => Hash::make('12341234'),
            ],
        ]);
    }
}

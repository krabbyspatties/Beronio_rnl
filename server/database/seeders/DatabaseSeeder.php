<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'first_name' => 'Test',
            'middle_name' => 'Test',
            'last_name' => 'Test',
            'suffix_name' => 'Test',
            'profile_picture' => '',
            'age' => 43,
            'birth_date' => '2000-01-01',
            'gender_id' => 1,
            'address' => 'Test',
            'contact_number' => 'Test',
            'email' => 'Test@gmail.com',
            'password' => Hash::make('123456789'),
            'is_deleted' => false,
        ]);
    }
}

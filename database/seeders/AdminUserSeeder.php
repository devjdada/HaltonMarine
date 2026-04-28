<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = env('ADMIN_PASSWORD');

        if (empty($password)) {
            $password = \Illuminate\Support\Str::password(16);
            $this->command->warn("⚠  ADMIN_PASSWORD not set in .env — generated a random password:");
            $this->command->info("   Email   : admin@haltonmarine.com");
            $this->command->info("   Password: {$password}");
            $this->command->warn("   Save this now — it will not be shown again.");
        }

        User::updateOrCreate(
            ['email' => 'admin@haltonmarine.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make($password),
            ]
        );
    }
}

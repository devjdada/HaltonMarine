<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Client;

class ClientLogoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mappings = [
            'NNPC' => 'clients/nnpc.jpeg',
            'Nigeria LNG Limited' => 'clients/nlng.jpeg',
            'Total' => 'clients/total_energies.jpeg',
            'Shell' => 'clients/shell.jpeg',
            'BP' => 'clients/bp.jpeg',
            'Chevron' => 'clients/chevron.jpeg',
            'Eni' => 'clients/eni.jpeg',
            'Petrobras' => 'clients/petrobras.jpeg',
            'OPEC' => 'clients/opec.jpeg',
            'Gazprom' => 'clients/gazprom.jpeg',
            'Nasta Energy' => 'clients/nasta_energy.jpeg',
            'Total Energies' => 'clients/total_energies.jpeg',
        ];

        foreach ($mappings as $name => $logoPath) {
            Client::where('name', $name)->update(['logo' => $logoPath]);
        }
    }
}

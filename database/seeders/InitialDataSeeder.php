<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Project;
use App\Models\Client;
use App\Models\TeamMember;

class InitialDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Services
        $services = [
            [
                'title' => 'Comprehensive Dredging & Marine Solutions',
                'description' => 'Complete range of dredging services designed to meet demands of coastal and inland waterway projects. Expertise in land/shore reclamation, river/sea sweeping, precise canalization, pipeline crossings, and sand stock piling for construction.',
                'image' => null,
            ],
            [
                'title' => 'Specialized Marine Services',
                'description' => 'Robust logistical support in the challenging riverine areas of the Niger Delta. Specialized in efficient and safe movement of essential materials including sand, clippings, and building supplies using modern barges.',
                'image' => null,
            ],
            [
                'title' => 'Vessel Operations & Logistics',
                'description' => 'Comprehensive vessel operations and marine project management. Technical and logistics support for offshore oil and gas industry, flexible vessel chartering, subsea engineering, welding, and submarine pipe/cable laying services.',
                'image' => null,
            ],
            [
                'title' => 'Equipment Leasing & Logistics',
                'description' => 'Extensive equipment lease and logistics services. Rent dredgers, excavators, swamp buggies, cranes, trucks, boats, OSVs, mooring boats, tugboats. Critical support services including bunkering and cargo handling for offshore operations.',
                'image' => null,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }

        // Projects
        $projects = [
            [
                'title' => 'Sandfilling of Olare Water Layout, Ogborikoko Community',
                'category' => 'Major Dredging Projects',
                'location' => 'Delta State',
                'description' => 'Large-scale sandfilling and reclamation project to expand community residential and commercial layout using modern dredging technology.',
                'image' => '/storage/projects/dredging.png'
            ],
            [
                'title' => 'Sandfilling of Agbigborodo Community',
                'category' => 'Major Dredging Projects',
                'location' => 'Delta State',
                'description' => 'Comprehensive shoreline reclamation and community sandfilling project aimed at improving environmental stability and providing new land for development.',
                'image' => '/storage/projects/dredging.png'
            ],
            [
                'title' => 'Emergency Dredging of Ebrohim Creek',
                'category' => 'Major Dredging Projects',
                'location' => 'Delta State',
                'description' => 'Critical creek deepening and sweeping project to restore maritime navigation and improve water flow in vital community waterways.',
                'image' => '/storage/projects/dredging.png'
            ],
            [
                'title' => 'Emergency Channelization - Oginibo Community',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Precise channelization through riverine terrain to create safe and efficient maritime corridors for community transport and logistics.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Jeddo-Warri',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Strategic waterway development connecting Jeddo and Warri, enhancing regional connectivity through expert excavation and channel management.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Owhrode',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Restoration of natural water channels to prevent flooding and ensure smooth navigation for local marine activities.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Orho-Agbarho',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Expert channelization project involving the removal of debris and sediment to maintain deep water access in the Agbarho region.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Ekakpamre',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Comprehensive waterway management project to improve drainage and maritime access for the Ekakpamre community.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Okukoko',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Critical emergency works to clear and expand channels, vital for local economic activities and flood control.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Igbogidi',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Meticulous channel sweeping and expansion to facilitate larger vessel movement in community creeks.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Emergency Channelization - Ughotor',
                'category' => 'Extensive Channelization Works',
                'location' => 'Delta State',
                'description' => 'Specialized maritime corridor development in challenging Delta terrain to support local oil and gas logistical needs.',
                'image' => '/storage/projects/channelization.png'
            ],
            [
                'title' => 'Complex Canalization Projects - Rivers State',
                'category' => 'Regional Expertise',
                'location' => 'Rivers State',
                'description' => 'High-precision canalization and river management operations in Rivers State, showcasing our regional technical leadership.',
                'image' => '/storage/projects/canalization.png'
            ],
            [
                'title' => 'River Sweeping Operations - Rivers State',
                'category' => 'Regional Expertise',
                'location' => 'Rivers State',
                'description' => 'Effective riverbed sweeping to remove silt and obstacles, ensuring year-round navigability for commercial vessels.',
                'image' => '/storage/projects/canalization.png'
            ],
            [
                'title' => 'Canalization Projects - Cross River State',
                'category' => 'Regional Expertise',
                'location' => 'Cross River State',
                'description' => 'Expanding our marine solutions to Cross River State with dedicated canalization projects for improved coastal infrastructure.',
                'image' => '/storage/projects/canalization.png'
            ],
            [
                'title' => 'Sweeping Jobs - Cross River State',
                'category' => 'Regional Expertise',
                'location' => 'Cross River State',
                'description' => 'Industrial river sweeping and harbor maintenance services to support the growing maritime economy of Cross River.',
                'image' => '/storage/projects/canalization.png'
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Clients
        $clients = [
            ['name' => 'NNPC'],
            ['name' => 'Nigeria LNG Limited'],
            ['name' => 'Total'],
            ['name' => 'ExxonMobil'],
            ['name' => 'Shell'],
            ['name' => 'BP'],
            ['name' => 'Chevron'],
            ['name' => 'Eni'],
            ['name' => 'Petrobras'],
            ['name' => 'OPEC'],
            ['name' => 'Gazprom'],
            ['name' => 'Nasta Energy'],
            ['name' => 'Total Energies'],
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }

        // Team Members
        $team = [
            ['name' => 'Nath Okoroafor', 'position' => 'MD'],
            ['name' => 'Engr. Ugonna Okoroafor', 'position' => 'Director Operations'],
            ['name' => 'Engr. Chimezie Ogunkah', 'position' => 'Manager Operations'],
            ['name' => 'Mojisola Akinrinmade', 'position' => 'Administrative/Office Manager'],
        ];

        foreach ($team as $member) {
            TeamMember::create($member);
        }

        // Equipment
        $equipment = [
            [
                'name' => '16 x 16 inches Ladder Dredger',
                'specs' => '3408 Cat Engine | 18-meter ladder | Ideal for significant dredging tasks',
                'type' => 'Core',
            ],
            [
                'name' => '14 x 14 inches Ladder Dredger',
                'specs' => '3408 Cat Engine | 18-meter ladder | Versatile for wide range of projects',
                'type' => 'Core',
            ],
            [
                'name' => '12 x 12 inches Ladder Dredger',
                'specs' => '3406 Cat Engine | 18-meter ladder | Perfect for precise dredging work',
                'type' => 'Core',
            ],
            [
                'name' => '320 CAT Excavator',
                'specs' => 'Reliable and powerful earth-moving machine for land-based support and reclamation',
                'type' => 'Core',
            ],
            ['name' => 'Axe Bow Ships', 'type' => 'Extended'],
            ['name' => 'Fast Support Intervention Vessels (FSIV)', 'type' => 'Extended'],
            ['name' => 'FSOs & FPSOs', 'type' => 'Extended'],
            ['name' => 'Mooring Vessels', 'type' => 'Extended'],
            ['name' => 'Houseboats', 'type' => 'Extended'],
            ['name' => 'Bunkering Vessels', 'type' => 'Extended'],
            ['name' => 'Tug-Boats', 'type' => 'Extended'],
        ];

        foreach ($equipment as $item) {
            \App\Models\Equipment::create($item);
        }
    }
}

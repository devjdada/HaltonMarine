<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Banner;
use App\Models\Service;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;

class FixImagesSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Fix Banners
        // Map missing banner images to existing ones in storage/app/public/banners
        $bannerMapping = [
            'banners/about-banner.jpg' => 'banners/marine_expertise_banner.png',
            'banners/services-banner.jpg' => 'banners/marine_dredging_banner.png',
            'banners/projects-banner.jpg' => 'banners/offshore_logistics_banner.png',
            'banners/gallery-banner.jpg' => 'banners/marine_expertise_banner.png',
            'banners/equipment-banner.jpg' => 'banners/offshore_logistics_banner.png',
            'banners/contact-banner.jpg' => 'banners/marine_expertise_banner.png',
            'banners/service-marine.jpg' => 'banners/marine_expertise_banner.png',
            'banners/service-dredging.jpg' => 'banners/marine_dredging_banner.png',
            'banners/service-vessel.jpg' => 'banners/offshore_logistics_banner.png',
            'banners/service-equipment.jpg' => 'banners/offshore_logistics_banner.png',
        ];

        foreach ($bannerMapping as $missing => $replacement) {
            Banner::where('image', $missing)->update(['image' => $replacement]);
        }

        // 2. Fix Services
        // The directory storage/app/public/services has: dredging.png, leasing.png, logistics.png, specialized.png
        $services = Service::all();
        foreach ($services as $service) {
            if ($service->image === null) {
                if (str_contains(strtolower($service->title), 'dredging')) {
                    $service->update(['image' => 'services/dredging.png']);
                } elseif (str_contains(strtolower($service->title), 'specialized')) {
                    $service->update(['image' => 'services/specialized.png']);
                } elseif (str_contains(strtolower($service->title), 'vessel')) {
                    $service->update(['image' => 'services/logistics.png']);
                } elseif (str_contains(strtolower($service->title), 'leasing')) {
                    $service->update(['image' => 'services/leasing.png']);
                }
            }
        }

        // 3. Fix Projects
        // Projects have paths like "/storage/projects/dredging.png". 
        // We should normalize them to "projects/dredging.png" if the frontend prepends /storage/
        $projects = Project::all();
        foreach ($projects as $project) {
            if (str_starts_with($project->image, '/storage/')) {
                $newPath = str_replace('/storage/', '', $project->image);
                $project->update(['image' => $newPath]);
            }
        }
    }
}

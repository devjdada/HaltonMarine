<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Banner;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $banners = [
            [
                'page' => 'home',
                'title' => 'Comprehensive Dredging & Marine Solutions',
                'subtitle' => 'Complete range of dredging services designed to meet demands of coastal and inland waterway projects.',
                'image' => 'banners/service-dredging.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'about',
                'title' => 'About Halton Marine',
                'subtitle' => 'Learn about our mission, vision, and the team driving our success.',
                'image' => 'banners/about-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'services',
                'title' => 'Our Expertise',
                'subtitle' => 'Delivering world-class marine and dredging services across Nigeria.',
                'image' => 'banners/services-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'projects',
                'title' => 'Featured Projects',
                'subtitle' => 'A showcase of our successfully delivered marine and dredging operations.',
                'image' => 'banners/projects-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'gallery',
                'title' => 'Visual Portfolio',
                'subtitle' => 'Explore our project gallery featuring our fleet and operations in action.',
                'image' => 'banners/gallery-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'equipment',
                'title' => 'Our Fleet & Equipment',
                'subtitle' => 'Modern, well-maintained dredging and marine equipment for lease.',
                'image' => 'banners/equipment-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
            [
                'page' => 'contact',
                'title' => 'Get in Touch',
                'subtitle' => 'Contact us for your marine and dredging project requirements.',
                'image' => 'banners/contact-banner.jpg',
                'type' => 'image',
                'is_active' => true,
            ],
        ];

        foreach ($banners as $banner) {
            Banner::create($banner);
        }
    }
}

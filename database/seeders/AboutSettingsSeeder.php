<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class AboutSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            'about_title' => 'About Halton Marine',
            'about_subheading' => 'Leading Indigenous Excellence',
            'about_description_1' => 'Halton Marine consists of a highly experienced and technically competent workforce with diverse backgrounds and skills in the Marine Industry.',
            'about_description_2' => 'Established with a vision to revolutionize maritime services, we combine global standards with local expertise to deliver unparalleled value to our clients.',
            'about_main_image' => '/images/about/mission_vision.png',
            'about_indigenous_heading' => 'Indigenous Excellence & Local Impact',
            'about_indigenous_text' => 'We pride ourselves on our deep roots in Nigeria, fostering a culture of indigenous excellence that empowers local communities and drives sustainable growth in the maritime sector.',
            'about_indigenous_image' => '/images/about/mission_vision.png',
            'mission_title' => 'Our Mission',
            'mission_description' => 'Dedicated to offering world-class services through creativity and innovation, delivering effective solutions tailored to meet unique client needs.',
            'vision_title' => 'Our Vision',
            'vision_description' => 'To become a front-line participant and recognized leader within the Dredging Services and Marine Industry, setting new benchmarks for quality, safety, and efficiency.',
            'commitment_title' => 'Our Commitment',
            'commitment_description' => 'Committed to sustainable development, safeguarding worker health and the environment of local communities through responsible operations and social partnership.',
        ];

        foreach ($settings as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}

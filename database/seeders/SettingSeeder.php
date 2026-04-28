<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            'about_heading' => 'About Halton Marine',
            'about_subheading' => 'Leading Indigenous Excellence',
            'about_description_1' => 'Since our incorporation on February 25, 2014 (RC 1173334), Halton Marine and Dredging Services Ltd. has been committed to excellence in the marine and dredging industry. We are a dynamic and rapidly growing indigenous company making our mark across Nigeria\'s maritime sector.',
            'about_description_2' => 'Our strength lies in our highly skilled and innovative local workforce, combined with a professional management team whose technical expertise ensures every project is completed to the highest standards of quality and client satisfaction.',
            'mission_heading' => 'Our Mission',
            'mission_text' => 'Dedicated to offering world-class services through creativity and innovation, delivering effective solutions tailored to meet unique client needs.',
            'vision_heading' => 'Our Vision',
            'vision_text' => 'To become a front-line participant and recognized leader within the Dredging Services and Marine Industry, setting new benchmarks for quality, safety, and efficiency.',
            'commitment_heading' => 'Our Commitment',
            'commitment_text' => 'Committed to sustainable development, safeguarding worker health and the environment of local communities through responsible operations and social partnership.',
            'about_indigenous_heading' => 'Indigenous Excellence & Local Impact',
            'about_indigenous_text' => 'We pride ourselves on our deep roots in Nigeria, fostering a culture of indigenous excellence that empowers local communities and drives sustainable growth in the maritime sector.',
            'about_indigenous_image' => '/images/about/indigenous.png',
            'about_main_image' => '/images/about/main.png',
        ];

        foreach ($settings as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}

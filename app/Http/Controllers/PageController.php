<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Project;
use App\Models\Client;
use App\Models\TeamMember;
use App\Models\Gallery;
use App\Models\Banner;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $settings = \App\Models\Setting::pluck('value', 'key');
        return Inertia::render('Index', [
            'services' => Service::all(),
            'projects' => Project::all(),
            'clients' => Client::all(),
            'team' => TeamMember::all(),
            'equipment' => \App\Models\Equipment::all(),
            'banners' => Banner::where('page', 'home')->where('is_active', true)->get(),
            'settings' => $settings,
        ]);
    }

    public function about()
    {
        $settings = \App\Models\Setting::pluck('value', 'key');
        return Inertia::render('AboutPage', [
            'team' => TeamMember::all(),
            'settings' => $settings,
            'banner' => Banner::where('page', 'about')->where('is_active', true)->first(),
        ]);
    }

    public function services()
    {
        return Inertia::render('ServicesPage', [
            'services' => Service::all(),
            'equipment' => \App\Models\Equipment::all(),
            'banner' => Banner::where('page', 'services')->where('is_active', true)->first(),
        ]);
    }

    public function projects()
    {
        return Inertia::render('ProjectsPage', [
            'projects' => Project::all(),
            'clients' => Client::all(),
            'banner' => Banner::where('page', 'projects')->where('is_active', true)->first(),
        ]);
    }

    public function gallery()
    {
        return Inertia::render('GalleryPage', [
            'gallery' => Gallery::where('is_active', true)->get(),
            'banner' => Banner::where('page', 'gallery')->where('is_active', true)->first(),
        ]);
    }

    public function equipment()
    {
        // Assuming Equipment model exists based on routes
        $equipment = \App\Models\Equipment::all();
        return Inertia::render('EquipmentPage', [
            'equipment' => $equipment,
            'banner' => Banner::where('page', 'equipment')->where('is_active', true)->first(),
        ]);
    }

    public function contact()
    {
        return Inertia::render('ContactPage', [
            'banner' => Banner::where('page', 'contact')->where('is_active', true)->first(),
        ]);
    }
}

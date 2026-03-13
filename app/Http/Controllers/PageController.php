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
        return Inertia::render('Index', [
            'services' => Service::all(),
            'projects' => Project::all(),
            'clients' => Client::all(),
            'team' => TeamMember::all(),
            'equipment' => \App\Models\Equipment::all(),
            'banners' => Banner::where('is_active', true)->get(),
        ]);
    }

    public function about()
    {
        return Inertia::render('AboutPage', [
            'team' => TeamMember::all(),
        ]);
    }

    public function services()
    {
        return Inertia::render('ServicesPage', [
            'services' => Service::all(),
        ]);
    }

    public function projects()
    {
        return Inertia::render('ProjectsPage', [
            'projects' => Project::all(),
            'clients' => Client::all(),
        ]);
    }

    public function gallery()
    {
        return Inertia::render('GalleryPage', [
            'gallery' => Gallery::where('is_active', true)->get(),
        ]);
    }

    public function equipment()
    {
        // Assuming Equipment model exists based on routes
        $equipment = \App\Models\Equipment::all();
        return Inertia::render('EquipmentPage', [
            'equipment' => $equipment,
        ]);
    }

    public function contact()
    {
        return Inertia::render('ContactPage');
    }
}

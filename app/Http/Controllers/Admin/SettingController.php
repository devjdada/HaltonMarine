<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'about_title' => 'nullable|string',
            'about_description_1' => 'nullable|string',
            'about_description_2' => 'nullable|string',
            'mission_title' => 'nullable|string',
            'mission_description' => 'nullable|string',
            'vision_title' => 'nullable|string',
            'vision_description' => 'nullable|string',
            'commitment_title' => 'nullable|string',
            'commitment_description' => 'nullable|string',
        ]);

        foreach ($validated as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}

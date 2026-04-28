<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Storage;

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
            'about_subheading' => 'nullable|string',
            'about_description_1' => 'nullable|string',
            'about_description_2' => 'nullable|string',
            'mission_title' => 'nullable|string',
            'mission_description' => 'nullable|string',
            'vision_title' => 'nullable|string',
            'vision_description' => 'nullable|string',
            'commitment_title' => 'nullable|string',
            'commitment_description' => 'nullable|string',
            'about_indigenous_heading' => 'nullable|string',
            'about_indigenous_text' => 'nullable|string',
            'about_main_image' => 'nullable|image|max:2048',
            'about_indigenous_image' => 'nullable|image|max:2048',
        ]);

        foreach ($validated as $key => $value) {
            if ($request->hasFile($key)) {
                $path = $request->file($key)->store('settings', 'public');
                $value = Storage::url($path);
            }
            
            if ($value !== null) {
                Setting::updateOrCreate(['key' => $key], ['value' => $value]);
            }
        }

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}

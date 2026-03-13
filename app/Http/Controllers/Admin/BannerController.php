<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Banners/Index', [
            'banners' => Banner::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Banners/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'page' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:10240',
            'type' => 'required|in:image,video',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('banners', 'public');
            $validated['image'] = $path;
        }

        Banner::create($validated);

        return redirect()->route('admin.banners.index')->with('success', 'Banner created successfully.');
    }

    public function edit(Banner $banner)
    {
        return Inertia::render('Admin/Banners/Edit', [
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, Banner $banner)
    {
        $validated = $request->validate([
            'page' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'image' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:10240',
            'type' => 'required|in:image,video',
        ]);

        if ($request->hasFile('image')) {
            // Delete old file
            if ($banner->image) {
                Storage::disk('public')->delete($banner->image);
            }
            $path = $request->file('image')->store('banners', 'public');
            $validated['image'] = $path;
        }

        $banner->update($validated);

        return redirect()->route('admin.banners.index')->with('success', 'Banner updated successfully.');
    }

    public function destroy(Banner $banner)
    {
        if ($banner->image) {
            Storage::disk('public')->delete($banner->image);
        }
        $banner->delete();

        return redirect()->route('admin.banners.index')->with('success', 'Banner deleted successfully.');
    }
}

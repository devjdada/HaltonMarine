<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/projects', [PageController::class, 'projects'])->name('projects');
Route::get('/equipment', [PageController::class, 'equipment'])->name('equipment');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Legacy redirect for dashboard
    Route::get('/dashboard', function () {
        return redirect()->route('admin.dashboard');
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class);
        Route::resource('projects', \App\Http\Controllers\Admin\ProjectController::class);
        Route::resource('clients', \App\Http\Controllers\Admin\ClientController::class);
        Route::resource('equipment', \App\Http\Controllers\Admin\EquipmentController::class);
        Route::resource('team-members', \App\Http\Controllers\Admin\TeamMemberController::class);
        Route::resource('banners', \App\Http\Controllers\Admin\BannerController::class);
        Route::resource('galleries', \App\Http\Controllers\Admin\GalleryController::class);
        
        Route::get('settings', [\App\Http\Controllers\Admin\SettingController::class, 'index'])->name('settings.index');
        Route::post('settings', [\App\Http\Controllers\Admin\SettingController::class, 'update'])->name('settings.update');
    });
});

require __DIR__.'/auth.php';

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Update Services table
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('icon');
            $table->string('image')->nullable()->after('description');
        });

        // Update Projects table
        Schema::table('projects', function (Blueprint $table) {
            $table->string('image')->nullable()->after('location');
            $table->text('description')->nullable()->after('title');
        });

        // Create Galleries table
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('file_path');
            $table->enum('type', ['image', 'video'])->default('image');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galleries');

        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['image', 'description']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->string('icon')->nullable()->after('description');
            $table->dropColumn('image');
        });
    }
};

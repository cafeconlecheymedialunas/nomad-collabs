<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\FreelancerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/account', [AccountController::class, 'edit'])->name('account.edit');
    Route::patch('/account', [AccountController::class, 'update'])->name('account.update');
    Route::delete('/account', [AccountController::class, 'destroy'])->name('account.destroy');
});

Route::middleware('auth')->group(function () {
    // Usar Route::resource para generar las rutas necesarias
    Route::resource('freelancer', FreelancerController::class);
    Route::prefix('freelancer/{freelancer}')->group(function () {
        Route::resource('education', EducationController::class)->only(["store","update","destroy"])
            ->names([
                'store' => 'freelancer.education.store',
                'update' => 'freelancer.education.update',
                'destroy' => 'freelancer.education.destroy',
            ]);
    });
});

require __DIR__.'/auth.php';

<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Certification;
use App\Models\Education;
use App\Models\Faq;
use App\Models\Freelancer;
use App\Models\JobExperience;
use App\Models\Language;
use App\Models\LanguageLevel;
use App\Models\PaymentMethod;
use App\Models\Portfolio;
use App\Models\Requirement;
use App\Models\Service;
use App\Models\Skill;
use App\Models\SkillLevel;
use App\Models\Tag;
use App\Models\User;
use App\Models\Wallet;
use App\Models\WorkingHour;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FreelancerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      

        $users = User::all();
        $freelancers = collect([]);

        $languages = Language::all();


        $skills = Skill::all();

        $users->each(function ($user) use ($freelancers, $languages, $skills) {
            // Aquí estamos asociando un método de pago aleatorio con el usuario


            PaymentMethod::factory(2)->create([
                'user_id' => $user->id,
            ]);

            $freelancer = Freelancer::factory()->create([
                "user_id" => $user->id
            ]);

            Wallet::factory()->create([
                'user_id' => $user->id, // Cada usuario tiene una única wallet
            ]);

            $freelancers->push($freelancer);

            LanguageLevel::factory(10)->create([
                'user_id' => fn() => $user->id,
                'language_id' => fn() => $languages->random()->id,
            ]);

            WorkingHour::factory(10)->create([
                'user_id' => fn() => $user->id,
            ]);

            // Crear educaciones relacionadas con freelancers
            Education::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
            ]);

            // Crear experiencias laborales relacionadas con freelancers
            JobExperience::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
            ]);

            // Crear proyectos relacionados con freelancers
            Portfolio::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
            ]);

            // Crear niveles de habilidad relacionados con freelancers y habilidades
            SkillLevel::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
                'skill_id' => fn() => $skills->random()->id,
            ]);



            // Crear certificaciones relacionadas con freelancers
            Certification::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
            ]);

            // Crear servicios relacionados con freelancers
            $services = Service::factory(10)->create([
                'freelancer_id' => fn() => $freelancer->id,
            ]);


            $categories = Category::all();
            $tags = Tag::all();





            


            // Asignar categorías y etiquetas a los servicios
            $services->each(function ($service) use ($categories, $tags) {
                $service->categories()->attach($categories->random(rand(1, 3))->pluck('id')->toArray());
                $service->tags()->attach($tags->random(rand(1, 5))->pluck('id')->toArray());
            });
            Faq::factory(10)->create([
                'service_id' => fn() => $services->random()->id,
            ]);

            // Crear requisitos relacionados con servicios
            Requirement::factory(10)->create([
                'service_id' => fn() => $services->random()->id,
            ]);
        });
    }
}

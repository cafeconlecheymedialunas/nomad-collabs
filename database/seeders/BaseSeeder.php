<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Language;
use App\Models\Skill;
use App\Models\Category;
use App\Models\Tag;
use App\Models\PaymentMethod;
use App\Models\User;
use Database\Seeders\DefaultValues; // Asegúrate de que el helper esté importado

class BaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear métodos de pago
        PaymentMethod::factory(3)->create();
        
        // Crear etiquetas
        Tag::factory(10)->create();
        
        // Crear usuarios
        User::factory(10)->create();

        // Crear un usuario específico
        User::factory()->create([
            'name' => 'Mauro Developer',
            'email' => 'maurodeveloper86@gmail.com',
            'password' => bcrypt('arselocura1234'),
        ]);

        // Crear preguntas frecuentes relacionadas con servicios
        $categoriesData = DefaultValues::default("categories");
        // Crear categorías principales y sus subcategorías
        $allCategories = collect(); // Para almacenar todas las categorías

        foreach ($categoriesData as $categoryName => $subcategories) {
            // Crear categoría principal
            $category = Category::factory()->create([
                'title' => $categoryName,
                'parent_id' => null, // Categorías principales no tienen padre
            ]);

            $allCategories->push($category); // Agregar la categoría principal

            // Crear subcategorías para esta categoría
            foreach ($subcategories as $subcategoryName) {
                $subcategory = Category::factory()->create([
                    'title' => $subcategoryName,
                    'parent_id' => $category->id, // Establecer la categoría principal como padre
                ]);

                $allCategories->push($subcategory); // Agregar la subcategoría
            }
        }

        // Crear habilidades
        $skillsData = DefaultValues::default("skills");

        // Crear categorías principales y sus subcategorías
        $allSkills = collect(); // Para almacenar todas las habilidades

        foreach ($skillsData as $skillName => $subSkills) {
            // Crear habilidad principal
            $skill = Skill::factory()->create([
                'title' => $skillName
            ]);

            $allSkills->push($skill); // Agregar la categoría principal

            // Crear subhabilidades para esta categoría
            foreach ($subSkills as $subSkillName) {
                $subSkill = Skill::factory()->create([
                    'title' => $subSkillName
                ]);

                $allSkills->push($subSkill); // Agregar la subhabilidad
            }
        }

        // Crear idiomas
        $languagesData = DefaultValues::default("languages");
        $allLanguages = collect(); // Para almacenar todos los idiomas

        foreach ($languagesData as $code => $title) {
            $language = Language::factory()->create([
                'code' => $code,
                'title' => $title
            ]);

            $allLanguages->push($language);
        }
    }
}

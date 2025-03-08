<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Language;

use App\Models\Skill;

use App\Models\Category;
use App\Models\Tag;

use App\Models\PaymentMethod;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Recupero usuarios
       
        // Crear archivos
        Language::factory(10)->create();
        PaymentMethod::factory(3)->create();
        Skill::factory(20)->create();
        Tag::factory(10)->create();
        User::factory(10)->create();
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
    
                // Si quieres agregar sub-subcategorías (opcional)
                $subSubcategoriesCount = rand(1, 3); // Puedes definir un rango aleatorio
                for ($i = 0; $i < $subSubcategoriesCount; $i++) {
                    $subSubcategory = Category::factory()->create([
                        'title' => "{$subcategoryName} - Subcategoría " . ($i + 1), // Crear sub-subcategorías de forma dinámica
                        'parent_id' => $subcategory->id, // Establecer la subcategoría como padre
                    ]);
    
                    $allCategories->push($subSubcategory); // Agregar la sub-subcategoría
                }
            }
        }
        // Crear métodos de pago relacionados con usuarios
      
        // Crear retiros de billetera relacionados con billeteras
      

    


    
        $this->call([
            FreelancerSeeder::class,
            BuyerSeeder::class,
            OrderSeeder::class,
        ]);

        
       
       
    }

    // Array con las categorías principales y sus subcategorías
    


}

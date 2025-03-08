<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Language;

use App\Models\Skill;

use App\Models\Category;
use App\Models\Tag;

use App\Models\PaymentMethod;


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
      

    


        $login_seeder = new LoginAdminSeeder();
        $freelancer_seeder = new FreelancerSeeder();
        $buyer_seeder = new BuyerSeeder();
        $order_seeder = new OrderSeeder();

        $login_seeder->run();
        $freelancer_seeder->run();
        $buyer_seeder->run();
        $order_seeder->run();
    }

    // Array con las categorías principales y sus subcategorías
    


}

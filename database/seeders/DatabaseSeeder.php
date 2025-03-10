<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;



class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Recupero usuarios
    
        $this->call([
            BaseSeeder::class,
            FreelancerSeeder::class,
            BuyerSeeder::class,
            OrderSeeder::class,
        ]);       
             
    }

}

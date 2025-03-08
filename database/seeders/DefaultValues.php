<?php

namespace Database\Seeders;

class DefaultValues{
    public static function default($index){
        $defaults = ["categories"=>[
            'Desarrollo Web' => [
                'Desarrollo Frontend',
                'Desarrollo Backend',
                'Desarrollo Full Stack',
                'Desarrollo de Aplicaciones Móviles',
                'Desarrollo de Software a Medida',
                'Desarrollo de APIs',
                'E-commerce (Tiendas Online)',
            ],
            'Diseño Gráfico' => [
                'Diseño de Logotipos',
                'Diseño Web',
                'Diseño de Material Publicitario',
                'Diseño de Identidad Corporativa',
                'Ilustración Digital',
                'Diseño de Packaging',
                'Animación Gráfica',
            ],
            'Marketing Digital' => [
                'SEO',
                'Publicidad en Redes Sociales',
                'Email Marketing',
                'Marketing de Contenidos',
                'Publicidad en Google Ads',
                'Marketing de Influencers',
                'Analítica Web',
            ],
            'Redacción y Traducción' => [
                'Redacción de Contenidos',
                'Traducción de Idiomas',
                'Revisión y Corrección de Textos',
                'Redacción SEO',
                'Creación de Ebooks',
                'Escritura Creativa',
                'Subtitulación y Transcripción',
            ],
            'Asistencia Virtual' => [
                'Soporte Administrativo',
                'Gestión de Redes Sociales',
                'Atención al Cliente',
                'Gestión de Proyectos',
                'Asistente Personal',
                'Gestión de Agenda',
                'Atención Telefónica',
            ],
            'Consultoría y Coaching' => [
                'Consultoría Empresarial',
                'Coaching Profesional',
                'Consultoría en TI',
                'Consultoría Financiera',
                'Consultoría en Marketing',
                'Mentoría para Startups',
                'Consultoría en Gestión de Proyectos',
            ],
            'Fotografía y Video' => [
                'Fotografía de Producto',
                'Edición de Video',
                'Fotografía para Eventos',
                'Fotografía de Retratos',
                'Fotografía Inmobiliaria',
                'Filmación de Eventos',
                'Fotografía Aérea con Drones',
            ],
            'Desarrollo de Apps' => [
                'Desarrollo de Aplicaciones iOS',
                'Desarrollo de Aplicaciones Android',
                'Desarrollo de Aplicaciones Híbridas',
                'Desarrollo de Juegos Móviles',
                'Desarrollo de Aplicaciones Web Progresivas',
            ],
            'Ingeniería y Tecnología' => [
                'Ingeniería Electrónica',
                'Ingeniería Mecánica',
                'Ingeniería Civil',
                'Automatización de Procesos',
                'Internet de las Cosas (IoT)',
                'Desarrollo de Hardware',
            ],
            'Consultoría Legal' => [
                'Consultoría Jurídica',
                'Contratos y Acuerdos',
                'Propiedad Intelectual',
                'Asesoría en Derecho Laboral',
                'Asesoría en Derecho Corporativo',
                'Consultoría en Propiedad Industrial',
            ],
            'Soporte Técnico' => [
                'Soporte Técnico Informático',
                'Mantenimiento de Equipos',
                'Recuperación de Datos',
                'Instalación de Redes',
                'Administración de Servidores',
                'Soluciones en Nube',
            ],
            'Educación y Formación' => [
                'Clases de Idiomas',
                'Clases de Programación',
                'Tutorías Académicas',
                'Entrenamiento en Marketing Digital',
                'Clases de Diseño Gráfico',
                'Entrenamiento en Desarrollo Personal',
            ],
            'Ciberseguridad' => [
                'Auditoría de Seguridad',
                'Protección de Datos Personales',
                'Consultoría en Ciberseguridad',
                'Análisis de Vulnerabilidades',
                'Pentesting (Pruebas de Penetración)',
                'Seguridad en Redes y Servidores',
            ],
            'Música y Audio' => [
                'Composición Musical',
                'Producción Musical',
                'Edición de Audio',
                'Locución y Voice Over',
                'Creación de Podcasts',
                'Masterización de Audio',
            ],
            'Diseño de Moda' => [
                'Diseño de Ropa',
                'Diseño de Accesorios',
                'Diseño de Calzado',
                'Patronaje',
                'Consultoría de Estilo Personal',
                'Diseño de Moda Sostenible',
            ],
            'Artes Visuales' => [
                'Pintura y Escultura',
                'Arte Digital',
                'Arte Conceptual',
                'Diseño de Experiencia',
                'Ilustración Editorial',
            ],
            'Desarrollo de Juegos' => [
                'Desarrollo de Juegos para Móviles',
                'Desarrollo de Juegos en 3D',
                'Desarrollo de Juegos en Realidad Virtual',
                'Desarrollo de Juegos Multijugador',
                'Desarrollo de Juegos de PC',
            ],
        ]];

        return $defaults[$index] ?? [];
    }
}


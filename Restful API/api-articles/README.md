# PROJECT ARTICLES

## Instalaciones previas 
 Se ha de instalar xampp y composer (hará referencia al paquete PHP instalado de xampp)
<https://www.apachefriends.org/es/index.html>
<https://getcomposer.org/doc/00-intro.md>

Nota: Para instalar una aplicación ya desarrollada:
```
composer isntall
```

## Pasos para crear el proyecto
1. Crear proyecto en terminal 
```
composer create-project laravel/laravel api-articles
```
Podemos abrir proyecto con code . en el directorio creado.

2. Crear base de datos mysql __"api_articles"__ y vincular en archivo __.env__ (comprobar puerto y modificar campo DB_DATABASE)

3. Crear modelo articles con el controlador y las rutas con el comando
```
php artisan make:model Article -mcr
```

4. Modificar el artchivo database/migrations/*create_articles_table.php con los campos:
```
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->float('price');
            $table->integer('stock');
            $table->timestamps();
```
5. Modidificar el modelo App/models/Article.php especificando los campos que se puede rellenar
```
 protected $fillable = ['name', 'description', 'price', 'stock'];
```

6. Completar el app/Http/Controllers/ArticleController.php

7. Crear rutas en App/routes/api

8. Ejecutar las migraciones
```
php artisan migrate
```
Para volver a crear la BD
```
php artisan migrate:fresh --seed
```

9. Instalar paquete CORS (se añade automáticamente a http/kernel) y publicar paquete de configuración en config/cors (en versiones anteriores)
```
composer require fruitcake/laravel-cors
php artisan vendor:publish --tag="cors"
```

10. Poner en marcha el servidor
```
php artisan serve
```

## ENDPOINTS
Instalar ThunderClient para probar la API. 
/api/articles


## Resources
https://github.com/fruitcake/laravel-cors

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('cover_image');
            $table->longText('main_image');
            $table->longText('images');
            $table->string('category');
            $table->longText('tags');
            $table->float('price');
            $table->float('discount')->default(0);
            $table->string('currentDivision');
            $table->string('desiredDivision');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
};

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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('image')->default('no-image.jpg');
            $table->boolean('live_stream')->default(false);
            $table->integer("live_stream_price")->nullable();
            $table->boolean('appear_online')->default(false);
            $table->integer("appear_online_price")->nullable();
            $table->boolean('play_with_booster')->default(false);
            $table->integer("play_with_booster_price")->nullable();
            $table->integer("total_price");
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
        Schema::dropIfExists('orders');
    }
};

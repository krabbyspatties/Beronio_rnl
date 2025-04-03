<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_users', function (Blueprint $table) {
            $table->id('user_id');
            $table->String('first_name', 55);
            $table->String('middle_name', 55)->nullable();
            $table->String('last_name', 55);
            $table->String('suffix_name', 55)->nullable();
            $table->integer('age');
            $table->date('birth_date');
            $table->unsignedBigInteger('gender_id');
            $table->String('address', 255);
            $table->String('contact_number', 55);
            $table->String('email', 55)->unique();
            $table->String('password', 255);
            $table->tinyInteger('is_deleted')->default(false);
            $table->timestamps();

            $table->foreign('gender_id')
                ->references('gender_id')
                ->on('tbl_genders')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('tbl_users');
        Schema::enableForeignKeyConstraints();
    }
};

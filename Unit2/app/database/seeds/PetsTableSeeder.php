<?php
class PetsTableSeeder extends Seeder {
	public function run(){
		DB::table('pets')->delete();
		DB::table('pets')->insert(array(
			array('name' => "Pumpkin", 'age' => 7, 'type' => "cat"),
			array('name' => "Fido", 'age' => 3, 'type' => "dog"),
			array('name' => "Garfield", 'age' => 12, 'type' => "cat"),
			array('name' => "Fred", 'age' => 10, 'type' => "parakeet"),
			array('name' => "Thomas", 'age' => 4, 'type' => "llama"),
			array('name' => "Rolypoly", 'age' => 7, 'type' => "armadillo")
			));
	}

}
?>
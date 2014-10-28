<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::model('pet', 'Pet');

Route::get('/', function()
{
	return Redirect::to("pets");
});
Route::get('pets', function()
{
	$pets = Pet::all();
	return View::make('pets.index')
	->with('pets', $pets);
});

Route::get('pets/ordered', function(){
  $pets = Pet::orderBy('age', 'ASC')->get();
  return View::make('pets/index')
    ->with('pets', $pets);
});

Route::get('pets/cats', function(){
  $pets = Pet::where('type', 'cat')->get();
  return View::make('pets/index')
    ->with('pets', $pets);
});


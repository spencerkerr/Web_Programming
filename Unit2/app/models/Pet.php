<?php
class Pet extends Eloquent {
	public $timestamps = false;
	protected $fillable = array('name','age','type');
}
?>
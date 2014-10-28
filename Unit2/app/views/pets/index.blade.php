@extends('master')
@section('header')
<h2> List of Pets </h2>
@stop
@section('content')

  @foreach($pets as $pet)
    <div class="pet">
       <strong> {{$pet->name}} </strong> - {{$pet->age}} - {{$pet->type}}
    </div>
  @endforeach
  There are currently {{count($pets)}} pets on this site. Save them Today!!!
  <ul>
     <li><a href="{{URL::to('pets')}}">Show all pets</a></li>
     <li><a href="{{URL::to('pets/cats')}}">Show only cats</a></li>
     <li><a href="{{URL::to('pets/ordered')}}">Order by age</a></li>
   </ul>
  
@stop
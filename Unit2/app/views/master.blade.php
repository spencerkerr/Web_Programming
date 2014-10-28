<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Pets DB</title>
		<link rel"stylesheet" href="{{asset('bootstrap-3.0.0.min.css')}}">
	</head>
	<body>
		<h1> Team 13's Pet Shop </h1>
		<h2> We're not unlucky </h2>
		<div class="container">
			<div class="page-header">
				@yield('header')
			</div>
			@if(Session::has('message'))
				<div class="alert alert-success">
					{{Session::get('message')}}
				</div>
			@endif
		@yield('content')
		</div>
		<center><footer>Gotta Catch 'em All </footer></center>
	</body>
	
</html>
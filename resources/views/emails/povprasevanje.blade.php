<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>

<h3>Novo povpraševanje</h3>
<hr/>

<b>Podjetje / Ime:</b> {{ $interest['name'] }} <br/>
<b>E-poštni naslov:</b> {{ $interest['email'] }} <br/>
<b>Kontaktna tel. št.:</b> {{ $interest['phone'] }} <br/>
@if(!is_null($interest['message']))
<b>Sporočilo:</b> {{ $interest['message'] }} <br/>
@endif
</body>
</html>
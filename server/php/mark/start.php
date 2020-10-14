<?php
use Workerman\Protocols\Http\Response;
use Mark\App;

require 'vendor/autoload.php';

$api = new App('http://0.0.0.0:3000');

$api->count = 4; // process count

$api->post('/coin', function ($request) {
    // https://github.com/passwalls/mark/issues/4
    $post = json_decode($request->rawBody(), true);

    if ((bool) mt_rand(0, 1) === $post['bet']) {
        return new Response(200, ["Content-Type" => "application/json"], json_encode(["win" => true]));
    } else {
        return new Response(200, ["Content-Type" => "application/json"], json_encode(["win" => false]));
    }
});

$api->start();

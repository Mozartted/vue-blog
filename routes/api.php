<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix'=>'v1'],function(){
	Route::group(['middleware'=>'auth:api'],function(){
		Route::get('/user', function (Request $request) {
		    return Auth::user()->toJson();
		});
		Route::post('article/create',['as'=>'new', 'uses'=>'ArticleController@createOrEdit']);
		Route::delete('article/delete/{id}',['as'=>'delete', 'uses'=>'ArticleController@delete']);
	});
	Route::get('article/list',['as'=>'list', 'uses'=>'ArticleController@list']);
	Route::get('article/single/{id}',['as'=>'list', 'uses'=>'ArticleController@single']);
	Route::post('signup',['as'=>'getUser', 'uses'=>'Auth\RegisterController@RegisterUserReturnToken']);
});
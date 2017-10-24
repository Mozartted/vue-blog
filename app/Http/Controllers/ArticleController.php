<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\User;
use Auth;

class ArticleController extends Controller
{
    public function createOrEdit(Request $request){
    	$article = Article::find($request->id);
    	if($article !== null){
    		if($article->update($request->all())){
    			return response()->json([
    				'status'=>'success',
    				'message'=>'Article Updated successfully'
    			]);
    		}
    	}else{
    		// create a new article
    		$request->request->add(['user_id'=>Auth::user()->id]);
    		$article = Article::create($request->all());
    		if($article){
    			return response()->json([
    				'status'=>'success',
    				'message'=>'Article Created successfully'
    			]);
    		}
    	}
    }

    public function delete(Request $request, $id){
    	// delete article
    	if(Article::destroy($id)){
    		return response()->json([
    			'status'=>'success',
    			'message'=>'Article Deleted successfully'
    		]);
    	}else{
    		return response()->json([
    				'status'=>'error',
    				'message'=>'Sorry something went wrong somewhere'
    			]);
    	}
    }

    public function list(Request $request){
        $articles = Article::all();
        return response()->json([
            'status'=>'success',
            'message'=>'Article retrieved successfully',
            'data'=>$articles
        ]);
    }

    public function single($id){
    	$articles = Article::find($id);
    	return response()->json([
    		'status'=>'success',
    		'message'=>'Article retrieved successfully',
    		'data'=>$articles->toArray()
    	]);
    }
}

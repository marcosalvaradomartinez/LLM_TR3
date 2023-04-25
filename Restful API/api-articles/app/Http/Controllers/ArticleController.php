<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();
        return response()->json($articles);
    }

    public function searchByName($name)
    {
        if ($name){
            //$searchList = Article::where('name', 'LIKE', '%'.$name.'%')->latest()->paginate(15);
            $searchList = Article::where('name', 'LIKE', '%'.$name.'%')->get();
            return response()->json($searchList);
        }else{
            $data=[
                'message'=>'Empty input search'
            ];
            return response()->json($data);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $article = new Article;
        $article->name = $request->name;
        $article->description = $request->description;
        $article->price = $request->price;
        $article->stock = $request->stock;
        $article->save();
        $data=[
            'message'=>'Article creacted successfuly',
            'article'=>$article
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        // $data=[
        //     'message'=>'Article details',
        //     'article'=>$article
        // ];
        return response()->json($article);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $article->name = $request->name;
        $article->description = $request->description;
        $article->price = $request->price;
        $article->stock = $request->stock;
        $article->save();
        $data=[
            'message'=>'Article updated successfuly',
            'article'=>$article
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();
        $data=[
            'message'=>'Article deleted successfuly',
            'article'=>$article
        ];
        return response()->json($data);
    }
}

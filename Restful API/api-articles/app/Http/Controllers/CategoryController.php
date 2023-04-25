<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index(){
      $categories = Category::all();
      return response()->json($categories);
   }

   /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

   public function store(Request $request)
   {
       $category = new Category;
       $category->name = $request->name;
       $category->description = $request->description;
       $category->save();
       $data=[
           'message'=>'Category creacted successfuly',
           'category'=>$category
       ];
       return response()->json($data);
   }
}

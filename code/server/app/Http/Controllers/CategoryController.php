<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return view('admin.categories', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.category_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'exam_name' => 'required',
            'exam_desc' => 'required',
            'exam_num_qus' => 'required|integer',
            'exam_img' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        $category = Category::create([
            'exam_name' => $request->input('exam_name'),
            'exam_desc' => $request->input('exam_desc'),
            'exam_num_qus' => $request->input('exam_num_qus'),
        ]);
        return redirect('admin/categories')->with('success', 'Added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return view('admin.edit_category', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'exam_name' => 'required',
            'exam_desc' => 'required',
            'exam_num_qus' => 'required|integer',
            'exam_img' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        $Category = Category::where('id', $id)
            ->update([
                'exam_name' => $request->input('exam_name'),
                'exam_desc' => $request->input('exam_desc'),
                'exam_num_qus' => $request->input('exam_num_qus'),
            ]);
        return redirect('admin/categories')->with('success', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::destroy($id);
        return redirect('admin/categories')->with('success', 'Deleted successfully');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use App\Models\Exam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view('admin.users', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.user_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users|email',
            'password' => 'required|min:8',
            'role_type' => 'required',
            'image' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        if ($request->hasfile('image')) {
            $newImageName = time() . '-' . $request->name . '.' . $request->image->extension();
            $request->image->move(public_path('img'), $newImageName);
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'role_type' => $request->input('role_type'),
                'image' => $newImageName,
            ]);
            return redirect('admin/users')->with('success', 'Added successfully');
        } else {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'role_type' => $request->input('role_type'),
            ]);
            return redirect('admin/users')->with('success', 'Added successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $questions = Question::with(['userAnswer'  => function ($query) use ($id) {
            $query->where('user_id', $id);
        }])->get(); 
        $users= User::where('id', $id)->with('exams')->with('userAnswer')->get();
        // return response($questions);
        return view('admin.show_user', compact('questions', 'users'));
    }

    
    public function showResult($exam, $id)
    {
        $exam = Exam::where('exam_name',$exam)->with('questions')->with(['userAnswer' => function ($query) use ($id) {
            $query->where('user_id', $id);
        }])->get();

        return view('result', compact('exam'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return view('admin.edit_user', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'role_type' => 'required',
            'image' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        if ($request->hasfile('image')) {
            $newImageName = time() . '-' . $request->name . '.' . $request->image->extension();
            $request->image->move(public_path('img'), $newImageName);
            $user = User::where('id', $id)
                ->update([
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'password' => Hash::make($request->input('password')),
                    'role_type' => $request->input('role_type'),
                    'image' => $newImageName,
                ]);
            return redirect('admin/users')->with('success', 'Updated successfully');
        } else {
            $user = User::where('id', $id)
                ->update([
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'password' => Hash::make($request->input('password')),
                    'role_type' => $request->input('role_type'),
                ]);
            return redirect('admin/users')->with('success', 'Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
        return redirect('admin/users')->with('success', 'Deleted successfully');
    }
}

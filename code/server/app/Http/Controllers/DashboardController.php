<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\User;
use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $exams = Exam::all();
        return view('dashboard', compact('exams'));
    }

    public function show($id)
    {
        $exam = Exam::findOrFail($id);
        $users = UserAnswer::where('exam_id', $id)->get();
        $user = User::where('id', Auth::user()->id)->with('exams')->get();
        foreach ($user[0]->exams as $key => $item) {
            if(isset($item->id)){
                if($item->id == $id){
                    return redirect('/dashboard')->with('fail','You have take this exam already!!'); 
                }
            }  
        }
            return view('exam', compact('exam'));
        
    }


    public function result($id)
    {
        $exam = Exam::where('id',$id)->with('questions')->with(['userAnswer' => function ($query) {
            $query->where('user_id', Auth::user()->id);
        }])->get();

        return view('result', compact('exam'));
    }


    public function profile($id)
    {
        $user = User::where('id', $id)->with('exams')->get();
        return view('profile', compact('user'));
    }
}

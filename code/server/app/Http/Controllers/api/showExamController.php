<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Exam;
use App\Models\Question;
use App\Models\User;
use App\Models\UserAnswer;
use Illuminate\Support\Facades\Auth;

class showExamController extends Controller
{
    public function index($id)
    {
        $exam = Exam::where('id',$id)->with(['questions' => function ($query) {
            $query->select('id', 'question_point', 'question_options', 'question_content', 'exam_id');
        }])->get();

        return response($exam);
    }

    public function create(Request $request)
    {
        $mark=0;

        $question = Question::where('exam_id', $request->input('exam_id'))->get();

        foreach ($question as $key => $value) {
            if($value->correct_answer == $request->input('user_answer')){
                $mark = $value->question_point;
            };
        }

        $user = UserAnswer::create([
            'exam_id' => $request->input('exam_id'),
            'user_id' => $request->input('user_id'),
            'question_id' => $request->input('question_id'),
            'user_answer' => $request->input('user_answer'),
            'marks' => $mark,
        ]);

        return response($user);
    }


    public function done(Request $request)
    {
        $exam = Exam::find($request->input('exam_id'));
        $exam->users()->attach($request->input('user_id'));

        return response($exam);
    }
}

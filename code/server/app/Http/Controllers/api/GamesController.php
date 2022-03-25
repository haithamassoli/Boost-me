<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Option;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GamesController extends Controller
{
    public function index()
    {
        $games = Game::all();
        return response($games);
    }

    public function show($id)
    {
        $game = Game::where('id',$id)->get();

        return response($game);
    }


    public function getOption()
    {
        $option = Option::all();

        return response($option);
    }

    // public function create(Request $request)
    // {
    //     $mark=0;

    //     $question = Question::where('exam_id', $request->input('exam_id'))->get();

    //     foreach ($question as $key => $value) {
    //         if($value->correct_answer == $request->input('user_answer')){
    //             $mark = $value->question_point;
    //         };
    //     }

    //     $user = UserAnswer::create([
    //         'exam_id' => $request->input('exam_id'),
    //         'user_id' => $request->input('user_id'),
    //         'question_id' => $request->input('question_id'),
    //         'user_answer' => $request->input('user_answer'),
    //         'marks' => $mark,
    //     ]);

    //     return response($user);
    // }


    // public function done(Request $request)
    // {
    //     $exam = Exam::find($request->input('exam_id'));
    //     $exam->users()->attach($request->input('user_id'));

    //     return response($exam);
    // }
}

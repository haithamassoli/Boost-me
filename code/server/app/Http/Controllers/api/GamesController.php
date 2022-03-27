<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Option;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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

    public function buy(Request $request)
    {
        $game_id = $request->input('game_id');
        $all = $request->all();
        $game = Game::findOrFail($game_id);
        $game_price = ($game->price - $game->discount);
        $options = Option::all();
        $requestData=[];
        foreach ($all as $key => $value) {
            array_push($requestData,[$key => $value]);
        }
        foreach ($options as $key => $value) {
            if (in_array($value->option, $all)) {
                $game_price += $value->price;
            }
        }
        return response([$all, number_format($game_price,2)]);
        // $validator = Validator::make($request->all(), 
        // ['email' => 'email|required',
        // 'password' => 'required|min:8',] );
    
        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }


        // return response("yes");
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

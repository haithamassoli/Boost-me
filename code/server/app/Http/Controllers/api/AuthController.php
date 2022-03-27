<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function login(Request $request){
        
        $validator = Validator::make($request->all(), 
        ['email' => 'email|required',
        'password' => 'required|min:8',] );
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        
        $user = User::where('email', $request->input('email'))->first();

        if(!$user || !Hash::check($request->input('password'), $user->password)){
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        $token = $user->createToken('boostme')->plainTextToken;
        
        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }


    public function signup(Request $request){

        $validator = Validator::make($request->all(), 
            ['name' => 'required|string',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8',] );
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->$request->input('password')),
        ]);

        $token = $user->createToken('boostme')->plainTextToken;
        
        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }
}

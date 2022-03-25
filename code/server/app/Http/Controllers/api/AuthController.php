<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'email|required',
            'password' => 'required|min:8',
        ]);

        $user = User::where('email', $request->input('email'))->first();

        if(!$user || !Hash::check($request->input('password'), $user->password)){
            return response()->json([
                'message' => 'Email or Password is incorrect'
            ], 401);
        }
        $token = $user->createToken('boostme')->plainTextToken;
        
        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }


    public function signup(Request $request){
        $request->validate([
            'name' => 'required|string',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
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

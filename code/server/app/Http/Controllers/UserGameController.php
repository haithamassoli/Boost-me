<?php

namespace App\Http\Controllers;

use App\Models\UserGame;
use App\Http\Requests\StoreUserGameRequest;
use App\Http\Requests\UpdateUserGameRequest;

class UserGameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserGameRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserGameRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserGame  $userGame
     * @return \Illuminate\Http\Response
     */
    public function show(UserGame $userGame)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserGame  $userGame
     * @return \Illuminate\Http\Response
     */
    public function edit(UserGame $userGame)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserGameRequest  $request
     * @param  \App\Models\UserGame  $userGame
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserGameRequest $request, UserGame $userGame)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserGame  $userGame
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserGame $userGame)
    {
        //
    }
}

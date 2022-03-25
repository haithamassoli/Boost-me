<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Category;
use App\Http\Requests\StoreGameRequest;
use App\Http\Requests\UpdateGameRequest;
use Illuminate\Http\Request;


class GameController extends Controller
{

    public function index()
    {
        $games = Game::all();
        return view('admin.games', compact('games'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('admin.game_create', compact('categories'));
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'cover_image' => 'required',
            'main_image' => 'required',
            'images' => 'required',
            'category' => 'required',
            'tags' => 'required',
            'price' => 'required|integer',
            'discount' => 'required|integer',
            'currentDivision' => 'required',
            'desiredDivision' => 'required',
        ]);

            $game = Game::create([
                'name' => $request->input('name'),
                'cover_image' => $request->input('cover_image'),
                'main_image' => $request->input('main_image'),
                'images' => $request->input('images'),
                'category' => $request->input('category'),
                'price' => $request->input('price'),
                'tags' => $request->input('tags'),
                'currentDivision' => $request->input('currentDivision'),
                'desiredDivision' => $request->input('desiredDivision'),
            ]);

            return redirect('admin/games')->with('success', 'Added successfully');
        }
 
    
    public function edit($id)
    {
        $game = Game::findOrFail($id);
        $categories = Category::all();
        return view('admin.game_edit', compact(['game', 'categories']));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'main_image' => 'required',
            'cover_image' => 'required',
            'images' => 'required',
            'category' => 'required',
            'tags' => 'required',
            'price' => 'required|integer',
            'discount' => 'required|integer',
            'currentDivision' => 'required',
            'desiredDivision' => 'required',
        ]);

            $exam = Game::where('id', $id)
                ->update([
                    'name' => $request->input('name'),
                    'main_image' => $request->input('main_image'),
                    'cover_image' => $request->input('cover_image'),
                    'images' => $request->input('images'),
                    'category' => $request->input('category'),
                    'tags' => $request->input('tags'),
                    'price' => $request->input('price'),
                    'currentDivision' => $request->input('currentDivision'),
                    'desiredDivision' => $request->input('desiredDivision'),
                ]);

            return redirect('admin/games')->with('success', 'Updated successfully');
        
    }

    public function destroy($id)
    {
        Game::destroy($id);
        return redirect('admin/games')->with('success', 'Deleted successfully');
    }
}

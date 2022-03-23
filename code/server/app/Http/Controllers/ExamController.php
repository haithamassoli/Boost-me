<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Http\Requests\StoreExamRequest;
use App\Http\Requests\UpdateExamRequest;
use App\Models\Question;
use Illuminate\Http\Request;


class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $exams = Exam::all();
        return view('admin.exams', compact('exams'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $exam_num_qus = (int)$request->get('exam_num_qus');
        return view('admin.exam_create', compact('exam_num_qus'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreExamRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $counter = 1;

        $request->validate([
            'exam_name' => 'required',
            'exam_desc' => 'required',
            'exam_num_qus' => 'required|integer',
            'exam_img' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        $exam_num_qus = $request->input('exam_num_qus');

        if ($request->hasfile('exam_img')) {

            $newImageName = time() . '-' . $request->exam_name . '.' . $request->exam_img->extension();
            $request->exam_img->move(public_path('img'), $newImageName);

            $exam = Exam::create([
                'exam_name' => $request->input('exam_name'),
                'exam_desc' => $request->input('exam_desc'),
                'exam_num_qus' => $request->input('exam_num_qus'),
                'exam_img' => $newImageName,
            ]);

            $id = Exam::select('id')
                ->where('exam_name', '=', $request->input('exam_name'))
                ->first();
            $id = $id->id;

            for ($i = 0; $i < $exam_num_qus; $i++) {
                $question = Question::create([
                    'question_content' => $request->input("question_content$counter"),
                    'question_point' => $request->input("question_point$counter"),
                    'question_options' => $request->input("question_options$counter"),
                    'correct_answer' => $request->input("correct_answer$counter"),
                    'exam_id' => $id,
                ]);
                $counter++;
            }
            return redirect('admin/exams')->with('success', 'Added successfully');
        } else {

            $exam = Exam::create([
                'exam_name' => $request->input('exam_name'),
                'exam_desc' => $request->input('exam_desc'),
                'exam_num_qus' => $request->input('exam_num_qus'),
            ]);

            $id = Exam::select('id')
                ->where('exam_name', '=', $request->input('exam_name'))
                ->first();

            $id = $id->id;

            for ($i = 0; $i < $exam_num_qus; $i++) {
                $question = Question::create([
                    'question_content' => $request->input("question_content$counter"),
                    'question_point' => $request->input("question_point$counter"),
                    'question_options' => $request->input("question_options$counter"),
                    'correct_answer' => $request->input("correct_answer$counter"),
                    'exam_id' => $id,
                ]);
                $counter++;
            }
            return redirect('admin/exams')->with('success', 'Added successfully');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $exam = Exam::findOrFail($id);
        $questions = Question::where('exam_id', $id)->get();
        return view('admin.show_exam', compact(['exam', 'questions']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $exam = Exam::findOrFail($id);
        return view('admin.edit_exam', compact('exam'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateExamRequest  $request
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $counter = 1;
        $request->validate([
            'exam_name' => 'required',
            'exam_desc' => 'required',
            'exam_num_qus' => 'required|integer',
            'exam_img' => 'mimes:jpg,png,jpeg|max:5048'
        ]);

        $exam_num_qus = $request->input('exam_num_qus');

        if ($request->hasfile('image')) {
            $newImageName = time() . '-' . $request->exam_name . '.' . $request->exam_img->extension();
            $request->exam_img->move(public_path('img'), $newImageName);

            $exam = Exam::where('id', $id)
                ->update([
                    'exam_name' => $request->input('exam_name'),
                    'exam_desc' => $request->input('exam_desc'),
                    'exam_num_qus' =>  $request->input('exam_num_qus'),
                    'exam_img' => $newImageName,
                ]);

            for ($i = 0; $i < $exam_num_qus; $i++) {
                $question = Question::where('exam_id', $id)
                    ->update([
                        'question_content' => $request->input("question_content$counter"),
                        'question_point' => $request->input("question_point$counter"),
                        'question_options' => $request->input("question_options$counter"),
                        'correct_answer' => $request->input("correct_answer$counter"),
                        'exam_id' => $id,
                    ]);
                $counter++;
            }
            return redirect('admin/exams')->with('success', 'Updated successfully');
        } else {
            $exam = Exam::where('id', $id)
                ->update([
                    'exam_name' => $request->input('exam_name'),
                    'exam_desc' => $request->input('exam_desc'),
                    'exam_num_qus' => $request->input('exam_num_qus'),
                ]);

            for ($i = 0; $i < $exam_num_qus; $i++) {
                $question = Question::where('exam_id', $id)
                    ->update([
                        'question_content' => $request->input("question_content$counter"),
                        'question_point' => $request->input("question_point$counter"),
                        'question_options' => $request->input("question_options$counter"),
                        'correct_answer' => $request->input("correct_answer$counter"),
                        'exam_id' => $id,
                    ]);
                $counter++;
            }
            return redirect('admin/exams')->with('success', 'Updated successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Exam::destroy($id);
        return redirect('admin/exams')->with('success', 'Deleted successfully');
    }
}

<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\Models\User;
use App\Models\Subject;
use App\Models\UserSubject;
use Hash;
class LoginController extends Controller 
{
  
   public function __construct()
    {
    //create token
    }
  /** 
   * Register API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  public function index(Request $request) 
  {
    $request->validate([
      'password' => 'required|min:5',
      'email' => 'required|email'
      ], [
          'email.required' => 'Email is required',
          'password.required' => 'Password is required'
    ]);
    $condition = array('email'=>$request->email);
    $user = User::where($condition)->first();
    $data = [];
    $success = 'failed';
    if (Hash::check($request->password, $user->password)) {
      $data = $user;
      $success = 'success';
    }

    return response()->json([
      'status' => $success,
      'data' => $data,
    ]); 
  }

  public function getSubject(){
    $subjects = Subject::all();
    $data = [];
    $success = 'failed';
    if (count($subjects)>0) {
      $data = $subjects;
      $success = 'success';
    }
    return response()->json([
      'status' => $success,
      'data' => $data,
    ]); 
  }

  public function storeSubject(Request $request){
    $subjects = UserSubject::create([
        'subject_id' => $request->subject,
        'user_id' => $request->user_id,
    ]);
    $data = [];
    $success = 'failed';
    if ($subjects) {
      $data = $subjects;
      $success = 'success';
    }
    return response()->json([
      'status' => $success,
      'data' => $data,
    ]); 
  }

  public function getUserSubject(Request $request){
    $subjects = UserSubject::where('user_id',$request->user_id)->get();
    $subject_data = array();
    foreach ($subjects as $key => $value) {
      $subject_data[$key] = $value;
      $subject_data[$key]['user_name'] = User::where('id',$value->user_id)->first();
      $subject_data[$key]['subject_name'] = Subject::where('id',$value->subject_id)->first();
    }
    $data = [];
    $success = 'failed';
    if (count($subject_data)>0) {
      $data = $subject_data;
      $success = 'success';
    }
    return response()->json([
      'status' => $success,
      'data' => $data,
    ]); 
  }

  public function logout(){
    $success = 'Logout';
    return response()->json([
      'status' => $success,
      'data' => array(),
    ]);
  }
}
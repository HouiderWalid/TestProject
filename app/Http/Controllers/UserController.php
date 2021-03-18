<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json([
            'code' => 200,
            'data' => User::paginate(5),
            'errors' => []
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validation = [
            'first_name' => 'required|min:3',
            'last_name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'avatar' => 'required|image',
            'password' => 'required|confirmed|min:3'
        ];

        $user_validation = Validator::make($request->all(), $validation);

        if ($user_validation->fails()) return response()->json(['code' => 401, 'data' => null, 'errors' => $user_validation->errors()]);

        $user = new User();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->avatar = env('APP_URL') . 'storage/' . $request->file('avatar')->storeAs('images/users', time() . $request->last_name . '.png', 'public');
        $user->password = Hash::make($request->password);
        $isSaved = $user->save();

        if (!$isSaved) return response()->json(['code' => 500, 'data' => null, 'errors' => ['server error']]);

        return response()->json(['code' => 200, 'data' => User::paginate(5), 'errors' => []]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $user = User::find($id);

        if (!$user) return response()->json(['code' => 404, 'data' => null, 'errors' => ['user not found']]);

        return response()->json(['code' => 200, 'data' => $user, 'errors' => []]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) return response()->json(['code' => 404, 'data' => null, 'errors' => 'user not found']);

        $validation = [
            'first_name' => 'sometimes|required|min:3',
            'last_name' => 'sometimes|required|min:3',
            'email' => ['sometimes', 'required', 'email', Rule::unique('users')->ignore($id)],
            'avatar' => 'sometimes|image',
            'password' => 'sometimes|confirmed|min:3'
        ];

        $user_validation = Validator::make($request->all(), $validation);

        if ($user_validation->fails()) return response()->json(['code' => 401, 'data' => null, 'errors' => $user_validation->errors()]);

        if ($request->first_name) $user->first_name = $request->first_name;
        if ($request->last_name) $user->last_name = $request->last_name;
        if ($request->email) $user->email = $request->email;
        if ($request->avatar) $user->avatar = env('APP_URL') .  'storage/' . $request->file('avatar')->storeAs('images/users', time() . $request->last_name . '.png', 'public');
        if ($request->password) $user->password = Hash::make($request->password);
        $isSaved = $user->save();

        if (!$isSaved) return response()->json(['code' => 500, 'data' => null, 'errors' => ['server error']]);

        return response()->json(['code' => 200, 'data' => User::paginate(5), 'errors' => []]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) return response()->json(['code' => 404, 'data' => null, 'errors' => 'user not found']);

        if (!$user->delete()) return response()->json(['code' => 500, 'data' => null, 'errors' => 'server error']);

        return response()->json(['code' => 200, 'data' => User::paginate(5), 'errors' => []]);
    }
}

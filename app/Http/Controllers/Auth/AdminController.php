<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAdminRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function update(UpdateAdminRequest $request): RedirectResponse
    {
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('student-images', 'public');
        }

        $request->user()->update([
            'password' => Hash::make($request['password']),
            'image' => $imagePath ?? null,
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'MI' => $request['MI'],
        ]);

        return redirect()->route('dashboard');
    }
}

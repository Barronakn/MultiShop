<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailsController extends Controller
{
    public function index()
    {
        return Inertia::render("DetailsPage");
    }
}

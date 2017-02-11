<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Route;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

        if ($exception instanceof \Tymon\JWTAuth\Exceptions\InvalidClaimException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\JWTException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\PayloadException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\UserNotDefinedException && $this->isApiRoute($request)) {
            return response()->json($exception->getMessage(), 422);
        } else if (strpos($exception->getMessage(), 'token')) {
            return response()->json([$exception->getMessage()], $exception->getStatusCode());
        }

        /*if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
            return response()->json(['token_expired'], $exception->getStatusCode());
        } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
            return response()->json(['token_invalid'], $exception->getStatusCode());
        }*/


        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest('login');
    }

    /**
     * Check for api routes.
     *
     * @param Request $request
     * @return bool
     */
    protected function isApiRoute($request)
    {
        return $request->route() && in_array('api', $request->route()->middleware());
    }
}

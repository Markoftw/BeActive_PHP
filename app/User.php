<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'guest_password', 'last_online'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'guest_password'
    ];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    /**
     * Show all User roles
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles(){
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    /**
     * Check if user has the role within views
     * @param $level
     * @return bool
     * @internal param $role
     */
    public function hasLevel($level)
    {
        $user = $this->roles;

        return $user[0]->level >= $level;
    }

    /**
     * Check if user has the role within views
     * @param $role
     * @return bool
     */
    public function hasRole($role)
    {
        $user = $this->roles;

        return $user[0]->slug == $role;
    }

    /**
     * Show all reviews by User
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Show all User devices
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    /**
     * Save a new device for the User
     * @param Device $device
     */
    public function device(Device $device)
    {
        $this->devices()->save($device);
    }

    /**
     * Show all uploads User has made
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function uploads()
    {
        return $this->hasMany(Upload::class);
    }

    /**
     * Save a new picture by User
     * @param Upload $upload
     */
    public function upload(Upload $upload)
    {
        $this->uploads()->save($upload);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}

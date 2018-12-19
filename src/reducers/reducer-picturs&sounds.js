import  Bass_pic from '../pics/Bass.png'
import  Bass_sound from '../samples/Bass.wav'

import  BigTom_pic from '../pics/BigTom.png'
import  BigTom_sound from '../samples/BigTom.wav'

import  Crash_pic from '../pics/Crash.png'
import  Crash_sound from '../samples/Crash.wav'

import  FloorTom_pic from '../pics/FloorTom.png'
import  FloorTom_sound from '../samples/FloorTom.wav'

import  HiHat_pic from '../pics/HiHat.png'
import  HiHat_sound from '../samples/HiHat.wav'

import  Ride_pic from '../pics/Ride.png'
import  Ride_sound from '../samples/Ride.wav'

import  SmallTom_pic from '../pics/SmallTom.png'
import  SmallTom_sound from '../samples/SmallTom.wav'

import  Share_pic from '../pics/Snare.png'
import  Share_sound from '../samples/Snare.wav'


export default function(){

    return(
        {
            Bass : {pic : Bass_pic , sound : Bass_sound},
            BigTom : {pic : BigTom_pic , sound : BigTom_sound},
            Crash : {pic : Crash_pic , sound : Crash_sound},
            FloorTom : {pic :FloorTom_pic , sound : FloorTom_sound} ,
            HiHat : {pic :HiHat_pic , sound : HiHat_sound} ,
            Ride : {pic : Ride_pic, sound : Ride_sound} ,
            SmallTom : {pic : SmallTom_pic , sound : SmallTom_sound},
            Snare : {pic : Share_pic, sound: Share_sound}

        }
    );
}
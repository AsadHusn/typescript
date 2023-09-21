"use strict";
class Ride {
    start() {
        Ride._activeRide++;
    }
    stop() {
        Ride._activeRide--;
    }
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride1.start();
console.log(Ride._activeRide);

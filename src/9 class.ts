// static members with getter and setter
// it will only have single instance in memory

class Ride {
  private static _activeRide = 0;

  start() {
    Ride._activeRide++;
  }
  stop() {
    Ride._activeRide--;
  }
  // getter should also be static for static method
  static get activeRide() {
    return Ride._activeRide;
  }
}

let ride1 = new Ride() 
ride1.start()

let ride2 = new Ride() 
ride1.start()

console.log(Ride.activeRide);

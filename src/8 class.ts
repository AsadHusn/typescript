// index signature property
// to add dynamic properties with type safety


class Seat{
  [seatNumber: string]: string
}

let seats = new Seat()
seats.A1 = "mosh"
seats.A2 = "john"

console.log(seats)
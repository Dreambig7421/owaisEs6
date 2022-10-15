

/*class automobile {
    constructor (name1, color1, model1, ) {
        this.name = name1;
        this.color = color1;
        this.model = model1;
      

       
    }
    

  //  const types = [engine, horon, ac]
}
 car = new automobile ("Honda", "Black", "Civic" );

console.log(car);*/


class Automobile {
  constructor(name, model, color, cc) {
    this.name = name;
    this.model = model;
    this.color = color;    
    this.cc = cc;
  }
}

class Car extends Automobile {
  constructor (name, model, color, cc, ac, heater) {
    super (name, model, color, cc)
      this.ac = ac;
      this.heater = heater;
  }
}

  class Bus extends Automobile {
    constructor (name, model, color, cc, passengers, speed ) {
      super(name, model, color, cc)
        this.passengers = passengers;
        this.speed = speed;
  }
}

  class Truck extends Automobile {
    constructor (name, model, color, cc, ac, heater) {
      super(name, model, color, cc)
        this.ac = ac;
        this.heater = heater;
    }
}

const auto1 = new Car ("alsvin", "2022", "white", "1200cc", "active", "inactive" );

const auto2 = new Bus ("daewoo", "2005", "Green", "2300", "35", "280km/h");

const auto3 = new Bus ("mazda", "1990", "white", "2100", "inactive", "inactive");


//const auto = [auto1, auto2,auto3] ;
//console.log(auto );
console.log(auto1, auto2, auto3 );









//const car = new Automobile ("mazda", "2016", "white" )
//console.log(car);
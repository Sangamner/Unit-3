
//  <<<====AUTOMOBILE INHERITANCE MODEL====>>>


// USING OBJECT.CREATE ======>>>>

const car = {
    barnd: "Tata",
    wheels: 4,
    seat: 5,
    ground_clearance: 209,
    airbags: 4,
    transmission: "automatic",
}

const car1 = Object.create(car)
car1.name = "Nexon";
car1.fuelType="Diesel";
car1.color = "Red";
console.log(car1);

const car2 = Object.create(car)
car2.name = "Altroz";
car2.fuelType="Petrol";
car2.color = "White";
console.log(car2); 

const car3 = Object.create(car)
car3.name = "Nexon";
car3.fuelType="Electric";
car3.color = "black";
console.log(car1);


const car4 = Object.create(car)
car4.name = "Harrier";
car4.fuelType="Petrol";
car4.color = "Mettalic White";
console.log(car4);


// USING CONSTRUCTOR FUNCTION ======>>>>


function Car(name,color,fuel_type) {
    this.name= name;
    this.barnd= "Tata";
    this.wheels= 4;
    this.seat= 4;
    this.color=color;
    this.fuel_type=fuel_type;
    this.ground_clearance= 209;
    this.airbags= 4;
    this.transmission= "automatic";
}

let carx = new Car("Nexon", "Blue", "Electric");
let cary = new Car("Harrier", "Metallic White", "Diesel");
let carz = new Car("Altroz", "Red", "Petrol")
console.log(carx);
console.log(cary);
console.log(carz)





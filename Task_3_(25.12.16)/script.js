//Write a code to create an array of 5 cars:
// - Car has following properties:
//    FirmName(string)
//    ModelName(string)
//    EngineDisplaycement(float)
//- All parameters to promt by user
// Output all cars that has Engine Displaycement > 2.0

var cars = [];

for (var i = 0; i < 5; i++) {
  var car = {
    FirmName: prompt("Enter a name of manufacturer."),
    ModelName: prompt("Enter a model of car."),
    EngineDisplaycement: parseFloat(prompt("Enter prefered engine displacement"))
  }

  cars.push(car);

  if (cars[i].EngineDisplaycement > 2.0 ) {
    console.log(cars[i].FirmName + ' ' + cars[i].ModelName + ' ' + cars[i].EngineDisplaycement);
  }
}

// variable global tal com s'aconsella a l'enunciat,
//   per tal que sigui accessible des de qualsevol funció
var car;
// codi original donat
// function createCar(plate:string,brand:string,color:string){
//     let car=new Car(plate,color,brand);
//     car.addWheel(new Wheel(2,"SEAT"));
//     document.body.innerText="CAR: PLATE: " + car.plate 
//     + " COLOR: " +car.color + " BRAND: " + brand 
//     + " WHEELS: " + JSON.stringify(car.wheels);
// }
// codi refactoritzat
function createCar() {
    var newCar = getDatos();
    var valCar = valDatos(newCar);
    valCar ? mostrar(newCar) : msgError();
}
function getDatos() {
    var _a;
    var matri = toString((_a = document.getElementById("inpPlate")) === null || _a === void 0 ? void 0 : _a.nodeValue);
    var marca = document.getElementById("inpBrand").value;
    var color = document.getElementById("inpColor");
    var arrCar = [matri, marca, color];
    return arrCar;
}
function valDatos(arrCar) {
    var bolValidated = false;
    return bolValidated;
}
function mostrar(arrCar) {
    console.log(arrCar.map());
    // document.getElementById("mostrarDatos").innerHTML = "Dades del cotxe son: " + arrCar.map();
}
function msgError() {
    console.log("Dades incorrectes");
    // document.getElementById("mostrarDatos").innerHTML = "Dades cotxe incorrectes.";
}

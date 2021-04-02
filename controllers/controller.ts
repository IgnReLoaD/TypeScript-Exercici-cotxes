// variable global tal com s'aconsella a l'enunciat,
//   per tal que sigui accessible des de qualsevol funció
let car:Car;

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
    let newCar:any     = getDatos();
    let valCar:boolean = valDatos(newCar);
    valCar ? mostrar(newCar) : msgError();
}

function getDatos():any {
    let matri: string   = toString(document.getElementById("inpPlate")?.nodeValue);
    let marca: string   = document.getElementById("inpBrand").value; 
    let color: string   = document.getElementById("inpColor");
    let arrCar:string[] = [matri,marca,color];
    return arrCar;
}

function valDatos(arrCar:any):boolean {
    let bolValidated:boolean = false;

    return bolValidated;
}

function mostrar(arrCar:any):void {
    console.log(arrCar.map());
    // document.getElementById("mostrarDatos").innerHTML = "Dades del cotxe son: " + arrCar.map();
}

function msgError():void {
    console.log("Dades incorrectes");
    // document.getElementById("mostrarDatos").innerHTML = "Dades cotxe incorrectes.";
}

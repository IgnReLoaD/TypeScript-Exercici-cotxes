// variable global tal com s'aconsella a l'enunciat,
//   per tal que sigui accessible des de qualsevol funció
let glbCar:Car;

// --- codi original donat per l'Enunciat ----------------------------------
// function createCar(plate:string,brand:string,color:string){
//     let car=new Car(plate,color,brand);
//     car.addWheel(new Wheel(2,"SEAT"));
//     document.body.innerText="CAR: PLATE: " + car.plate 
//     + " COLOR: " +car.color + " BRAND: " + brand 
//     + " WHEELS: " + JSON.stringify(car.wheels);
// }
// ------------------------------------------------------------------------


// --- Funcions Tools -----------------------------------------------------------------

// matrícula validació a part
function valMatricula(matri:string) {
    var normativa = /^(\d{4}[a-zA-Z]{3})$/;
    return normativa.test(matri) ? true : false;
}

// mostrar resultat per pantalla
function mostrar(arrCar:any):void {
    // console.log(arrCar.map());
    // document.getElementById("mostrarDatos").innerHTML = "Dades del cotxe son: " + arrCar.map();

    console.log(glbCar);
    let pantalla = document.getElementById("mostrarDatos") as HTMLDivElement;
    pantalla.innerHTML = "Dades del cotxe son: ";  // + Car.plate();
}

// mostrar error en Consola per proves
function msgError():void {
    console.log("Dades incorrectes");
    // document.getElementById("mostrarDatos").innerHTML = "Dades cotxe incorrectes.";
}


function getDatos():any {
    // let matri: string   = toString(document.getElementById("inpPlate")?.nodeValue);
    // let matri:string = document.forms['frmCar']['inpPlate'];
    let inpMatri = document.getElementById("inpPlate") as HTMLInputElement;

    // let marca: string   = document.getElementById("inpBrand").value; 
    // let marca: string   = document.forms['frmCar']['inpBrand'];
    let inpMarca = document.getElementById("inpBrand") as HTMLInputElement;

    // let color: string   = document.getElementById("inpColor");
    // let color: string   = document.forms['frmCar']['inpColor'];
    let inpColor = document.getElementById("inpColor") as HTMLInputElement;

    let arrDatos = [inpMatri.value.toString(), inpMarca.value.toString(), inpColor.value.toString()];

    return arrDatos;
}

    // si dades correctes, generem el cotxe, sino mostrem msg error
    if (valDatos(inpMatri, inpMarca, inpColor)) {
        // passem les dades en un array a fora pq crei el cotxe... més polit:
        //    let arrCar:string[] = [matri:string,marca:string,color:string];
        // o ja creem el cotxe aquí dins...
        let myCar = new glbCar(inpMatri.value.toUpperCase(), inpMarca.value.toString(), inpColor.value.toString());
        alert("Cotxe creat satisfactoriament:  \n \n Matricula:   " + inpMatri.value + "\n Marca:  " + inpMarca.value + "\n Color:   " + inpColor.value);
        // car.plate = inpMatri.value.toString();
        // car.brand = inpMarca.value.toString();
        // car.color = inpColor.value.toString();

        //return arrCar;
        return glbCar;
    } else {
        msgError();
        // return void;  <-- funció ja declarada com Void per tan no retorna res
    }

}


//function valDatos(inpMatri:any, inpMarca:any, inpColor:any):boolean {
function valDatos(car:any[]):boolean {    
    let bolValidated:boolean = false;

    // recollim els DIVS on es posa el text d'error de validació
    let errMatri = document.getElementById("errPlate") as HTMLDivElement;
    let errMarca = document.getElementById("errBrand") as HTMLDivElement;
    let errColor = document.getElementById("errColor") as HTMLDivElement;

    // ens assegurem que la classe de Bootstrap 'is-invalid' està desactivada
    // ja que si no és la primera execució, igual s'ha quedat alguna activa.
    let errForms = document.getElementById("frmCar") as HTMLDivElement;
    errForms.classList.remove("is-invalid");

    // evaluem els camps un per un
    // 1.- Matricula -----------------------
    if (inpMatri.value == "") {
        inpMatri.classList.add("is-invalid");
        errMatri.textContent = "Info requerida";
    } else if (!valMatricula(inpMatri.value.toString())) {
        inpMatri.classList.add("is-invalid");
        errMatri.textContent = "S'esperen 4 nums i 3 lletres";
    } else 
    // 2.- Marca ---------------------------
    if (inpMarca.value == "") {
        inpMarca.classList.add("is-invalid");
        errMarca.textContent = "Info requerida";
    } else 
    // 3.- Color ---------------------------
    if (inpColor.value == "") {
        inpColor.classList.add("is-invalid");
        errColor.textContent = "Info requerida";
    } 
    // N.- Tot Validat OK
    else {
        return bolValidated = true;
    }   
}

// --- Funcio MAIN createCar() --------------------------------------------------------
// codi refactoritzat
function createCar() {
    // 1.- Recollim dades del Formulari
    let arrDatos:any[] = getDatos();
    // 2.- Validem dades del Formulari
    let valCar:boolean = valDatos(arrDatos);        
    // si Validat ok, creem el Cotxe, sino no especifiquem i continuem
    if (valCar) { let car=new Car(arrDatos[1],arrDatos[2], arrDatos[3]); }
    // si Validat ok (i cotxe creat) mostrem Dades, sino Error    
    (valCar) ? mostrar(valCar) : msgError();
}

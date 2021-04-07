// importar la Clase filla (ha de ser exportada al final del TS fill) 
//   alhora de utilitzar fem reingeniería inversa, de baix cap a dalt
import { Wheel } from "./wheel";

class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}

// EXPORTAR la Classe, sino no podrà ser importat des d'un altre TS
export { Car };

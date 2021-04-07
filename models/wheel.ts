class Wheel{
    public diameter:number;
    public brand:string;

    constructor(diameter:number, brand:string){
        this.diameter=diameter;
        this.brand=brand;
    }

}

// EXPORTAR la Classe, sino no podrà ser importat des d'un altre TS
export { Wheel };

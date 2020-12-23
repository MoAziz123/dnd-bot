export default class Character{
    private _name: string 
    private _age:number 
    private  _attributes: Object
    
    constructor(name?:string, 
                age?:number, 
                attributes?:Object){

    }

    public get name(){
        return this._name
    }
    public get age(){
        return this._age
    }
    public get attributes(){
        return this._attributes
    }

    public build(){
        return new Character()
    }

    
    

}
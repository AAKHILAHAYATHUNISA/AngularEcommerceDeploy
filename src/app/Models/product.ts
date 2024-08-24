export class product{
    id: number = 0;
    name: string = '';
    desc: string = '';
    // price: number = 0;
    // quantity: number = 0;
    constructor(id: number, name: string, desc: string, price: number, quantity: number){
        this.id = id;
        this.name = name;
        this.desc = desc;
        // this.price = price;
        // this.quantity = quantity;
    }
}
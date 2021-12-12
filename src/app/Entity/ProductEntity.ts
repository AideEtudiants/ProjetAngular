export class ProductEntity{
    //ces variables auront une valeur à l'exécution
    id!: number;
    name!: string;
	image!: string;
    description!: string;
    statusCode!: number;
    categoryCode!: number;
    userCode!: number;
    availability!: number;
    price: number;
    quantity : number;
}

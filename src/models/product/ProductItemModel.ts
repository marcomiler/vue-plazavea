import ITProduct from "@/interfaces/ITProduct";
import {API_PREFIX_MAIN} from "@/contants";

export default class ProductItemModel{
    private id_product  : number;
    private id_cat      : number;
    private cod_product : string;
    private nom_product : string;
    private pre_uni     : number;
    private modelo      : string;
    private marca       : string;
    private rating      : number;
    private stock       : number;
    private peso        : number;
    private tipo        : number;
    private despro      : string;
    private nomven      : string;

    constructor(data: ITProduct) {
        this.id_product   =   data.id_product;
        this.id_cat       =   data.id_cat;
        this.cod_product  =   data.cod_product;
        this.nom_product  =   data.nom_product;
        this.pre_uni      =   data.pre_uni;
        this.modelo       =   data.modelo;
        this.marca        =   data.marca;
        this.rating       =   data.rating;
        this.stock        =   data.stock;
        this.peso         =   data.peso;
        this.tipo         =   data.tipo;
        this.despro       =   data.despro;
        this.nomven       =   data.nomven;
    }

    public getIdProduct(): number{
        return this.id_product;
    }

    public getIdCat(): number{
        return this.id_cat;
    }

    public getCodProduct(): string{
        return this.cod_product;
    }

    public getNomProduct(): string{
        return this.nom_product;
    }

    //returns String for toFixed
    public getPrecUni(): string{
        return this.pre_uni.toFixed(2);
    }

    public getModelo(): string{
        return this.modelo;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getRating(): number{
        return this.rating;
    }

    public getStock(): number{
        return this.stock;
    }

    public getPeso(): number{
        return this.peso;
    }

    public getTipo(): number{
        return this.tipo;
    }

    public getDescProd(): string{
        return this.despro;
    }

    public getNomVend(): string{
        return this.nomven;
    }

    public getImagen(){
        return `${API_PREFIX_MAIN}/products/image/${this.id_product}`;
    }

}
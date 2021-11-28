import ITCategory from "@/interfaces/ITCategory";
import {API_PREFIX_MAIN} from "@/contants";

export default class CategoryItemModel {

    private id_category  : number;
    private nom_category : string;

    constructor( data: ITCategory ) {
        this.id_category  = data.id_category;
        this.nom_category = data.nom_category;
    }

    public getIdCategory(): number{
        return this.id_category;
    }

    public getNomProduct(): string{
        return this.nom_category;
    }

    public getImagen(){
        `${API_PREFIX_MAIN}/categories/image/${this.id_category}`;
    }

}
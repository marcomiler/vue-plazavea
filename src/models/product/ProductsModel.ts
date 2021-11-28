import ProductItemModel from "@/models/product/ProductItemModel";
import ITProduct from "@/interfaces/ITProduct";

export default class ProductsModel {

    private productsArray: ProductItemModel[];

    public constructor(data: ITProduct[]) {
        this.productsArray = [];
        data.forEach( (product) => this.productsArray.push(new ProductItemModel(product)) );
    }

    public getProducts(){
        return this.productsArray;
    }

}
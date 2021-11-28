import ProductItemModel from "@/models/product/ProductItemModel";
import ITProduct from "@/interfaces/ITProduct";

export default class ProductModel {

    private products: ProductItemModel;

    public constructor(data: ITProduct) {
        this.products = data;
    }

    get getProducts(){
        return this.products.getIdProduct();
    }

    public getIdProduct(){
        return this.products.getIdProduct();
    }

}
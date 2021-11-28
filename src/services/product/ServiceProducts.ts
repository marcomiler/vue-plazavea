import axios from "axios";

import { API_PREFIX_MAIN } from "@/contants";

export class ServiceProducts{

    public async getProducts(): Promise<any>{
        try{
            const { data } = await axios.get(`${API_PREFIX_MAIN}/products`);
            return data;
        }catch(e){
            console.log("Error:", e);
        }
    }

    public async getProductByName(nom_product: string): Promise<any>{
        try {
            const { data } = await axios.get(`${API_PREFIX_MAIN}/search/products/${nom_product}`);
            return data;
        } catch (e) {
            console.error(`Error: ${e}`);
        }
    }

    public async getProductById(id_product: number): Promise<any>{
        try {
            const { data } = await axios.get(`${API_PREFIX_MAIN}/products/${id_product}`);
            return data;
        } catch (e) {
            console.error(`Error: ${e}`);
        }
    }

    public async getProductByCategory(id_cat: number): Promise<any>{
        try {
            const { data } = await axios.get(`${API_PREFIX_MAIN}/categories/product/${id_cat}`);
            return data;
        } catch (e) {
            console.error(`Error: ${e}`);
        }
    }

    //Is not neccessary async method
    public getImageProduct(id_product: number){
        return `${API_PREFIX_MAIN}/products/image/${id_product}`;
    }
}

export const serviceProducts = new ServiceProducts();
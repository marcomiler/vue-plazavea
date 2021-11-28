import axios from "axios";

import { API_PREFIX_MAIN } from "@/contants";

export class ServiceCategories {

    public async getCategories(): Promise<any> {
        try{
            const { data } = await axios.get(`${API_PREFIX_MAIN}/categories`);
            console.log(data);
            return data;
        }catch{
            console.log("Error: ");
        }
    }

    // public getImageCategories(id_category: number){
    //     return `${API_PREFIX_MAIN}/categories/image/${id_category}`;
    // }
}

export const serviceCategories = new ServiceCategories();
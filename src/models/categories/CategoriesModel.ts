import ITCategory from "@/interfaces/ITCategory";
import CategoryItemModel from "@/models/categories/CategoryItemModel";

export class CategoriesModel {

    private categoriesArray: CategoryItemModel[];

    constructor(data: ITCategory[])
    {
        this.categoriesArray = [];
        data.forEach( (category: ITCategory) => this.categoriesArray.push(new CategoryItemModel(category)));
    }

    public getCategories(){
        return this.categoriesArray;
    }

}
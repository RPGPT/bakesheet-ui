import { RecipeIngredient } from "./recipeIngredient";

export interface Product {
    id?: number;
    imgSrc: string;
    title: string;
    price: string;
    recipe: RecipeIngredient[];
}
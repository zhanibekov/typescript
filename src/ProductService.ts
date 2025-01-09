import { Product } from "./UserService";

export class ProductService {
    private products: Product[] = [
        {id:1, name: 'Apple', price: 1.2},
        {id:2, name: 'PineApple', price: 1.9}

    ]
    getProducts():Product[] {
        return this.products
    }
}
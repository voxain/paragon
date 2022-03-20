import fs from "fs";


export function get() {
    let productsJSON = fs.readFileSync('./db/products.json');
    let productList = JSON.parse( productsJSON );
    return {
        body: {
            productList: productList
        }
    };
}
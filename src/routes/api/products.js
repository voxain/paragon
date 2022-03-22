import fs from "fs";

// Hands GET requests
export function get( {url} ) {
    
    // url.searchParams => querystring parameters

    // Load and parse JSON file from pseudo db
    // NOTE: To be replaced with database connection in the future
    let productsJSON = fs.readFileSync('./db/products.json');
    let productList = JSON.parse( productsJSON );

    //TODO: Implement filtering & searching logic

    return {
        body: {
            productList: productList
        }
    };
}
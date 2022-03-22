import fs from "fs";

// Hands GET requests
export function get( {url} ) {

    /**
     * Loading and parsing JSON file from pseudo db
     * * NOTE: To be replaced with database connection in the future
     */ 
    let productsJSON = fs.readFileSync('./db/products.json');
    let productList = JSON.parse( productsJSON );

    /**
     * TODO: Implement filtering & searching logic 
     * NOTE: querystring can be accessed through url.searchParams
     */

    return {
        body: {
            productList: productList
        }
    };
}
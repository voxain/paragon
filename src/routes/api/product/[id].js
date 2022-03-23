import fs from "fs";

//TODO: Combine with products.js
//? make this a filtering option instead of a separate route?

// Hands GET requests
export function get( {params} ) {

    /**
     * Loading and parsing JSON file from pseudo db
     * * NOTE: To be replaced with database connection in the future (probably not)
     */ 
    let productJSON = fs.readFileSync('./db/products.json');
    let product = JSON.parse( productJSON );

    return {
        body: {
            ...product[params.id]
        }
    };
}
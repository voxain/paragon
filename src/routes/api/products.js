import fs from "fs";

// Hands GET requests
export function get( {url} ) {

    /**
     * Loading and parsing JSON file from pseudo db
     * * NOTE: To be replaced with database connection in the future (probably not)
     */ 
    let productsJSON = fs.readFileSync('./db/products.json');
    let productList = JSON.parse( productsJSON );


    /* -------------------------------------------------------------------------- */
    /*                         FILTERS, GROUPS, & SORTING                         */
    /* -------------------------------------------------------------------------- */


    /* ----------------------------- FILTER LOGIC ----------------------------- */
    /**
     * TODO: Exclude out of stock items by default
     *
     * * Planned filter properties
     * stock, price, category, new
     */

    if(url.searchParams.has('filter')){
        switch(url.searchParams.get('filter')){

            // POPULAR filter: pick out some random pseudo items because I don't care   
            case 'popular':
                productList = { observer: productList.observer };
                
        }
    }


    /* ----------------------------- GROUPING LOGIC ----------------------------- */
    /**
     * * Planned grouping
     * category, (color?)
     */

    //TODO: Implement grouping logic and URL parameters


    /* ------------------------------ SORTING LOGIC ----------------------------- */
    /**
     * * Planned sorting options
     * Price (low to high), price (high to low), availability
     */

    //TODO: Implement sorting logic and URL parameters


    return {
        body: {
            productList: productList
        }
    };
}
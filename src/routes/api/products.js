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


    /* ------------------------------ FILTER LOGIC ------------------------------ */
    /**
     * TODO: Exclude out of stock items by default
     *
     * * Planned filter properties
     * stock, price, category, new, items on sale, popular
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
     * category
     */

    //TODO: Implement grouping logic and URL parameters

    if(url.searchParams.has('group')){
        switch(url.searchParams.get('group')){

            // CATEGORY Grouping: iterate through items and create nested object for cat. if not present
            //TODO: Create Category documentation & Info endpoint, which will give detailed data by ID
            case 'category':
                let categoryList = {};
                // dont even ask me whats going on over here. only god knows.
                Object.entries(productList).forEach(product => {
                    if( !categoryList[product[1].category] ) categoryList[product[1].category] = [];
                    categoryList[product[1].category].push(product);
                });
                productList = categoryList;
        }
    }


    /* ------------------------------ SORTING LOGIC ----------------------------- */
    /**
     * * Planned sorting options
     * Price (low to high), price (high to low), availability, highest discount
     */

    //TODO: Implement sorting logic and URL parameters


    return {
        body: {
            ...productList
        }
    };
}
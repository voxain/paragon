# Temporary API Documentation

~~Striked through~~ items are not yet functional, but will come in the future.

{text in brackets} represents that you can choose what to input here, without the brackets.

<br /><br />

## /api/products
###### GET

Returns: **JSON Object**
```json
{
    "product-id1": {
        "parameter1": 1234
    },
    ...
}
```

### ?filter={value}
###### WIP
Accepted `{values}`:
* `popular` -  will list popular items
* ~~`stock` - will only list items currently in stock~~
* ~~`new` - will only list recently added items~~
* ~~`on sale` - will only list items currently on sale~~

<br />

### ?{filter}={value}
Accepted `{filters}`:
* ~~`price`~~
    * ~~accepted values:~~
    * ~~`{x}+` - greater than x~~
    * ~~`{x}-` - lower than x~~
    * ~~`{x}-{y}` - within range~~
* ~~`category`~~
    * ~~accepted values:~~
    * ~~coming soon~~

<br />

### ?group={value}
###### WIP
Accepted `{values}`:
* `category` - will give back a JSON array which will look something like this:
```json
{
    "redstone": [
        [
            "observer", //id of the product
            {  
                "name": "Observer", //other properties
                ...
            }
        ],
        ...
    ],
    ...
}
```

<br />

### ?sort={value}
###### WIP
Accepted `{values}`:
* ~~`price-lth` - sort by price, lowest to highest~~
* ~~`price-htl` - same as above, but high to low~~
* ~~`stock` - shows items with highest stock first~~
* ~~`discount` - shows items with highest discount first~~

------
## /api/product/{id}
###### GET

Returns: **JSON Object**
```json
{
    "name": "Observer",
    "category": "redstone",
    ...
}
```
<script context="module">
    export async function load({fetch}){
        let productJSON = await fetch('/api/products')
        console.log(productJSON)
        productJSON = await productJSON.json()
            return {
                props: {
                    products: productJSON
                }
            }
    }
</script>

<script>
    export let products;
    products = Object.entries(products.productList);
    import { fade, fly } from 'svelte/transition';
    import ListCards from '/src/components/listCards.svelte';
</script>

<div class="flex flex-row flex-wrap justify-center">
<ListCards products={products} />
</div>
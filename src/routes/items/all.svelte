<script context="module">

    // Fetch list of all products
    export async function load({fetch}){
        let productJSON = await fetch('/api/products')
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
    products = Object.entries(products);
    import ListCards from '/src/components/listCards.svelte';
</script>

<div class="flex flex-row flex-wrap justify-center">
<ListCards products={products} />
</div>
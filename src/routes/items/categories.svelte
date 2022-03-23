<script context="module">
    // Fetch list of all products, grouped by category
    export async function load({fetch}){
        let productJSON = await fetch('/api/products?group=category')
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
    import GroupCards from '/src/components/groupCards.svelte';
    products = Object.entries(products);
</script>

<GroupCards category={products} />
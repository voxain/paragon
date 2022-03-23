<script context="module">
    export async function load({fetch, params}){
        //TODO: Try to find out why the hell params doesnt contain page [categ]
        let productJSON = await fetch('/api/products?category=' + params.categ );
        productJSON = await productJSON.json()
            return {
                props: {
                    products: productJSON,
                    categ: params.categ
                }
            }
    }
</script>

<script>
    export let products, categ;
    products = Object.entries(products);
    import ListCards from '/src/components/listCards.svelte';
</script>

<h3 class="mb-1 text-4xl font-bold uppercase mt-10">{categ}</h3>
<div class="flex flex-row flex-wrap justify-center">
<ListCards products={products} />
</div>
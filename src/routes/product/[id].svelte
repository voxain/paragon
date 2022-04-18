<script context="module">
    export async function load({ params, fetch }) {
        // Fetch single product information
        let productJSON = await fetch('/api/product/' + params.id)
        productJSON = await productJSON.json()
        return {
            props: {
                product: productJSON
            }
        }
    }
</script>

<script>
    export let product;
</script>

{product.name}
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
    import { fade, fly } from 'svelte/transition';
    import ListCards from '../components/listCards.svelte';
    export let products;
    products = Object.entries(products.productList);
</script>

<div out:fade={{duration: 200}} class="w-full mb-14 mt-8 h-96 pb-4 2xl:h-[40rem] overflow-x-auto flex flex-row snap-x snap-mandatory">
    <div class="hero ml-96 w-full md:w-2/3" style="background-image: url(/axolotl.webp);">
        <div class="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold uppercase">LAUNCH SALE</h1>
            <p class="mb-5">Discover the immense discounts on lots of products!</p>
            <button class="btn btn-primary">See discounts</button>
          </div>
        </div>
    </div>
    <div class="hero w-full md:w-2/3" style="background-image: url(/enchanting.jpeg);">
        <div class="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold uppercase">Magical Deals</h1>
            <p class="mb-5">Discover mystical prices beyond your expectations</p>
            <button class="btn btn-primary">See Enchanting Category</button>
          </div>
        </div>
    </div>
    <div class="hero w-full md:w-2/3" style="background-image: url(/farm.jpeg);">
        <div class="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold uppercase">Back to basics</h1>
            <p class="mb-5">Everything you'd expect to find on a farm, but right here.</p>
            <button class="btn btn-primary">See farming category</button>
          </div>
        </div>
    </div>
    <div class="hero mr-96 w-full md:w-2/3" style="background-image: url(/furnace.jpeg);">
        <div class="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold uppercase">Essentials</h1>
            <p class="mb-5">All you need to get started</p>
            <button class="btn btn-primary">See Deals</button>
          </div>
        </div>
    </div>
</div>

<!-- fake popular carousel -->
<h3 class="mb-1 text-3xl font-bold uppercase">All-Time classics</h3>
<h4 class="mb-5 text-xl opacity-40">Our most popular products</h4>

<div class="w-full mb-10 h-auto pb-4 overflow-x-auto flex flex-row snap-x snap-mandatory">
    <ListCards products={products} />
</div>


<style>
    .hero{
        @apply h-full flex-shrink-0 snap-center mr-10 rounded-2xl shadow-lg;
    }
    .btn{
        @apply uppercase;
    }
    div.h1{
        @apply text-slate-100;
    }
</style>
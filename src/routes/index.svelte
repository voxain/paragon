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
    {#each products as product, index}
    <div in:fly={{y:20, delay: 200+50*index, duration: 300}} class="card w-96 bg-base-100 flex-shrink-0 m-4 shadow-xl snap-start scroll-mx-3">
        <figure>
            <img src="/products/{product[0]} render.png" alt="Shoes" class="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{product[1].name}</h2>
          <p>{product[1].description}</p>
          <div class="card-actions flex-nowrap">
              <div class="btn btn-ghost btn-disabled px-0">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style=" fill:#000000;"><path fill="#00B8D4" d="M32 37L32 40 20 40 20 31 29 31 29 28 35 28 35 37"></path><path fill="#4DD0E1" d="M20 31L17 31 17 37 14 37.001 14 31.001 11 31.001 11 19.001 14 19.001 14 13.001 17 13 17 10.001 20 10.001 20 7.001 29 7.001 29 10 32 10 32 13 35 13.001 35 19.001 38 19.001 38 25 32 25 32 28 20 28"></path><path fill="#016D72" d="M20 4.001H29V7.001H20zM17 7.001H20V10.001000000000001H17zM14 10.001H17V13.001H14zM11 13.001H14V19.000999999999998H11zM8 19H11V31H8zM11 31.001H14V37H11zM14 37H17V40H14zM17 40H32V43H17zM32 37H35V40H32zM35 31H38V37H35zM38 19H41V31H38zM35 13H38V19H35zM32 10H35V13H32zM29 7.001H32V10.001000000000001H29z"></path><g><path fill="#0097A7" d="M32 25H38V28H32zM29 31H32V37H29zM17 31H20V37H17z"></path></g><g><path fill="#B2EBF2" d="M23 16H29V19H23zM29 10H32V13H29zM17 13H20V16H17zM17 22H20V25H17zM14 25H17V28H14z"></path></g><g><path fill="#00ACC1" d="M17 37H20V40H17zM29 37H32V40H29zM32 34H35V37H32zM35 28H38V31H35zM17 25H20V28H17zM29 19H32V28H29zM20 28H29V31H20z"></path></g><g><path fill="#E0F7FA" d="M20 7H29V10H20zM17 10.001H20V13H17zM14 13H17V19H14zM11 19H14V31H11zM20 16H23V19H20zM17 19H20V22H17z"></path><path fill="#E0F2F1" d="M26 13H29V16H26z"></path></g></svg>
                  {product[1].price} for {product[1].amount}
              </div>
            <div class="flex-1"></div>
            <button class="btn btn-link">Details</button>
            <button class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    {/each}
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
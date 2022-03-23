<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status
            }
        };
    }
</script>

<script>
export let message, status;
import {fly} from "svelte/transition"
</script>
  
<div in:fly={{delay: 300, y:300, duration:500}} class="container w-auto text-center mt-8">

    <h1 class="text-8xl font-bold mb-4">{status}</h1>
    <h1 class="text-xl opacity-50 mb-20">{message}</h1>

    <a href="/">
        <button class="btn">
            Back to homepage
        </button>
    </a>
</div>
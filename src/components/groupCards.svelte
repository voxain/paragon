<script>
    export let category;
    import ListCards from '/src/components/listCards.svelte';
</script>

{#each category as categ}
<a href="/category/{categ[0]}"><h3 class="mb-1 text-4xl font-bold uppercase mt-10">{categ[0]}</h3></a>
    <div class="flex flex-row flex-wrap justify-center w-full">
        <ListCards products={categ[1]} />
    </div>
{/each}
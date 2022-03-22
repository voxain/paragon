<script>
    export let category;
    import ListCards from '/src/components/listCards.svelte';
    console.log(category)
</script>

{#each category as categ}
    <h3 class="mb-1 text-3xl font-bold uppercase">{categ[0]}</h3>
    <div class="flex flex-row flex-wrap justify-center">
        <ListCards products={categ[1]} />
    </div>
{/each}
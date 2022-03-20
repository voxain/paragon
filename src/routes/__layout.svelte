<script>
    import '../style.css';
    import NavBar from '../components/navbar.svelte';
    import Footer from '../components/footer.svelte';

    let keydetect = function(e)  {
        e.preventDefault()
        if(e.which == 70 && e.metaKey){
            document.getElementById('searchBar').focus();
        }
    }
</script>

<svelte:head>
    <title>paragon</title>
</svelte:head>

<svelte:body on:keydown={keydetect} />

<div class="p-4  h-screen flex flex-col">
    <NavBar />
    <div class="container mx-auto">
        <slot />
    </div>
    <div class="flex-1"></div>
    <Footer />
</div>
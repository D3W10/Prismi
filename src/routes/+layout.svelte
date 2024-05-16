<script lang="ts">
    import "../app.css";
    import Topbar from "$lib/components/Topbar.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";

    let { children } = $props();
</script>

<div class="w-screen h-screen bg-slate-200">
    <Topbar />
    <div class="flex h-[calc(100%-40px)]">
        <Sidebar />
        <div class="w-[calc(100%-4.5rem)] bg-white rounded-tl-2xl shadow-md overflow-hidden">
            {@render children()}
        </div>
    </div>
</div>
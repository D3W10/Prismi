<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="w-[4.5rem] p-3 flex flex-col justify-between items-center">
    <div class="w-full space-y-3">
        <button class="w-full flex justify-center items-center hover:bg-slate-300 rounded-xl hover:shadow-md transition aspect-square">
            <Icon icon="fluent:home-24-regular" width="1.75rem" height="1.75rem" />
        </button>
        <button class="w-full flex justify-center items-center hover:bg-slate-300 rounded-xl hover:shadow-md transition aspect-square">
            <Icon icon="fluent:grid-24-regular" width="1.75rem" height="1.75rem" />
        </button>
    </div>
    <div class="w-full space-y-3">
        <button class="w-full flex justify-center items-center bg-blue-500/30 hover:bg-blue-600 rounded-xl hover:shadow-md transition aspect-square group">
            <Icon icon="fluent:add-12-regular" class="text-blue-600 group-hover:text-white" width="1.75rem" height="1.75rem" />
        </button>
        <button class="w-full flex justify-center items-center hover:bg-slate-300 rounded-xl hover:shadow-md transition aspect-square">
            <Icon icon="fluent:settings-24-regular" width="1.75rem" height="1.75rem" />
        </button>
    </div>
</div>
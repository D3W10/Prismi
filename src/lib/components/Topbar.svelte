<script lang="ts">
    import { appWindow } from "@tauri-apps/api/window";
    import Icon from "@iconify/svelte";

    let maximized = $state(false);
</script>

<div class="h-10 p-2 flex justify-between items-center" data-tauri-drag-region>
    <div></div>
    <div class="p-0.5 flex space-x-2.5">
        <button onclick={() => appWindow.minimize()}>
            <Icon icon="fluent:minimize-24-regular" width="1.25rem" height="1.25rem" />
        </button>
        <button onclick={() => { appWindow.toggleMaximize(); maximized = !maximized; }}>
            <Icon icon={!maximized ? "fluent:maximize-24-regular" : "fluent:square-multiple-24-regular"} width="1.25rem" height="1.25rem" />
        </button>
        <button onclick={() => appWindow.close()}>
            <Icon icon="fluent:dismiss-24-regular" width="1.25rem" height="1.25rem" />
        </button>
    </div>
</div>
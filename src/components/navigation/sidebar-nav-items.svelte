<script lang="ts">
	import type { SidebarNavItem } from "@/config";
	import { page } from "$app/stores";
	import { cn } from "@/utils";

	export let items: SidebarNavItem[] = [];
</script>

{#if items.length}
	<div class="grid grid-flow-row auto-rows-max text-sm">
		{#each items as item, index (index)}
			{#if item.href}
				<a
					href={item.href}
					class={cn(
						"group flex w-full items-center rounded-md text-foreground py-2 px-2.5 hover:bg-muted transition-all",
						item.disabled && "cursor-not-allowed opacity-60",
						$page.url.pathname === item.href ? "bg-muted" : ""
					)}
					target={item.external ? "_blank" : ""}
					rel={item.external ? "noreferrer" : ""}
				>
					{item.title}
					{#if item.label}
						<span
							class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
						>
							{item.label}
						</span>
					{/if}
				</a>
			{:else}
				<span
					class="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
				>
					{item.title}
				</span>
			{/if}
		{/each}
	</div>
{/if}

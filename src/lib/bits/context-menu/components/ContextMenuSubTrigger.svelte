<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getSubMenuCtx, getAttrs } from "../ctx.js";
	import type { SubTriggerEvents, SubTriggerProps } from "../types.js";
	import { disabledAttrs } from "$lib/internal/index.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = SubTriggerProps & {
		disabled?: boolean;
	};
	type $$Events = SubTriggerEvents;
	export let disabled = false;
	export let asChild = false;

	const {
		elements: { subTrigger }
	} = getSubMenuCtx();
	const dispatch = createDispatcher();
	$: builder = $subTrigger;
	$: attrs = { ...getAttrs("sub-trigger"), ...disabledAttrs(disabled) };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions / applied by melt store -->
{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div
		use:melt={builder}
		{...$$restProps}
		{...attrs}
		on:m-click={dispatch}
		on:m-focusin={dispatch}
		on:m-focusout={dispatch}
		on:m-keydown={dispatch}
		on:m-pointerleave={dispatch}
		on:m-pointermove={dispatch}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{/if}

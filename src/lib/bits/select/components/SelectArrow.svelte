<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { setArrow, getAttrs } from "../ctx.js";
	import type { ArrowProps } from "../types.js";

	type $$Props = ArrowProps;

	export let asChild = false;
	export let size = 8;

	const {
		elements: { arrow }
	} = setArrow(size);

	$: builder = $arrow;
	const attrs = getAttrs("arrow");
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div use:melt={builder} {...$$restProps} {...attrs} />
{/if}

<script lang="ts">
	import { createDispatcher } from "$lib/internal/events.js";

	import { melt } from "@melt-ui/svelte";
	import type { Transition } from "$lib/internal/types.js";
	import { getContent, getAttrs } from "../ctx.js";
	import type { ContentEvents, ContentProps } from "../types.js";

	type T = $$Generic<Transition>;
	type In = $$Generic<Transition>;
	type Out = $$Generic<Transition>;
	type $$Props = ContentProps<T, In, Out>;
	type $$Events = ContentEvents;
	export let sideOffset: $$Props["sideOffset"] = 5;

	export let transition: $$Props["transition"] = undefined;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;

	export let inTransition: $$Props["inTransition"] = undefined;
	export let inTransitionConfig: $$Props["inTransitionConfig"] = undefined;

	export let outTransition: $$Props["outTransition"] = undefined;
	export let outTransitionConfig: $$Props["outTransitionConfig"] = undefined;

	export let asChild = false;

	const {
		elements: { menu },
		states: { open }
	} = getContent(sideOffset);

	$: builder = $menu;
	const attrs = getAttrs("content");

	const dispatch = createDispatcher();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions applied by melt's action/store -->
{#if asChild && $open}
	<slot {builder} {attrs} />
{:else if transition && $open}
	<div
		transition:transition={transitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && outTransition && $open}
	<div
		in:inTransition={inTransitionConfig}
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && $open}
	<div
		in:inTransition={inTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{:else if outTransition && $open}
	<div
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{:else if $open}
	<div use:melt={builder} {...$$restProps} {...attrs} on:m-keydown={dispatch}>
		<slot {builder} {attrs} />
	</div>
{/if}

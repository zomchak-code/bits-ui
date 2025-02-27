<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { setTransitionTimes, type Transition } from "$lib/internal/index.js";
	import { getCtx, getAttrs } from "../ctx.js";
	import type { ContentProps } from "../types.js";

	type T = $$Generic<Transition>;
	type In = $$Generic<Transition>;
	type Out = $$Generic<Transition>;

	type $$Props = ContentProps<T, In, Out>;

	export let transition: $$Props["transition"] = undefined;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export let inTransition: $$Props["inTransition"] = undefined;
	export let inTransitionConfig: $$Props["inTransitionConfig"] = undefined;
	export let outTransition: $$Props["outTransition"] = undefined;
	export let outTransitionConfig: $$Props["outTransitionConfig"] = undefined;

	export let asChild = false;

	const {
		elements: { content },
		transitionTimes,
		tOpen
	} = getCtx();

	$: setTransitionTimes(transitionTimes, {
		transition,
		transitionConfig,
		inTransition,
		inTransitionConfig,
		outTransition,
		outTransitionConfig
	});

	$: builder = $content;
	const attrs = getAttrs("content");
</script>

{#if asChild && $tOpen}
	<slot {builder} {attrs} />
{:else if transition && $tOpen}
	<div transition:transition={transitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && outTransition && $tOpen}
	<div
		in:inTransition={inTransitionConfig}
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
	>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && $tOpen}
	<div in:inTransition={inTransitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if outTransition && $tOpen}
	<div out:outTransition={outTransitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if $tOpen}
	<div use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{/if}

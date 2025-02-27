<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import type { Transition } from "$lib/internal/index.js";
	import type { ContentProps } from "../types.js";
	import { getContent, getAttrs } from "../ctx.js";

	type T = $$Generic<Transition>;
	type In = $$Generic<Transition>;
	type Out = $$Generic<Transition>;

	type $$Props = ContentProps<T, In, Out>;

	export let transition: $$Props["transition"] = undefined;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;

	export let inTransition: $$Props["inTransition"] = undefined;
	export let inTransitionConfig: ContentProps<T>["inTransitionConfig"] = undefined;

	export let outTransition: $$Props["outTransition"] = undefined;
	export let outTransitionConfig: $$Props["outTransitionConfig"] = undefined;

	export let asChild = false;

	const { content, isSelected, props } = getContent();

	const attrs = getAttrs("content");

	$: builder = $content(props);
</script>

{#if asChild && $isSelected(props)}
	<slot {builder} {attrs} />
{:else if transition && $isSelected(props)}
	<div transition:transition={transitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && outTransition && $isSelected(props)}
	<div
		in:inTransition={inTransitionConfig}
		out:outTransition={outTransitionConfig}
		use:melt={builder}
		{...$$restProps}
		{...attrs}
	>
		<slot {builder} {attrs} />
	</div>
{:else if inTransition && $isSelected(props)}
	<div in:inTransition={inTransitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if outTransition && $isSelected(props)}
	<div out:outTransition={outTransitionConfig} use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{:else if $isSelected(props)}
	<div use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{/if}

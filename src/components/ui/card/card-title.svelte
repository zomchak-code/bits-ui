<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "@/utils";
	import type { HeadingLevel } from "../alert";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		level?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let tag: $$Props["level"] = "h3";
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn("font-semibold leading-none tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>

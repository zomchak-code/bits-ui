<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "@/lib";
	import { cn } from "@/utils";
	import { transition } from ".";

	type $$Props = DropdownMenuPrimitive.ContentProps;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<DropdownMenuPrimitive.Content
	{transition}
	class={cn(
		"z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
		className
	)}
	{...$$restProps}
>
	<slot />
</DropdownMenuPrimitive.Content>

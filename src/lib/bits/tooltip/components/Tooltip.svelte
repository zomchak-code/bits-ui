<script lang="ts">
	import { setCtx } from "../ctx.js";
	import type { Props } from "../types.js";
	type $$Props = Props;

	export let positioning: $$Props["positioning"] = undefined;
	export let arrowSize: $$Props["arrowSize"] = undefined;
	export let closeOnEscape: $$Props["closeOnEscape"] = undefined;
	export let portal: $$Props["portal"] = undefined;
	export let closeOnPointerDown: $$Props["closeOnPointerDown"] = undefined;
	export let openDelay: $$Props["openDelay"] = undefined;
	export let closeDelay: $$Props["closeDelay"] = undefined;
	export let open: $$Props["open"] = undefined;
	export let onOpenChange: $$Props["onOpenChange"] = undefined;
	export let forceVisible: $$Props["forceVisible"] = true;
	export let disableHoverableContent: $$Props["disableHoverableContent"] = undefined;
	export let group: $$Props["group"] = undefined;

	const {
		states: { open: localOpen },
		updateOption,
		ids
	} = setCtx({
		positioning,
		arrowSize,
		closeOnEscape,
		portal,
		closeOnPointerDown,
		openDelay,
		closeDelay,
		forceVisible,
		defaultOpen: open,
		disableHoverableContent,
		group,
		onOpenChange: ({ next }) => {
			if (open !== next) {
				onOpenChange?.(next);
				open = next;
			}
			return next;
		}
	});

	$: open !== undefined && localOpen.set(open);
	$: updateOption("positioning", positioning);
	$: updateOption("arrowSize", arrowSize);
	$: updateOption("closeOnEscape", closeOnEscape);
	$: updateOption("portal", portal);
	$: updateOption("closeOnPointerDown", closeOnPointerDown);
	$: updateOption("openDelay", openDelay);
	$: updateOption("closeDelay", closeDelay);
	$: updateOption("forceVisible", forceVisible);
	$: updateOption("group", group);
	$: updateOption("disableHoverableContent", disableHoverableContent);
</script>

<slot {ids} />

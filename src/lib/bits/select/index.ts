import Root from "./components/Select.svelte";
import Arrow from "./components/SelectArrow.svelte";
import Content from "./components/SelectContent.svelte";
import Group from "./components/SelectGroup.svelte";
import Input from "./components/SelectInput.svelte";
import Item from "./components/SelectItem.svelte";
import ItemIndicator from "./components/SelectItemIndicator.svelte";
import Label from "./components/SelectLabel.svelte";
import Separator from "../separator/components/Separator.svelte";
import Trigger from "./components/SelectTrigger.svelte";
import Value from "./components/SelectValue.svelte";

export {
	Root,
	Arrow,
	Content,
	Group,
	Input,
	Item,
	ItemIndicator,
	Label,
	Separator,
	Trigger,
	Value,
	//
	Root as Select,
	Arrow as SelectArrow,
	Content as SelectContent,
	Group as SelectGroup,
	Input as SelectInput,
	Item as SelectItem,
	ItemIndicator as SelectItemIndicator,
	Label as SelectLabel,
	Separator as SelectSeparator,
	Trigger as SelectTrigger,
	Value as SelectValue
};

export * from "./types.js";

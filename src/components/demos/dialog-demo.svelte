<script lang="ts">
	import { Button, buttonVariants } from "@/components/ui/button";
	import * as Dialog from "@/components/ui/dialog";
	import * as Input from "@/components/ui/input";
	import * as Label from "@/components/ui/label";
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>Edit Profile</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label.Root class="text-right">Name</Label.Root>
				<Input.Root id="name" value="Hunter Johnston" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label.Root class="text-right">Username</Label.Root>
				<Input.Root id="username" value="@huntabyte" class="col-span-3" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

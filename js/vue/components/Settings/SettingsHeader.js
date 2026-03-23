// Settings Header - Modal title and close button
const SettingsHeader = {
	name: "SettingsHeader",
	props: {
		title: { type: String, required: true },
	},
	emits: ["close"],
	template: `
        <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-2xl">{{ title }}</h3>
            <button @click="$emit('close')" class="btn btn-ghost btn-sm btn-circle">
                <i data-lucide="x" class="h-5 w-5"></i>
            </button>
        </div>
    `,
	mounted() { this.$nextTick(() => lucide.createIcons()); },
	updated() { this.$nextTick(() => lucide.createIcons()); },
};

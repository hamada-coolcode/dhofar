// Explore Card Row Component (2 cards side by side)
const ExploreCardRow = {
	name: "ExploreCardRow",
	props: {
		card1: { type: Object, required: true },
		card2: { type: Object, required: true },
	},
	template: `
        <div class="flex gap-2">
            <ExploreCardSmall v-bind="card1" />
            <ExploreCardSmall v-bind="card2" />
        </div>
    `,
};

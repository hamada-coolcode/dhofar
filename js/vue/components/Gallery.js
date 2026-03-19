// Places Gallery Component - Main container with staggered grid layout
const PlacesGallery = {
	name: "PlacesGallery",
	inject: ["language"],
	props: {
		category: {
			type: String,
			default: "all", // all, khareef, deserts, coasts
		},
	},
	emits: ["card-click"],
	data() {
		return {
			allPlaces: [
				// Khareef (green season, waterfalls, valleys)
				{
					id: 1,
					category: "khareef",
					name: { en: "Wadi Darbat", ar: "وادي دربت" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.8,
					image: "./images/khareef/darbat_wadi/index.jpg",
					description: {
						en: "A stunning valley with freshwater springs, lush greenery, and breathtaking views. Perfect for picnics and boat rides.",
						ar: "وادي خلاب مع ينابيع مياه عذبة وخضرة مورقة وإطلالات خلابة. مثالي للنزهات وركوب القوارب.",
					},
					location: "https://maps.google.com/?q=wadi-darbat",
					gallery: [
						"./images/khareef/darbat_wadi/1.jpg",
						"./images/khareef/darbat_wadi/2.webp",
						"./images/khareef/darbat_wadi/3.jpg",
						"./images/khareef/darbat_wadi/4.jpg",
						"./images/khareef/darbat_wadi/5.jpg",
						"./images/khareef/darbat_wadi/6.jpg",
					],
				},
				{
					id: 6,
					category: "khareef",
					name: { en: "Ayn Khor Waterfall", ar: "عين خور" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.7,
					image:
						".https://unsplash.com/photos/time-lapse-photography-of-flowing-multi-tier-waterfall-OPOg0fz5uIs",
					description: {
						en: "A hidden gem featuring a natural waterfall cascading into a serene pool surrounded by lush vegetation.",
						ar: "جوهرة مخفية تضم شلالاً طبيعياً يتدفق إلى بركة هادئة محاطة بالنباتات المورقة.",
					},
					location: "https://maps.google.com/?q=ayn-khor",
					gallery: [],
				},
				// Deserts
				{
					id: 4,
					category: "deserts",
					name: { en: "Jebel Samhan", ar: "جبل سمحان" },
					state: { en: "Dhofar", ar: "ظفار" },
					rating: 4.9,
					image: "./images/places/jebel-samhan.jpg",
					description: {
						en: "A majestic mountain range offering panoramic views, home to the endangered Arabian leopard and diverse wildlife.",
						ar: "سلسلة جبلية مهيبة تقدم إطلالات بانورامية، موطن للنمر العربي المهدد بالانقراض والحياة البرية المتنوعة.",
					},
					location: "https://maps.google.com/?q=jebel-samhan",
					gallery: [],
				},
				{
					id: 7,
					category: "deserts",
					name: { en: "Empty Quarter Edge", ar: "حافة الربع الخالي" },
					state: { en: "Dhofar", ar: "ظفار" },
					rating: 4.6,
					image: "./images/places/empty-quarter.jpg",
					description: {
						en: "The northern edge of the worlds largest sand desert, offering stunning dunes and unique desert landscapes.",
						ar: "الحافة الشمالية لأكبر صحراء رملية في العالم، تقدم كثباناً خلابة ومناظر صحراوية فريدة.",
					},
					location: "https://maps.google.com/?q=empty-quarter",
					gallery: [],
				},
				// Coasts (beaches, coastal areas)
				{
					id: 2,
					category: "coasts",
					name: { en: "Mughsail Beach", ar: "مغسيل" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.6,
					image: "./images/places/mughsail.jpg",
					description: {
						en: "A pristine beach known for its white sand, clear waters, and the famous blowholes that shoot water high into the air.",
						ar: "شاطئ بكر معروف برماله البيضاء ومياهه الصافية والفتحات الشهيرة التي تطلق الماء عالياً في الهواء.",
					},
					location: "https://maps.google.com/?q=mughsail-beach",
					gallery: [],
				},
				{
					id: 8,
					category: "coasts",
					name: { en: "Fazayah Beach", ar: "شاطئ فزاية" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.5,
					image: "./images/places/fazayah.jpg",
					description: {
						en: "A secluded beach with crystal clear waters, perfect for swimming and relaxation away from crowds.",
						ar: "شاطئ منعزل بمياه صافية كريستالية، مثالي للسباحة والاسترخاء بعيداً عن الزحام.",
					},
					location: "https://maps.google.com/?q=fazayah-beach",
					gallery: [],
				},
				// Historical sites (can appear in multiple categories)
				{
					id: 3,
					category: "khareef",
					name: { en: "Sumhuram", ar: "سمهرم" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.5,
					image: "./images/places/sumhuram.jpg",
					description: {
						en: "Ancient port city ruins dating back to the 1st century BC, a UNESCO World Heritage Site with rich historical significance.",
						ar: "آثار مدينة مينائية قديمة تعود إلى القرن الأول قبل الميلاد، موقع تراث عالمي لليونسكو بأهمية تاريخية غنية.",
					},
					location: "https://maps.google.com/?q=sumhuram",
					gallery: [],
				},
				{
					id: 5,
					category: "coasts",
					name: { en: "Taqah Castle", ar: "قلعة طاقة" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.4,
					image: "./images/places/taqah-castle.jpg",
					description: {
						en: "A historic 19th-century castle showcasing traditional Omani architecture and the regions cultural heritage.",
						ar: "قلعة تاريخية من القرن التاسع عشر تعرض العمارة العمانية التقليدية والتراث الثقافي للمنطقة.",
					},
					location: "https://maps.google.com/?q=taqah-castle",
					gallery: [],
				},
			],
		};
	},
	computed: {
		currentLang() {
			return this.language?.value || this.language || "en";
		},
		filteredPlaces() {
			if (this.category === "all") {
				return this.allPlaces;
			}
			return this.allPlaces.filter((place) => place.category === this.category);
		},
	},
	methods: {
		handleCardClick(place) {
			this.$emit("card-click", place);
		},
	},
	template: `
        <div class="w-full py-16 px-4">
            <div v-if="filteredPlaces.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <place-card 
                    v-for="(place, index) in filteredPlaces" 
                    :key="place.id"
                    :place="place"
                    :index="index"
                    @click="handleCardClick(place)"
                ></place-card>
            </div>
            <div v-else class="text-center py-20">
                <p class="text-xl text-base-content/60">No places found in this category.</p>
            </div>
        </div>
    `,
};

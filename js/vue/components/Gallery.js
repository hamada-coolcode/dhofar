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
					key: "wadiDarbat",
					name: { en: "Wadi Darbat", ar: "وادي دربت" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.8,
					image: "./images/khareef/darbat_wadi/index.jpg",
					description: {
						en: "A stunning valley with freshwater springs, lush greenery, and breathtaking views. Perfect for picnics and boat rides.",
						ar: "وادي خلاب مع ينابيع مياه عذبة وخضرة مورقة وإطلالات خلابة. مثالي للنزهات وركوب القوارب.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122016.97778857008!2d54.439512407836446!3d17.12000878013935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd39503c68b8a25%3A0xbca00994e2b26d34!2sWadi%20Darbat!5e0!3m2!1sen!2som!4v1773904693565",
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
					id: 2,
					category: "khareef",
					key: "aynGarzeez",
					name: { en: "Ayn Garzeez", ar: "عين جرزيز" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.6,
					image: "./images/khareef/ain_garzeez/عين جرزیز.jpg",
					description: {
						en: "A natural spring with crystal clear water surrounded by lush vegetation and rocky formations.",
						ar: "نبع طبيعي بمياه صافية كريستالية محاطة بالنباتات الخضراء والتشكيلات الصخرية.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d54.2!3d17.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzAwLjAiTiA1NMKwMTInMDAuMCJF!5e0!3m2!1sen!2som!4v1234567890",
					gallery: [
						"./images/khareef/ain_garzeez/2387143.jpg",
						"./images/khareef/ain_garzeez/5757-1.jpg",
						"./images/khareef/ain_garzeez/86ec222d-7541-4c87-ade6-43e362e7e0f5_xs.jpg",
						"./images/khareef/ain_garzeez/DCSoXBXXgAAfpVh.jpg",
						"./images/khareef/ain_garzeez/dghbav3xuaeunow_orig.jpg",
						"./images/khareef/ain_garzeez/drone-photography-of-the-al-ayjah-thumbnail-67050.jpeg",
						"./images/khareef/ain_garzeez/images.jpg",
						"./images/khareef/ain_garzeez/IMG_2706.jpeg",
					],
				},
				{
					id: 3,
					category: "khareef",
					key: "aynSahlanot",
					name: { en: "Ayn Sahlanot", ar: "عين سهلنوت" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.5,
					image: "./images/khareef/ain_sahlanot/Ain-Sahlnot-5.jpg",
					description: {
						en: "A serene natural spring with tranquil pools and abundant greenery, perfect for relaxation.",
						ar: "نبع طبيعي هادئ مع برك ماء وخضرة وفيرة، مثالي للاسترخاء.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d54.2!3d17.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzAwLjAiTiA1NMKwMTInMDAuMCJF!5e0!3m2!1sen!2som!4v1234567890",
					gallery: [
						"./images/khareef/ain_sahlanot/Ain-Sahlnot-5.jpg",
						"./images/khareef/ain_sahlanot/Ayn Sahalnoot.JPG",
						"./images/khareef/ain_sahlanot/Dh7-cqWWsAYxlYo.jpg",
						"./images/khareef/ain_sahlanot/EPGJYKIF5VGHHEZY766663WAW4.avif",
						"./images/khareef/ain_sahlanot/images.jpg",
						"./images/khareef/ain_sahlanot/IMG_2575-620x330.jpeg",
						"./images/khareef/ain_sahlanot/maxresdefault.jpg",
					],
				},
				{
					id: 4,
					category: "khareef",
					key: "iteenPark",
					name: { en: "Iteen Park", ar: "حديقة عيتين" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.4,
					image: "./images/khareef/Iteen/Ittin_cave_park.jpg",
					description: {
						en: "A beautiful park with natural caves, lush trees, and recreational areas for families.",
						ar: "حديقة جميلة مع كهوف طبيعية وأشجار مورقة ومناطق ترفيهية للعائلات.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d54.2!3d17.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzAwLjAiTiA1NMKwMTInMDAuMCJF!5e0!3m2!1sen!2som!4v1234567890",
					gallery: [
						"./images/khareef/Iteen/170138.jpg",
						"./images/khareef/Iteen/20062019_082424_0.jpg",
						"./images/khareef/Iteen/311375783119201.jpg",
						"./images/khareef/Iteen/ebfa5f61fd60c7528054d676f7255e3dytK_377oKt.avif",
						"./images/khareef/Iteen/images.jpg",
						"./images/khareef/Iteen/Ittin_cave_park.jpg",
						"./images/khareef/Iteen/sddefault.jpg",
					],
				},
				{
					id: 5,
					category: "khareef",
					key: "mughsailBeach",
					name: { en: "Mughsail Beach", ar: "شاطئ المغسيل" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.7,
					image: "./images/khareef/maghseel/شاطئ-المغسيل-صلالة-عمان-محافظة-ظفار-768x378.jpg",
					description: {
						en: "A pristine beach known for its white sand, clear waters, and the famous blowholes that shoot water high into the air.",
						ar: "شاطئ بكر معروف برماله البيضاء ومياهه الصافية والفتحات الشهيرة التي تطلق الماء عالياً في الهواء.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d54.1!3d16.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd38e0b8c8a8a25%3A0x8c8a8a8a8a8a8a8a!2sMughsail%20Beach!5e0!3m2!1sen!2som!4v1234567890",
					gallery: [
						"./images/khareef/maghseel/1658119937-1658119937-8rjc6x6rksb4-700x400.jpg",
						"./images/khareef/maghseel/b073a516310f8eb530921c00e6da441a5be0bd84e59de690394465e502bca65e.avif",
						"./images/khareef/maghseel/caption-4.webp",
						"./images/khareef/maghseel/df9e529e-8481-42f1-97b9-6422c9075f9f_xs.jpg",
						"./images/khareef/maghseel/EQqW9BzWoAAsaCz.jpg",
						"./images/khareef/maghseel/images.jpg",
					],
				},
				{
					id: 6,
					category: "khareef",
					key: "naheez",
					name: { en: "Naheez", ar: "نهيز" },
					state: { en: "Salalah", ar: "صلالة" },
					rating: 4.3,
					image: "./images/khareef/naheez/images.jpg",
					description: {
						en: "A coastal area with beautiful views, traditional fishing spots, and serene beaches.",
						ar: "منطقة ساحلية بإطلالات جميلة ومواقع صيد تقليدية وشواطئ هادئة.",
					},
					location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d54.2!3d17.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzAwLjAiTiA1NMKwMTInMDAuMCJF!5e0!3m2!1sen!2som!4v1234567890",
					gallery: [
						"./images/khareef/naheez/Bs0VGrXCIAE7M8R.jpg",
						"./images/khareef/naheez/Cm8kYLKXYAAvBTg.jpg",
						"./images/khareef/naheez/images.jpg",
						"./images/khareef/naheez/Screenshot_٢٠١٠٨٢٨-١٣٠٠٢٦_Chrome.jpg",
						"./images/khareef/naheez/southernoman-mirbat-header-01-v1-800x600.jpg",
						"./images/khareef/naheez/wadi-al-nakheel2.jpg",
					],
				},
				// Deserts
				{
					id: 7,
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
					id: 8,
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
					id: 9,
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
					id: 10,
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
					id: 11,
					category: "khareef",
					key: "sumhuram",
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
					id: 12,
					category: "coasts",
					key: "taqahCastle",
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

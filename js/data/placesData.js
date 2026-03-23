// Places Data - Organized images folder structure
const PlacesData = {
    places: [
        // ==================== KHAREEF (خريف) ====================
        {
            id: 1,
            category: "khareef",
            name: { en: "Wadi Darbat", ar: "وادي دربت" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.8,
            image: "./images/khareef/darbat_wadi/index.jpg",
            description: {
                en: "A stunning valley with freshwater springs, lush greenery, and breathtaking views. Perfect for picnics and boat rides.",
                ar: "وادي خلاب مع ينابيع مياه عذبة وخضرة مورقة وإطلالات خلابة. مثالي للنزهات وركوب القوارب."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Wadi+Darbat+Salalah+Oman",
            gallery: [
                "./images/khareef/darbat_wadi/1.jpg",
                "./images/khareef/darbat_wadi/2.webp",
                "./images/khareef/darbat_wadi/3.jpg",
                "./images/khareef/darbat_wadi/4.jpg",
                "./images/khareef/darbat_wadi/5.jpg",
                "./images/khareef/darbat_wadi/6.jpg",
            ]
        },
        {
            id: 2,
            category: "khareef",
            name: { en: "Ayn Garzeez", ar: "عين جرزيز" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.6,
            image: "./images/khareef/ain_garzeez/index.jpg",
            description: {
                en: "A natural spring with crystal clear water surrounded by lush vegetation and rocky formations.",
                ar: "نبع طبيعي بمياه صافية كريستالية محاطة بالنباتات الخضراء والتشكيلات الصخرية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Ayn+Garzeez+Salalah+Oman",
            gallery: [
                "./images/khareef/ain_garzeez/1.jpg",
                "./images/khareef/ain_garzeez/2.jpg",
                "./images/khareef/ain_garzeez/3.jpg",
                "./images/khareef/ain_garzeez/4.jpg",
            ]
        },
        {
            id: 3,
            category: "khareef",
            name: { en: "Ayn Sahlanot", ar: "عين سهلنوت" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.5,
            image: "./images/khareef/ain_sahlanot/index.jpg",
            description: {
                en: "A serene natural spring with tranquil pools and abundant greenery, perfect for relaxation.",
                ar: "نبع طبيعي هادئ مع برك ماء وخضرة وفيرة، مثالي للاسترخاء."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Ayn+Sahlanot+Salalah+Oman",
            gallery: [
                "./images/khareef/ain_sahlanot/1.avif",
                "./images/khareef/ain_sahlanot/2.jpeg",
                "./images/khareef/ain_sahlanot/3.jpg",
                "./images/khareef/ain_sahlanot/4.jpg",
            ]
        },
        {
            id: 4,
            category: "khareef",
            name: { en: "Iteen Park", ar: "حديقة عيتين" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.4,
            image: "./images/khareef/Iteen/index.jpg",
            description: {
                en: "A beautiful park with natural caves, lush trees, and recreational areas for families.",
                ar: "حديقة جميلة مع كهوف طبيعية وأشجار مورقة ومناطق ترفيهية للعائلات."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Iteen+Park+Salalah+Oman",
            gallery: [
                "./images/khareef/Iteen/1.jpg",
                "./images/khareef/Iteen/2.jpg",
                "./images/khareef/Iteen/3.jpg",
                "./images/khareef/Iteen/5.jpg",
            ]
        },
        // ==================== COASTS (شواطيء) ====================
        {
            id: 7,
            category: "coasts",
            name: { en: "Al Baleed Beach", ar: "شاطئ البليد" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.7,
            image: "./images/coasts/al-baleed-beach/index.jpg",
            description: {
                en: "A beautiful coastal beach with pristine waters and stunning views, perfect for relaxation and water activities.",
                ar: "شاطئ ساحلي جميل بمياه نقية وإطلالات خلابة، مثالي للاسترخاء والأنشطة المائية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Al+Baleed+Beach+Salalah+Oman",
            gallery: [
                "./images/coasts/al-baleed-beach/1.jpg",
                "./images/coasts/al-baleed-beach/2.jpg",
                "./images/coasts/al-baleed-beach/3.jpg",
                "./images/coasts/al-baleed-beach/4.jpg",
                "./images/coasts/al-baleed-beach/5.jpg",
                "./images/coasts/al-baleed-beach/6.jpg",
            ]
        },
        {
            id: 8,
            category: "coasts",
            name: { en: "Al Dahariz Beach", ar: "شاطئ الدهاريز" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.6,
            image: "./images/coasts/al-dahariz-beach/index.jpg",
            description: {
                en: "A serene beach known for its natural beauty and peaceful atmosphere, ideal for family gatherings.",
                ar: "شاطئ هادئ معروف بجماله الطبيعي وأجوائه الهادئة، مثالي للتجمعات العائلية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Al+Dahariz+Beach+Salalah+Oman",
            gallery: [
                "./images/coasts/al-dahariz-beach/1.jpg",
                "./images/coasts/al-dahariz-beach/2.jpg",
                "./images/coasts/al-dahariz-beach/3.jpg",
                "./images/coasts/al-dahariz-beach/4.jpg",
                "./images/coasts/al-dahariz-beach/5.jpg",
            ]
        },
        {
            id: 9,
            category: "coasts",
            name: { en: "Taqah Beach", ar: "شاطئ طاقة" },
            state: { en: "Taqah", ar: "طاقة" },
            rating: 4.5,
            image: "./images/coasts/taqah-beach/index.jpg",
            description: {
                en: "A picturesque beach near Taqah town, offering beautiful coastal scenery and traditional fishing spots.",
                ar: "شاطئ خلاب بالقرب من بلدة طاقة، يقدم مناظر ساحلية جميلة ومواقع صيد تقليدية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Taqah+Beach+Oman",
            gallery: [
                "./images/coasts/taqah-beach/1.jpg",
                "./images/coasts/taqah-beach/2.jpg",
                "./images/coasts/taqah-beach/3.jpg",
                "./images/coasts/taqah-beach/4.jpg",
                "./images/coasts/taqah-beach/5.jpg",
                "./images/coasts/taqah-beach/6.jpg",
                "./images/coasts/taqah-beach/7.jpg",
            ]
        },
        {
            id: 10,
            category: "coasts",
            name: { en: "Mughsail Beach", ar: "شاطئ مغسيل" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.8,
            image: "./images/coasts/mughsail-beach/index.jpg",
            description: {
                en: "Famous beach known for its white sand, clear waters, and the legendary blowholes.",
                ar: "شاطئ شهير معروف برماله البيضاء ومياهه الصافية والفتحات البحرية الأسطورية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Mughsail+Beach+Salalah+Oman",
            gallery: [
                "./images/coasts/mughsail-beach/1.jpg",
                "./images/coasts/mughsail-beach/2.jpg",
                "./images/coasts/mughsail-beach/3.jpg",
                "./images/coasts/mughsail-beach/4.jpg",
                "./images/coasts/mughsail-beach/5.jpg",
                "./images/coasts/mughsail-beach/6.jpg",
                "./images/coasts/mughsail-beach/7.jpg",
                "./images/coasts/mughsail-beach/8.jpg",
            ]
        },

        // ==================== DESERTS (صحاري) ====================
        {
            id: 11,
            category: "deserts",
            name: { en: "Mountains", ar: "جبال" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.9,
            image: "./images/deserts/mountains/index.jpg",
            description: {
                en: "Majestic mountain ranges offering breathtaking views and diverse landscapes.",
                ar: "سلاسل جبلية مهيبة تقدم إطلالات خلابة ومناظر طبيعية متنوعة."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Jebel+Samhan+Oman",
            gallery: [
                "./images/deserts/mountains/1.jpg",
                "./images/deserts/mountains/2.jpg",
                "./images/deserts/mountains/3.jpg",
                "./images/deserts/mountains/4.jpg",
            ]
        },
        {
            id: 12,
            category: "deserts",
            name: { en: "Sandy Deserts", ar: "صحاري رملية" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.7,
            image: "./images/deserts/sandy-deserts/index.jpg",
            description: {
                en: "Vast sandy deserts with stunning dunes and unique desert landscapes.",
                ar: "صحاري رملية شاسعة مع كثبان خلابة ومناظر صحراوية فريدة."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Empty+Quarter+Oman",
            gallery: [
                "./images/deserts/sandy-deserts/1.jpg",
                "./images/deserts/sandy-deserts/2.jpg",
                "./images/deserts/sandy-deserts/3.jpg",
                "./images/deserts/sandy-deserts/4.jpg",
            ]
        },
        {
            id: 13,
            category: "deserts",
            name: { en: "Al Hashman Desert", ar: "صحراء الحشمان" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.6,
            image: "./images/deserts/al-hashman/index.jpg",
            description: {
                en: "A beautiful desert area with traditional camping spots and stunning desert scenery.",
                ar: "منطقة صحراوية جميلة مع مواقع تخييم تقليدية ومناظر صحراوية خلابة."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Al+Hashman+Desert+Oman",
            gallery: [
                "./images/deserts/al-hashman/1.jpg",
                "./images/deserts/al-hashman/2.jpg",
                "./images/deserts/al-hashman/3.jpg",
            ]
        },
        {
            id: 14,
            category: "deserts",
            name: { en: "Al Haswah Desert", ar: "صحراء الحصوية" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.5,
            image: "./images/deserts/al-haswah/index.jpg",
            description: {
                en: "A gravel desert landscape offering unique terrain and desert experiences.",
                ar: "منظر صحراوي حصوي يقدم تضاريس فريدة وتجارب صحراوية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Oman+Desert",
            gallery: [
                "./images/deserts/al-haswah/1.jpg",
                "./images/deserts/al-haswah/2.jpg",
                "./images/deserts/al-haswah/3.jpg",
                "./images/deserts/al-haswah/4.jpg",
            ]
        },

        // ==================== NATURAL PARKS (محميات طبيعية) ====================
        {
            id: 15,
            category: "natural-parks",
            name: { en: "Jebel Samhan Reserve", ar: "محمية جبل سمحان" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.9,
            image: "./images/reserves/jebel-samhan/index.jpg",
            description: {
                en: "A nature reserve home to the endangered Arabian leopard and diverse mountain wildlife.",
                ar: "محمية طبيعية موطن للنمر العربي المهدد بالانقراض والحياة البرية الجبلية المتنوعة."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Jebel+Samhan+Reserve+Oman",
            gallery: [
                "./images/reserves/jebel-samhan/1.jpg",
                "./images/reserves/jebel-samhan/2.jpg",
                "./images/reserves/jebel-samhan/3.jpg",
                "./images/reserves/jebel-samhan/4.jpg",
                "./images/reserves/jebel-samhan/5.jpg",
                "./images/reserves/jebel-samhan/6.jpg",
                "./images/reserves/jebel-samhan/7.jpg",
                "./images/reserves/jebel-samhan/8.jpg",
                "./images/reserves/jebel-samhan/9.jpg",
                "./images/reserves/jebel-samhan/10.jpg",
                "./images/reserves/jebel-samhan/11.jpg",
                "./images/reserves/jebel-samhan/12.jpg",
            ]
        },
        {
            id: 16,
            category: "natural-parks",
            name: { en: "Khor Dahariz Reserve", ar: "محمية خور الدهاريز" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.6,
            image: "./images/reserves/khor-dahariz/index.jpg",
            description: {
                en: "A coastal wetland reserve important for migratory birds and marine life.",
                ar: "محمية أراضي رطبة ساحلية مهمة للطيور المهاجرة والحياة البحرية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Khor+Dahariz+Reserve+Oman",
            gallery: [
                "./images/reserves/khor-dahariz/1.jpg",
                "./images/reserves/khor-dahariz/2.jpg",
                "./images/reserves/khor-dahariz/3.jpg",
                "./images/reserves/khor-dahariz/4.jpg",
                "./images/reserves/khor-dahariz/5.jpg",
            ]
        },
        {
            id: 17,
            category: "natural-parks",
            name: { en: "Khor Mughsail Reserve", ar: "محمية خور مغسيل" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.5,
            image: "./images/reserves/khor-mughsail/index.jpg",
            description: {
                en: "A protected coastal area with mangroves and diverse ecosystems.",
                ar: "منطقة ساحلية محمية مع أشجار المانغروف وأنظمة بيئية متنوعة."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Khor+Mughsail+Oman",
            gallery: [
                "./images/reserves/khor-mughsail/1.jpg",
                "./images/reserves/khor-mughsail/2.jpg",
                "./images/reserves/khor-mughsail/3.jpg",
            ]
        },
        {
            id: 18,
            category: "natural-parks",
            name: { en: "Wadi Dawkah Reserve", ar: "محمية وادي دوكة" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.8,
            image: "./images/reserves/wadi-dawkah/index.jpg",
            description: {
                en: "A famous frankincense tree reserve, UNESCO World Heritage Site.",
                ar: "محمية أشجار اللبان الشهيرة، موقع تراث عالمي لليونسكو."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Wadi+Dawkah+Reserve+Oman",
            gallery: [
                "./images/reserves/wadi-dawkah/1.jpg",
                "./images/reserves/wadi-dawkah/2.jpg",
                "./images/reserves/wadi-dawkah/3.jpg",
                "./images/reserves/wadi-dawkah/4.jpg",
                "./images/reserves/wadi-dawkah/5.jpg",
                "./images/reserves/wadi-dawkah/6.jpg",
                "./images/reserves/wadi-dawkah/7.jpg",
            ]
        },

        // ==================== RUINS (مواقع أثرية) ====================
        {
            id: 19,
            category: "ruins",
            name: { en: "Nabi Ayoub Shrine", ar: "ضريح النبي أيوب" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.7,
            image: "./images/ruins/nabi-ayoub/index.jpg",
            description: {
                en: "The shrine of Prophet Ayoub (Job), a sacred religious site.",
                ar: "ضريح النبي أيوب، موقع ديني مقدس."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Prophet+Ayoub+Shrine+Salalah+Oman",
            gallery: [
                "./images/ruins/nabi-ayoub/1.jpg",
                "./images/ruins/nabi-ayoub/2.jpg",
            ]
        },
        {
            id: 20,
            category: "ruins",
            name: { en: "Nabi Omran Shrine", ar: "ضريح النبي عمران" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.6,
            image: "./images/ruins/nabi-omran/index.jpg",
            description: {
                en: "The shrine of Prophet Omran, an important religious landmark.",
                ar: "ضريح النبي عمران، معلم ديني مهم."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Prophet+Omran+Shrine+Salalah+Oman",
            gallery: [
                "./images/ruins/nabi-omran/1.jpg",
            ]
        },
        {
            id: 21,
            category: "ruins",
            name: { en: "Mirbat Fort", ar: "حصن مرباط" },
            state: { en: "Mirbat", ar: "مرباط" },
            rating: 4.5,
            image: "./images/ruins/mirbat-fort/index.jpg",
            description: {
                en: "A historic fort in Mirbat, showcasing traditional Omani military architecture.",
                ar: "حصن تاريخي في مرباط، يعرض العمارة العسكرية العمانية التقليدية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Mirbat+Fort+Oman",
            gallery: [
                "./images/ruins/mirbat-fort/1.jpg",
                "./images/ruins/mirbat-fort/2.jpg",
                "./images/ruins/mirbat-fort/3.jpg",
                "./images/ruins/mirbat-fort/4.jpg",
                "./images/ruins/mirbat-fort/5.jpg",
            ]
        },
        {
            id: 22,
            category: "ruins",
            name: { en: "Al Baleed Archaeological Site", ar: "موقع البليد الأثري" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.8,
            image: "./images/ruins/al-baleed/index.jpg",
            description: {
                en: "Ancient archaeological site with ruins dating back centuries.",
                ar: "موقع أثري قديم مع آثار تعود لقرون."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Al+Baleed+Archaeological+Site+Salalah+Oman",
            gallery: [
                "./images/ruins/al-baleed/1.jpg",
                "./images/ruins/al-baleed/2.jpg",
                "./images/ruins/al-baleed/3.jpg",
                "./images/ruins/al-baleed/4.jpg",
                "./images/ruins/al-baleed/5.jpg",
                "./images/ruins/al-baleed/6.jpg",
                "./images/ruins/al-baleed/7.jpg",
            ]
        },
        {
            id: 23,
            category: "ruins",
            name: { en: "Sumhuram", ar: "موقع سمهرم" },
            state: { en: "Salalah", ar: "صلالة" },
            rating: 4.7,
            image: "./images/ruins/sumhuram/index.jpg",
            description: {
                en: "Ancient port city ruins, UNESCO World Heritage Site with rich historical significance.",
                ar: "آثار مدينة مينائية قديمة، موقع تراث عالمي لليونسكو بأهمية تاريخية غنية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Sumhuram+Ancient+City+Salalah+Oman",
            gallery: [
                "./images/ruins/sumhuram/1.jpg",
                "./images/ruins/sumhuram/2.jpg",
                "./images/ruins/sumhuram/3.jpg",
                "./images/ruins/sumhuram/4.jpg",
                "./images/ruins/sumhuram/5.jpg",
                "./images/ruins/sumhuram/6.jpg",
            ]
        },
        {
            id: 24,
            category: "ruins",
            name: { en: "Shisr & Bar", ar: "موقع شصر وبار" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.6,
            image: "./images/ruins/shisr-bar/index.jpg",
            description: {
                en: "Archaeological site believed to be the legendary lost city of Ubar.",
                ar: "موقع أثري يُعتقد أنه مدينة أوبار المفقودة الأسطورية."
            },
            location: "https://www.google.com/maps/search/?api=1&query=Shisr+Lost+City+Oman",
            gallery: [
                "./images/ruins/shisr-bar/1.jpg",
                "./images/ruins/shisr-bar/2.jpg",
                "./images/ruins/shisr-bar/3.jpg",
                "./images/ruins/shisr-bar/4.jpg",
                "./images/ruins/shisr-bar/5.jpg",
                "./images/ruins/shisr-bar/6.jpg",
                "./images/ruins/shisr-bar/7.jpg",
                "./images/ruins/shisr-bar/8.jpg",
                "./images/ruins/shisr-bar/9.jpg",
                "./images/ruins/shisr-bar/10.jpg",
            ]
        },
    ],

    getByCategory(category) {
        if (category === "all") {
            return this.places;
        }
        return this.places.filter(place => place.category === category);
    },

    getById(id) {
        return this.places.find(place => place.id === id);
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlacesData;
}

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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122016.8701693176!2d54.43951271404758!3d17.12017284210355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd39503c68b8a25%3A0xbca00994e2b26d34!2sWadi%20Darbat!5e0!3m2!1sen!2som!4v1774251692205!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.3017739699126!2d54.07051608647689!3d17.106772941791007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd159f47d51197d%3A0x62c57e94b3b2d9f5!2sAin%20Jarziz%20-%20Wilayat%20Salalah!5e0!3m2!1sen!2som!4v1774263943075!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.4533889702875!2d54.1757340761035!3d17.148142383698726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3e5f4728797b1%3A0x17927c9aefc80af!2sAin%20Sahanoot!5e0!3m2!1sen!2som!4v1774264995508!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.630394800492!2d54.062627386474865!3d17.090722441839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd15f00214dae85%3A0xa82f879c3dedab40!2zSXRlZW4gKdin2YTZitiq2YrZhiDYp9mI2YrYsyDYp9mE2KfZhNmC2LHZhtmK!5e0!3m2!1sen!2som!4v1774461875552!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.3963600769644!2d54.12641968646481!3d17.004217442097865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3dfd7d1803c6d%3A0x1271e963c2e36b58!2sAL%20BALEED%20BEACH!5e0!3m2!1sen!2som!4v1774265319207!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15261.045626278134!2d54.16654646543761!3d17.010843141014952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3ddd6c20035d5%3A0xf37e6fb6b92fc839!2sDahariz%20Beach%20-%20Khor%20End!5e0!3m2!1sen!2som!4v1774265393699!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.800099003528!2d54.391641176101345!3d17.03347268379465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3c11b7e6cebdf%3A0xa9d75114bb6dc7b4!2sTaqah%20Beach!5e0!3m2!1sen!2som!4v1774265443010!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7635.869075044675!2d53.772411345701265!3d16.8791325356957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd16c8116814b8f%3A0xc1dea988a9e90a00!2sMughsail%20Beach!5e0!3m2!1sen!2som!4v1774265498443!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.102873586702!2d53.05791617886886!3d18.439113369815374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e87c58d5d020c6b%3A0x3b772ed488d33d3!2sOase%20al%20hashman%20oman!5e0!3m2!1sen!2som!4v1774265223514!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15250.848136915723!2d54.78126526547253!3d17.13554043934749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd30a848e5b0de9%3A0xbf5e333b8ea665c2!2z2KzYqNmEINiz2YXYrdin2YY!5e0!3m2!1sen!2som!4v1774462021185!5m2!1sen!2som",
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
        },www.google.com refus
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5188464880566!2d54.07434127610698!3d17.33874918354021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd155505f327483%3A0x3e61fa6093a6c92e!2sWadi%20Dawkah!5e0!3m2!1sen!2som!4v1774462546377!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7630.559801932776!2d54.13223104571022!3d17.009935285257107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3de4f1856ee23%3A0x4e58ac237f426b33!2sAl%20Balid%2C%20Salalah!5e0!3m2!1sen!2som!4v1774461772149!5m2!1sen!2som",
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
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.6716419987337!2d54.43304349919739!3d17.039037500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3bf61d7f94aed%3A0x39a6cb7bac60ebc0!2sSamahram%20Old%20City%20-%20Wilayat%20Taqah!5e0!3m2!1sen!2som!4v1774461554827!5m2!1sen!2som",
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
            name: { en: "Shisr Wubar", ar: "موقع شصر وبار" },
            state: { en: "Dhofar", ar: "ظفار" },
            rating: 4.6,
            image: "./images/ruins/shisr-bar/index.jpg",
            description: {
                en: "Archaeological site believed to be the legendary lost city of Ubar.",
                ar: "موقع أثري يُعتقد أنه مدينة أوبار المفقودة الأسطورية."
            },
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.0028401049094!2d53.64596662612333!3d18.255691382787187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd638cd16bf6aa5%3A0x16f615c2148e2fcc!2sUbar!5e0!3m2!1sen!2som!4v1774460557607!5m2!1sen!2som",
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

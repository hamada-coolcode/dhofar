// i18n System - Reactive translations with auto language switching
// Loads Vue reactive from global scope and exposes t() globally

(function () {
	// Use Vue's reactive from global
	const { reactive, computed } = Vue;

	// All translations (defined first to avoid hoisting issues)
	const translations = {
		// Navigation
		nav: {
			home: { en: "Home", ar: "الرئيسية" },
			khareef: { en: "Khareef", ar: "الخريف" },
			deserts: { en: "Deserts", ar: "الصحاري" },
			coasts: { en: "Coasts", ar: "السواحل" },
			naturalParks: { en: "Natural Parks", ar: "المحميات الطبيعية" },
			ruins: { en: "Ruins", ar: "آثار" },
			about: { en: "About", ar: "حول" },
		},

		// Site title
		site: {
			title: { en: "The Beauty of Dhofar", ar: "جمال ظفار" },
		},

		// Carousel
		carousel: {
			slides: {
				khareef: {
					title: { en: "Khareef", ar: "الخريف" },
					heading: {
						en: "Welcome to <mark>Dhofar</mark>",
						ar: "مرحباً بكم في <mark>ظفار</mark>",
					},
					description: {
						en: "When the monsoon arrives in June, Dhofar transforms into a lush emerald wonderland. Mist-cloaked mountains, cascading waterfalls, and cool breezes turn every trail into a story and every view into a memory.",
						ar: "عندما يصل الخريف في يونيو، تتحول ظفار إلى أرض خضراء مورقة. جبال مغطاة بالضباب، شلالات متدفقة، ونسيم بارد يحول كل مسار إلى قصة وكل منظر إلى ذكرى.",
					},
				},
				deserts: {
					title: { en: "Deserts", ar: "الصحاري" },
					heading: { en: "Endless <br><mark>Deserts</mark>", ar: "صحاري <br><mark>لا متناهية</mark>" },
					description: {
						en: "Golden dunes meet serene horizons in the Rub' al Khali. Experience sandboarding by day and stargazing under pristine skies by night.",
						ar: "تلتقي الكثبان الذهبية بالأفق الهادئ في الربع الخالي. جرب التزلج على الرمال نهاراً وتأمل النجوم تحت سماء صافية ليلاً.",
					},
				},
				coasts: {
					title: { en: "Coasts", ar: "السواحل" },
					heading: { en: "Azure <br><mark>Coasts</mark>", ar: "سواحل <br><mark>فيروزية</mark>" },
					description: {
						en: "Walk along powdery beaches, watch dolphins dance, and witness the thunder of Mughsail blowholes—Dhofar's coast is a sanctuary by the sea.",
						ar: "تمشى على طول الشواطئ الرملية، شاهد الدلافين وهي ترقص، واشهد هدير فجوات مغسيل - ساحل ظفار هو ملاذ بجانب البحر.",
					},
				},
				naturalParks: {
					title: { en: "Natural Parks", ar: "المحميات الطبيعية" },
					heading: { en: "Wild <br><mark>Natural Parks</mark>", ar: "محميات <br><mark>طبيعية برية</mark>" },
					description: {
						en: "Discover protected sanctuaries home to Arabian leopards, migratory birds, and ancient frankincense trees. Dhofar's natural parks preserve nature's treasures.",
						ar: "اكتشف محميات محمية موطن للنمر العربي والطيور المهاجرة وأشجار اللبان القديمة. محميات ظفار الطبيعية تحفظ كنوز الطبيعة.",
					},
				},
				ruins: {
					title: { en: "Ruins", ar: "الآثار" },
					heading: { en: "Ancient <br><mark>Ruins</mark>", ar: "آثار <br><mark>قديمة</mark>" },
					description: {
						en: "Walk through millennia at Sumhuram, Al Baleed, and the lost city of Ubar. Dhofar's archaeological treasures tell stories of ancient civilizations and frankincense trade routes.",
						ar: "سر عبر آلاف السنين في سمهرم والبليد ومدينة أوبار المفقودة. كنوز ظفار الأثرية تحكي قصص الحضارات القديمة وطرق تجارة اللبان.",
					},
				},
			},
			buttonText: { en: "LEARN MORE", ar: "اقرأ المزيد" },
		},

		// Index page section titles
		section: {
			explore: { en: "Explore", ar: "استكشف" },
			seeAboutRuins: { en: "See About Ruins", ar: "شاهد عن الآثار" },
			seeAboutKhareef: { en: "See About Khareef", ar: "شاهد عن الخريف" },
			seeAboutDeserts: { en: "See About Deserts", ar: "شاهد عن الصحاري" },
			seeAboutCoasts: { en: "See About Coasts", ar: "شاهد عن السواحل" },
			seeAboutNaturalParks: { en: "See About Natural Parks", ar: "شاهد عن الحدائق الطبيعية" },
		},

		// Explore section
		explore: {
			discover: { en: "Discover", ar: "اكتشف" },
			explore: { en: "Explore", ar: "استكشف" },
			discoverDescription: { en: "Discover the hidden gems of Dhofar", ar: "اكتشف الجواهر المخفية في ظفار" },
			exploreDhofar: { en: "Explore Dhofar", ar: "استكشف ظفار" },
			discoverMore: { en: "Discover More", ar: "اكتشف المزيد" },
			learnMore: { en: "Learn More", ar: "اعرف المزيد" },
			aboutDhofar: { en: "About Dhofar", ar: "عن ظفار" },
			aboutDhofarDescription: { en: "Discover the history, culture, and beauty of Oman's southern gem", ar: "اكتشف تاريخ وثقافة وجمال الجوهرة الجنوبية لعمان" },
		},

		// Explore card labels
		labels: {
			historical: { en: "Historical", ar: "تاريخي" },
			monsoon: { en: "Monsoon", ar: "الخريف" },
			desert: { en: "Desert", ar: "الصحراء" },
			coastal: { en: "Coastal", ar: "ساحلي" },
			nature: { en: "Nature", ar: "الطبيعة" },
		},

		// Settings modal
		settings: {
			title: { en: "Settings", ar: "الإعدادات" },
			language: { en: "Language", ar: "اللغة" },
			theme: { en: "Theme", ar: "السمة" },
			themes: {
				dark: { en: "Dark", ar: "داكن" },
				light: { en: "Light", ar: "فاتح" },
			},
		},

		// Place details
		place: {
			about: { en: "About", ar: "حول" },
			gallery: { en: "Gallery", ar: "معرض الصور" },
			location: { en: "Location", ar: "الموقع" },
			openInMaps: { en: "Open in Google Maps", ar: "افتح في خرائط جوجل" },
			close: { en: "Close", ar: "إغلاق" },
			explore: { en: "Explore", ar: "استكشف" },
		},

		// Category pages
		pages: {
			khareef: {
				title: { en: "The Beauty of Khofar", ar: "جمال الخريف" },
			},
			deserts: {
				title: { en: "The Beauty of Deserts", ar: "جمال الصحاري" },
			},
			coasts: {
				title: { en: "The Beauty of Coasts", ar: "جمال السواحل" },
			},
			ruins: {
				title: { en: "The Beauty of Ruins", ar: "جمال الآثار" },
			},
		},

		// Footer
		footer: {
			copyright: { en: "Copyright", ar: "حقوق النشر" },
		},

		// Gallery / Places
		gallery: {
			noPlaces: { en: "No places found in this category.", ar: "لم يتم العثور على أماكن في هذه الفئة." },
		},

		// Places data
		places: {
			khareef: {
				wadiDarbat: {
					name: { en: "Wadi Darbat", ar: "وادي دربت" },
					description: {
						en: "A stunning valley with freshwater springs, lush greenery, and breathtaking views. Perfect for picnics and boat rides.",
						ar: "وادي خلاب مع ينابيع مياه عذبة وخضرة مورقة وإطلالات خلابة. مثالي للنزهات وركوب القوارب.",
					},
				},
				aynGarzeez: {
					name: { en: "Ayn Garzeez", ar: "عين جرزيز" },
					description: {
						en: "A natural spring with crystal clear water surrounded by lush vegetation and rocky formations.",
						ar: "نبع طبيعي بمياه صافية كريستالية محاطة بالنباتات الخضراء والتشكيلات الصخرية.",
					},
				},
				aynSahlanot: {
					name: { en: "Ayn Sahlanot", ar: "عين سهلنوت" },
					description: {
						en: "A serene natural spring with tranquil pools and abundant greenery, perfect for relaxation.",
						ar: "نبع طبيعي هادئ مع برك ماء وخضرة وفيرة، مثالي للاسترخاء.",
					},
				},
				iteenPark: {
					name: { en: "Iteen Park", ar: "حديقة عيتين" },
					description: {
						en: "A beautiful park with natural caves, lush trees, and recreational areas for families.",
						ar: "حديقة جميلة مع كهوف طبيعية وأشجار مورقة ومناطق ترفيهية للعائلات.",
					},
				},
				mughsailBeach: {
					name: { en: "Mughsail Beach", ar: "شاطئ المغسيل" },
					description: {
						en: "A pristine beach known for its white sand, clear waters, and the famous blowholes that shoot water high into the air.",
						ar: "شاطئ بكر معروف برماله البيضاء ومياهه الصافية والفتحات الشهيرة التي تطلق الماء عالياً في الهواء.",
					},
				},
				naheez: {
					name: { en: "Naheez", ar: "نهيز" },
					description: {
						en: "A coastal area with beautiful views, traditional fishing spots, and serene beaches.",
						ar: "منطقة ساحلية بإطلالات جميلة ومواقع صيد تقليدية وشواطئ هادئة.",
					},
				},
			},
		},
	};

	// Reactive language state
	const state = reactive({
		locale: localStorage.getItem("language") || "en",
	});

	// Get current locale
	function getLocale() {
		return state.locale;
	}

	// Set locale and persist
	function setLocale(locale) {
		state.locale = locale;
		localStorage.setItem("language", locale);
		// Dispatch event for components that need to react
		window.dispatchEvent(new CustomEvent("localechange", { detail: { locale } }));
	}

	// Get nested value by dot-notation key
	function getNestedValue(obj, path) {
		return path.split(".").reduce((acc, part) => acc?.[part], obj);
	}

	// Translation function - returns current language string
	function t(key, fallback) {
		const value = getNestedValue(translations, key);
		if (value === undefined) {
			console.warn(`[i18n] Missing translation: "${key}"`);
			return fallback || key;
		}
		if (typeof value === "object" && value !== null) {
			return value[state.locale] || value.en || fallback || key;
		}
		return value;
	}

	// Expose globally
	window.t = t;
	window.i18n = {
		state,
		getLocale,
		setLocale,
		t,
		locale: computed(() => state.locale),
	};
})();

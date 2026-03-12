// Carousel Slide Data
const carouselSlides = [
    {
        id: 1,
        key: 'khareef',
        title: 'Khareef',
        image: './images/index_slider/khareef.png',
        thumbnail: './images/index_slider/khareef.png',
        heading: 'Welcome to <mark>Dhofar</mark>',
        description: 'When the monsoon arrives in June, Dhofar transforms into a lush emerald wonderland. Mist-cloaked mountains, cascading waterfalls, and cool breezes turn every trail into a story and every view into a memory.',
        link: './pages/khareef.html'
    },
    {
        id: 2,
        key: 'mountains',
        title: 'Mountains',
        image: './images/index_slider/mountains.jpg',
        thumbnail: './images/index_slider/mountains.jpg',
        heading: 'Majestic <br><mark>Mountains</mark>',
        description: 'From the dramatic cliffs of Jebel Samhan to hidden wadis and caves, Dhofar\'s mountains host breathtaking viewpoints, rare wildlife, and timeless hiking routes.',
        link: './pages/mountains.html'
    },
    {
        id: 3,
        key: 'deserts',
        title: 'Deserts',
        image: './images/index_slider/deserts.png',
        thumbnail: './images/index_slider/deserts.png',
        heading: 'Endless <br><mark>Deserts</mark>',
        description: 'Golden dunes meet serene horizons in the Rub\' al Khali. Experience sandboarding by day and stargazing under pristine skies by night.',
        link: './pages/deserts.html'
    },
    {
        id: 4,
        key: 'coasts',
        title: 'Coasts',
        image: './images/index_slider/coasts.jpg',
        thumbnail: './images/index_slider/coasts.jpg',
        heading: 'Azure <br><mark>Coasts</mark>',
        description: 'Walk along powdery beaches, watch dolphins dance, and witness the thunder of Mughsail blowholes—Dhofar\'s coast is a sanctuary by the sea.',
        link: './pages/coasts.html'
    },
    {
        id: 5,
        key: 'urbanicities',
        title: 'Urbanicities',
        image: './images/index_slider/urbancities.png',
        thumbnail: './images/index_slider/urbancities.png',
        heading: 'Vibrant <mark>Urbanicities</mark>',
        description: 'Savor frankincense-scented souqs, modern cafés, and warm Omani hospitality. Salalah blends heritage with a contemporary rhythm.',
        link: './pages/urbanicities.html'
    },
    {
        id: 6,
        key: 'natural_parks',
        title: 'Natural Parks',
        image: './images/index_slider/natural_parks.png',
        thumbnail: './images/index_slider/natural_parks.png',
        heading: 'Serene <br><mark>Natural <br>Parks</mark>',
        description: 'Drift along Wadi Darbat, picnic at Ayn Razat, and scan the cliffs for eagles—Dhofar\'s natural parks are pure tranquility.',
        link: './pages/natural_parks.html'
    }
];

// Site Configuration Data
const siteConfig = {
    title: 'The Beauty of Dhofar',
    navLinks: [
        { text: 'Home', href: './index.html' },
        { text: 'Khareef', href: './pages/khareef.html' },
        { text: 'Mountains', href: './pages/mountains.html' },
        { text: 'Deserts', href: './pages/deserts.html' },
        { text: 'Coasts', href: './pages/coasts.html' },
        { text: 'Urbanicities', href: './pages/urbanicities.html' },
        { text: 'Natural Parks', href: './pages/natural_parks.html' }
    ],
    sidebarItems: [
        { text: 'Home', href: './index.html' },
        { text: 'Khareef', href: './pages/khareef.html' },
        { text: 'Mountains', href: './pages/mountains.html' },
        { text: 'Deserts', href: './pages/deserts.html' },
        { text: 'Coasts', href: './pages/coasts.html' },
        { text: 'Urbanicities', href: './pages/urbanicities.html' },
        { text: 'Natural Parks', href: './pages/natural_parks.html' },
        { text: 'About', href: './pages/about.html' }
    ]
};

const sidebarItems = [
    { text: 'Home', href: './index.html', icon: 'home' },
    { text: 'Khareef', href: './pages/khareef.html', icon: 'cloud-rain' },
    { text: 'Mountains', href: './pages/mountains.html', icon: 'mountain' },
    { text: 'Deserts', href: './pages/deserts.html', icon: 'sun' },
    { text: 'Coasts', href: './pages/coasts.html', icon: 'waves' },
    { text: 'Urbanicities', href: './pages/urbanicities.html', icon: 'building-2' },
    { text: 'Natural Parks', href: './pages/natural_parks.html', icon: 'trees' },
    { text: 'About', href: './pages/about.html', icon: 'info' }
];

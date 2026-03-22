
const AboutTechnologies = {
    data() {
        return {
            technologies: [
                {
                    name: "HTML",
                    icon: "./images/about/technologies_icons/html.svg",
                    description: "A MarkUp language designed by the inventor of the internet. It is the backbone and the essential for all websites."
                },
                {
                    name: "CSS",
                    icon: "./images/about/technologies_icons/css.svg",
                    description: "Cascading Style Sheets, aims to style the boring HTML tags."
                },
                {
                    name: "Javascript",
                    icon: "./images/about/technologies_icons/javascript.svg",
                    description: "A dynamically weakly typed programming language. Javascript and WebAssembly are the only languages that can run inside your browser."
                },
                {
                    name: "Vue.js",
                    icon: "./images/about/technologies_icons/vuejs.svg",
                    description: "A powerful UI framework. It uses the 'Components' method. which separates the webview into building blocks as LEGO.",
                    link: "https://vuejs.org/",
                },
                {
                    name: "TailwindCSS",
                    icon: "./images/about/technologies_icons/tailwindcss.svg",
                    description: "A utility-based CSS framework. so without naming classes, or remembering complex properties, You style without leaving you HTML.",
                    link: "https://tailwindcss.com/",
                },
                {
                    name: "DaisyUI",
                    icon: "",
                    description: "TailwindCSS is awesome, but it forces me rebuilding UI each time. That's why we have DaisyUI with its highly customizable components.",
                    link: "https://daisyui.com/",
                },
                {
                    name: "Lucide Icons",
                    icon: "",
                    description: "Lucide provides beautiful high-quality icons for this project.",
                    link: "https://lucide.dev",
                },
                {
                    name: "TypeIt",
                    icon: "",
                    description: "The most versatile typing utility.",
                    link: "https://typeitjs.com",
                },
                {
                    name: "ZText",
                    icon: "",
                    description: "Awesome super-lightweight 3D text utility.",
                    link: "https://bennettfeely.com/ztext/",
                }
            ]
        }
    },
    template: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <div v-for="tech in technologies" :key="tech.name" class="card bg-base-100 shadow-xl p-6 text-center border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mx-auto mb-4" v-if="tech.icon">
                <div v-else class="w-16 h-16 mx-auto mb-4 bg-base-200 rounded-lg flex items-center justify-center">
                    <span class="text-2xl font-bold">{{ tech.name.charAt(0) }}</span>
                </div>
                <h3 class="text-xl font-bold mb-2">
                    <a v-if="tech.link" :href="tech.link" target="_blank" class="hover:underline">{{ tech.name }}</a>
                    <span v-else>{{ tech.name }}</span>
                </h3>
                <p class="text-sm text-base-content/70">{{ tech.description }}</p>
            </div>
        </div>
    `
}

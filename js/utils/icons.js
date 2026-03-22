// Icons Utility - Helper for Lucide icons initialization

export const Icons = {
    init() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },
};

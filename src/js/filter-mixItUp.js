export function filterMixItUp() {
    mixitup(".products", {
    selectors: {
        target: '.product'
    },
    animation: {
        duration: 300
    }
});
}

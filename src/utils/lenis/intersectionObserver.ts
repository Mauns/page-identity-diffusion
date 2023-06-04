import { thresholds } from "./thresholds";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.innerHeight

            const signFomular = Math.abs(entry.boundingClientRect.top - entry.rootBounds.height) / entry.rootBounds.height * 1
            const sign = Math.sign(signFomular)

            // console.log(signFomular, sign)

            const ratio =  entry.intersectionRatio;
            const mappedRatio = signFomular.toFixed(3);
            const lenisAttr = entry.target.getAttribute('data-lenis');
            if (lenisAttr !== null) {
                entry.target.setAttribute('data-lenis', mappedRatio);
            }
        }
    });
}, { threshold: thresholds });

// observe elements with 'data-lenis' attribute
export const intersectionObserver = () => {
    const lenisElems = document.querySelectorAll('[data-lenis]');
    lenisElems.forEach(elem => observer.observe(elem));
}

// watch-data
export const watchDataAttrChanges = (element, attributeName, callback) => {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === attributeName
            ) {
                callback(mutation.target.getAttribute(attributeName));
            }
        }
    });

    observer.observe(element, { attributes: true });

    return observer;
}
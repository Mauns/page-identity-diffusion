import Lenis from '@studio-freight/lenis'
import { intersectionObserver } from './intersectionObserver'
import { $scrollProgress, $scrollVelocity } from './scrollStore'

export const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    wheelMultiplier: 1.309,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    // console.log({ scroll, limit, velocity, direction, progress })
    $scrollProgress.set(progress)
    $scrollVelocity.set(velocity)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
intersectionObserver()
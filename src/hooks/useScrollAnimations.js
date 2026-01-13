import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      const heroTitles = document.querySelectorAll('[data-animate="hero-title"]')
      heroTitles.forEach((title) => {
        const split = new SplitType(title, { types: 'chars, words' })
        gsap.set(split.chars, {
          y: 120,
          opacity: 0,
          rotateX: -90,
          transformOrigin: 'bottom center'
        })
        gsap.to(split.chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: { amount: 0.8, from: 'start' },
          ease: 'power4.out',
          delay: 0.3,
        })
      })

      // Section titles - cinematic reveal
      const sectionTitles = document.querySelectorAll('[data-animate="title"]')
      sectionTitles.forEach((title) => {
        const split = new SplitType(title, { types: 'words, lines' })
        gsap.set(split.words, {
          y: '110%',
          opacity: 0,
        })
        ScrollTrigger.create({
          trigger: title,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(split.words, {
              y: '0%',
              opacity: 1,
              duration: 1.4,
              stagger: { amount: 0.5 },
              ease: 'power4.out',
            })
          },
          once: true,
        })
      })

      // Paragraph reveals - staggered lines
      const paragraphs = document.querySelectorAll('[data-animate="paragraph"]')
      paragraphs.forEach((p) => {
        const split = new SplitType(p, { types: 'lines' })
        gsap.set(split.lines, {
          y: 40,
          opacity: 0,
        })
        ScrollTrigger.create({
          trigger: p,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(split.lines, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.12,
              ease: 'power3.out',
            })
          },
          once: true,
        })
      })

      // Image reveals - irregular motion
      const images = document.querySelectorAll('[data-animate="image"]')
      images.forEach((img, i) => {
        const direction = i % 3
        const xOffset = direction === 0 ? -80 : direction === 1 ? 80 : 0
        const yOffset = direction === 2 ? 60 : 40
        const rotation = (i % 2 === 0 ? -3 : 3)

        gsap.set(img, {
          x: xOffset,
          y: yOffset,
          opacity: 0,
          scale: 1.1,
          rotation: rotation,
        })

        ScrollTrigger.create({
          trigger: img,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(img, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.6,
              ease: 'power4.out',
            })
          },
          once: true,
        })
      })

      // Parallax images
      const parallaxImages = document.querySelectorAll('[data-parallax]')
      parallaxImages.forEach((img) => {
        const speed = parseFloat(img.dataset.parallax) || 0.3
        gsap.to(img, {
          y: () => window.innerHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })

      // Horizontal scroll sections
      const horizontalSections = document.querySelectorAll('[data-horizontal]')
      horizontalSections.forEach((section) => {
        const wrapper = section.querySelector('[data-horizontal-wrapper]')
        if (!wrapper) return

        const items = wrapper.children
        const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth, 0)

        gsap.to(wrapper, {
          x: () => -(totalWidth - window.innerWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
      })

      // Fade elements
      const fadeElements = document.querySelectorAll('[data-animate="fade"]')
      fadeElements.forEach((el, i) => {
        const delay = i * 0.08
        gsap.set(el, { opacity: 0, y: 30 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
              ease: 'power3.out',
            })
          },
          once: true,
        })
      })

      // Scale reveals
      const scaleElements = document.querySelectorAll('[data-animate="scale"]')
      scaleElements.forEach((el) => {
        gsap.set(el, { scale: 0.8, opacity: 0 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(el, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'power4.out',
            })
          },
          once: true,
        })
      })

      // Marquee speed control
      const marquees = document.querySelectorAll('[data-marquee]')
      marquees.forEach((marquee) => {
        gsap.to(marquee, {
          x: '-50%',
          ease: 'none',
          scrollTrigger: {
            trigger: marquee,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

export default useScrollAnimations

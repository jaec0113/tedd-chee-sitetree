var tl = gsap.timeline()

gsap.from("#us-flag", { x: -150, duration: 1 })
gsap.from("#kor-flag", { x: 150, duration: 1 })
tl.from(".website-container", { y: 250, duration: 1 })

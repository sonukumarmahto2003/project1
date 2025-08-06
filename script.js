Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["https://videos.pexels.com/video-files/30809321/13177204_1080_1920_30fps.mp4", "https://videos.pexels.com/video-files/30809325/13177200_1080_1920_30fps.mp4", "https://videos.pexels.com/video-files/31893782/13585415_1080_1920_30fps.mp4"]});


gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 2,
//  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
         // console.log((prog.progress + index));
          
        },
      });
    });
  },
});
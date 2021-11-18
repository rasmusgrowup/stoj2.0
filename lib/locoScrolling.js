const ScrollTriggerProxy = (props) => {

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {

    if (scroll) {

      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      var scrollEl = gsap.utils.toArray('.scroll');
      scrollEl.forEach((scroll) => {
        gsap.from(scroll, {
        scale: .6,
          scrollTrigger: {
            trigger: scroll,
            scroller: element,
            start: "top 95%",
            end: "top 40%",
            scrub: true
          }
        });
      });

      var fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach((fadeIn) => {
        gsap.from(fadeIn, {
        opacity: 0,
          scrollTrigger: {
            trigger: fadeIn,
            scroller: element,
            start: "top 85%",
            end: "top 40%",
            scrub: true
          }
        });
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

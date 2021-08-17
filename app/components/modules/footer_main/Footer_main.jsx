import Suggestion_field from '../../elements/suggestion_field/Suggestion_field';
import Suggest_svg from '../../elements/suggest_svg/Suggest_svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Footer_main = () => {
  //framer motion variants
  const variantsText = {
    hiddenX: {
      x: '-100vw',
    },
    hiddenY: {
      y: '100vh',
    },
  };
  //framer motion animation control
  const controlX = useAnimation();
  const controlY = useAnimation();

  // interception event when the element is in the screen view it show the animation
  const { ref, inView, entry } = useInView();
  if (inView) {
    controlX.start({
      x: 0,
      transition: {
        delay: 0.7,
        type: 'spring',
        stiffness: 60,
      },
    });
    controlY.start({
      y: 0,
      transition: {
        delay: 0.7,
        type: 'spring',
        stiffness: 40,
      },
    });
  }

  return (
    <section className="text-neutral  relative pt-20vw pb-20">
      <div className="layout-component grid grid-cols-1 md:grid-cols-2 md:items-center">
        <div ref={ref} className="relative">
          <motion.h3
            variants={variantsText}
            initial="hiddenY"
            animate={controlY}
            className="text-2xl font-semibold sm:text-3xl lg:text-4xl"
          >
            Topic <span className="text-secondaryLight ">Suggestions</span>
          </motion.h3>

          <motion.p
            variants={variantsText}
            initial="hiddenX"
            animate={controlX}
            className="pt-3 md:text-lg"
          >
            Tutorial idea, Feedback, or any words you wanna tell me.
          </motion.p>
          <Suggestion_field />
        </div>

        <div className="w-3/4 mx-auto">
          <Suggest_svg />
        </div>
      </div>

      <svg
        className="absolute top-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#405FB1"
          fillOpacity="1"
          d="M0,256L48,224C96,192,192,128,288,112C384,96,480,128,576,149.3C672,171,768,181,864,170.7C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Footer_main;

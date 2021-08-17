import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import style from './Project_cards.module.css';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects_card = ({
  projects,
  bgColor = 'bg-secondaryVeryLight',
  textColor = 'text-secondaryDark',
  extraStyle = '',
  coverColor = '#000249',
  coverTextColor = '#FAFDF6',
}) => {
  //Set the color dynamic to css hover animation depend the props come
  useEffect(() => {
    const cards = document.querySelectorAll(`.${style.project_card}`);
    cards.forEach((card) => {
      card.style.setProperty('--color', coverColor);
      card.style.setProperty('--textColor', coverTextColor);
    });
  }, [coverColor, coverTextColor]);

  //set when start or stop animation depending the card hover
  const controls = useAnimation();
  const controlsLeft = useAnimation();
  const controlsScale = useAnimation();
  const controlScroll = useAnimation();

  //Condition if the element is in the view screen for make the animation
  const { ref, inView, entry } = useInView();
  if (inView) {
    controlScroll.start({
      x: 0,
      transition: {
        delay: 0.7,
        type: 'spring',
        stiffness: 60,
      },
    });
  }

  //Framer motion variants
  const containerAnime = {
    hidden: { x: '-100vw' },
    visible: {
      scale: 1.05,
      translateY: -5,
      transition: { when: 'beforeChildren' },
    },
  };

  const childAnime = {
    hidden: {
      y: [-1000, 0],
      opacity: [0, 1],
      transition: { duration: 0.7 },
    },
    visible: { y: 0, opacity: 1 },
    hiddenLeft: {
      x: [-1000, 0],
      opacity: [0, 1],
      transition: { duration: 0.7 },
    },
    hiddenScale: {
      scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      opacity: [0, 1],
      transition: { duration: 0.4, ease: 'linear' },
    },
  };

  return (
    <Link passHref={true} key={projects.id} href={`/projects/${projects.id}`}>
      <a
        ref={ref}
        onMouseEnter={() => {
          controls.start('hidden');
          controlsLeft.start('hiddenLeft');
          controlsScale.start('hiddenScale');
        }}
        className="block "
      >
        <motion.article
          variants={containerAnime}
          whileHover="visible"
          animate={controlScroll}
          initial="hidden"
          className={`${bgColor} ${textColor} ${extraStyle}  transition-colors delay-200 px-4 py-5 rounded-lg relative cursor-pointer h-full ${style['project_card']} card overflow-hidden shadow-lg`}
        >
          <motion.h4
            variants={childAnime}
            animate={controls}
            initial="visible"
            className="font-semibold text-lg pb-2 sm:text-xl z-10 relative"
          >
            {projects.title}
          </motion.h4>
          <motion.p
            variants={childAnime}
            animate={controlsLeft}
            initial="visible"
            className="text-sm sm:text-base z-10 relative"
          >
            {projects.description}
          </motion.p>
          <section className="mt-2 flex">
            {projects.tech_icon.map((icon) => {
              return (
                <div
                  key={icon.Tech_name}
                  className="w-6 h-6 mr-2 relative iconWraper z-10"
                >
                  <div className="absolute bottom-full left-0 transform translate-x-0 invisible bg-primary text-secondaryVeryLight border border-secondaryLight py-1 px-3 rounded-lg">
                    {icon.Tech_name}
                  </div>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <title>{icon.Tech_name}</title>
                    <path d={icon.Svg_icon_path} />
                  </svg>
                </div>
              );
            })}
          </section>

          <motion.section
            variants={childAnime}
            animate={controlsScale}
            className="mt-3 unset-img z-10 relative"
          >
            <Image
              src={projects.proyectPic[0].formats.large.url}
              alt={projects.title + ' Image'}
              layout="fill"
              className="custom-img"
              loading="lazy"
            />
          </motion.section>

          <p
            className={` mt-2 relative  inline-block ${style.proyecto_viewmore} z-10`}
          >
            View More
          </p>
        </motion.article>
      </a>
    </Link>
  );
};

export default Projects_card;

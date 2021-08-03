import Image from 'next/image';

import MyTechStack from '../../elements/myTechStack/MyTechStack';
import TitleAnimated from '../../elements/titleAnimated/TitleAnimated';
import style from './Header.module.css';

const Header = ({ home_pic }) => {
  return (
    <div className="relative pb-20vw ">
      <div className="z-10 relative grid grid-cols-8 auto-rows-max layout-component">
        <div className="col-start-1 col-span-5 row-start-1 row-span-2">
          <TitleAnimated
            text={[
              `Hi, I'm <span >Elvis</span >`,
              `Hi, I'm <span >Elvis Ariel</span >`,
              `Hi, I'm <span >Elvis Miranda</span >`,
              `Nice to meet <span >you!</span >`,
              `Hi, I'm <span >Elvis</span>`,
            ]}
            textSize="text-4xl sm:text-5xl lg:text-6xl"
            breakText={true}
          />
          <p className="text-neutralGray font-bold pb-8 sm:text-xl ">
            Frontend Developer
          </p>
        </div>

        <div className="pt-16 col-start-5 col-span-4 row-start-1 row-span-3 flex justify-center items-end">
          <div className="h-40 w-40 sm:w-60 sm:h-60 md:h-80 md:w-80 relative">
            <Image
              src={home_pic.mainPic.formats.medium.url}
              alt={home_pic.name}
              layout="fill"
              loading="lazy"
              className={` imgRound ${style.pic__border}`}
            />
          </div>
        </div>

        <div className="col-start-1 col-span-full pt-2 relative">
          <MyTechStack />
        </div>
      </div>

      <svg
        className="absolute bottom-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#405FB1"
          fillOpacity="1"
          d="M0,256L60,250.7C120,245,240,235,360,202.7C480,171,600,117,720,122.7C840,128,960,192,1080,181.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;

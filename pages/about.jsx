import axios from 'axios';
import Image from 'next/image';
import TitleAnimated from '../app/components/elements/titleAnimated/TitleAnimated';
import { url } from '../config/next.config';

export async function getStaticProps(context) {
  const { data: aboutMe } = await axios.get(`${url}/about-me`);

  if (!aboutMe) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      aboutMe,
    },
  };
}

const about = ({ aboutMe }) => {
  return (
    <section className=" layout-component flex justify-end  min-h-screen">
      <div className="relative w-full pb-96 lg:mb-8">
        <h1 className=" text-neutral text-3xl md:text-4xl lg:text-5xl font-bold pr-2">
          <TitleAnimated
            text={[
              `I'm happy <span> you </span> want to know more about <span>me</span>`,
            ]}
            breakText={false}
          />
        </h1>

        <h3 className="text-lg md:text-xl pt-2 font-semibold text-neutralGray">
          {aboutMe.subtitle.slice(0, 1).toUpperCase() +
            aboutMe.subtitle.slice(1)}
        </h3>

        <p className="text-neutral pt-4 pr-2 tracking-wide md:text-lg">
          {aboutMe.description}
        </p>

        <div className="absolute block bottom-32 right-14 md:right-0 transform translate-x-2/4 w-44 h-52  md:w-52 md:h-60 lg:w-56 lg:h-64 aboutMe--picBorder">
          <div className="left-0 absolute transform translate-x-6 md:translate-x-8 translate-y-3/4 md:translate-y-full">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M364,297.5Q345,345,297.5,375Q250,405,185,392.5Q120,380,87.5,315Q55,250,86,183.5Q117,117,183.5,73Q250,29,331,58.5Q412,88,397.5,169Q383,250,364,297.5Z"
                fill="#d1d8e0"
              ></path>
            </svg>
          </div>

          <div className="left-0 absolute transform -translate-x-20 -translate-y-1/4">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M375,311.5Q373,373,311.5,375.5Q250,378,171.5,392.5Q93,407,77.5,328.5Q62,250,70,164Q78,78,164,70.5Q250,63,318,88.5Q386,114,381.5,182Q377,250,375,311.5Z"
                fill="#BA2E4A"
              ></path>
            </svg>
          </div>
          <Image
            src={url + aboutMe.myPic.formats.medium.url}
            alt={aboutMe.myPic.name}
            layout="fill"
            loading="lazy"
          />
          <div className="transform -translate-x-2/4 absolute bottom-0 translate-y-2/4 w-32 h-40 md:w-40 md:h-48 lg:w-44 lg:h-52 aboutMe--picBorder">
            <Image
              src={url + aboutMe.myPic_2.formats.medium.url}
              alt={aboutMe.myPic.name}
              layout="fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary w-1/5 md:w-1/3 h-auto"></div>
    </section>
  );
};
about.layout = 'L1';

export default about;

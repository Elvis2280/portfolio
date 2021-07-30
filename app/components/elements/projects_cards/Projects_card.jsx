import Image from 'next/image';
import { url } from '../../../../config/next.config';

const Projects_card = ({ projects }) => {
  const cards = projects
    .slice(projects.length - 3, projects.length)
    .reverse()
    .map((element) => {
      return (
        <article
          key={element.id}
          className="bg-secondaryVeryLight text-secondaryDark px-4 py-5 rounded-lg relative cursor-pointer"
        >
          <h4 className="font-semibold text-lg pb-2 sm:text-xl">
            {element.title}
          </h4>
          <p className="text-sm sm:text-base">{element.description}</p>
          <div className="mt-2 flex">
            {element.tech_icon.map((icon) => {
              return (
                <div
                  key={icon.Tech_name}
                  className="w-6 h-6 mr-2 relative iconWraper"
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
          </div>

          <div className="mt-3 unset-img">
            <Image
              src={url + element.proyectPic[0].formats.large.url}
              alt={element.title + ' Image'}
              layout="fill"
              className="custom-img"
              loading="lazy"
            />
          </div>
        </article>
      );
    });

  return <>{cards}</>;
};

export default Projects_card;

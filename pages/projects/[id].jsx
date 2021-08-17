import axios from 'axios';
import TitleAnimated from '@/app/components/elements/titleAnimated/TitleAnimated';
import Image from 'next/image';
import Markdown_text from '@/app/components/modules/markdown_text/Markdown_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const getStaticPaths = async () => {
  const { data: projects } = await axios.get(
    `${process.env.BACKEND_URL}/projects`,
  );

  const paths = projects.map((project) => {
    return { params: { id: project.id.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { data: projects } = await axios.get(
    `${process.env.BACKEND_URL}/projects/${params.id}`,
  );

  return {
    props: projects,
  };
}

const Projects_info = (projects) => {
  return (
    <div className="layout-component text-neutral">
      <header>
        <TitleAnimated
          textSize="text-4xl sm:text-5xl lg:text-6xl"
          text={[projects.title]}
          breakText={false}
        />
        <section className="pb-2 border-b border-gray-600">
          <p className="text-neutralGray py-2 md:text-lg">
            {projects.description}
          </p>

          <a
            className="text-secondaryLight transition-colors duration-300 hover:text-neutral inline-block mb-1 md:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            href={projects.link}
          >
            Visit Live{' '}
            <FontAwesomeIcon className="ml-1" icon={faExternalLinkAlt} />
          </a>

          <div className="unset-img mb-3">
            <Image
              src={`${projects.proyectPic[0].url}`}
              alt={projects.proyectPic[0].name}
              layout="fill"
              className="custom-img"
            />
          </div>
        </section>
      </header>

      <Markdown_text content={projects.explaining} />
    </div>
  );
};

Projects_info.layout = 'L1';
export default Projects_info;

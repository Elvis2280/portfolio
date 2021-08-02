import axios from 'axios';
import TitleAnimated from '../../app/components/elements/titleAnimated/TitleAnimated';
import { url } from '../../config/next.config';
import Projects_card from '../../app/components/elements/projects_cards/Projects_card';

export async function getStaticProps(context) {
  const { data: projects } = await axios.get(`${url}/projects`);

  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects }) => {
  return (
    <div className="text-neutral layout-component ">
      <header>
        <TitleAnimated
          text={[`Elvis Miranda's <span>Projects 💻</span>`]}
          textSize="text-3xl md:text-4xl lg:text-5xl"
        />
        <p className="text-neutralGray font-semibold md:text-lg">
          Some of my projects
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        <Projects_card
          projects={projects}
          bgColor="bg-transparent"
          textColor="text-neutral "
          extraStyle="border border-secondaryLight"
        />
      </section>
    </div>
  );
};
Projects.layout = 'L1';
export default Projects;

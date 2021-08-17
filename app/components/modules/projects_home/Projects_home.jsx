import Btn_linkPage from '@/app/components/elements/btn_linkPage/Btn_linkPage';
import Projects_card from '@/app/components/elements/projects_cards/Projects_card';
import lastTreeItems from '@/app/utils/lastTreeItems';

const Projects_home = ({ projects }) => {
  return (
    <div className="pb-4">
      <h3 className="text-2xl font-semibold pb-3 sm:text-3xl lg:text-4xl">
        My last <span className="text-secondaryVeryLight">Projects</span>
      </h3>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {lastTreeItems(projects).map((project) => {
          return <Projects_card key={project.id} projects={project} />;
        })}
      </div>

      <Btn_linkPage pageDirection="/projects" extraStyle="mt-4">
        See More
      </Btn_linkPage>
    </div>
  );
};

export default Projects_home;

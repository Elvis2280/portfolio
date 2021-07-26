import Projects_home from '../../modules/projects_home/Projects_home';
import Blog_main from '../blog_main/Blog_main';

const Content_main = ({ projects }) => {
  return (
    <section className="bg-secondary min-h-screen">
      <div className="layout-component">
        <Projects_home projects={projects} />
        <Blog_main />
      </div>
    </section>
  );
};

export default Content_main;

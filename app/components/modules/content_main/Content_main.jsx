import Projects_home from '@/app/components/modules/projects_home/Projects_home';
import Blog_main from '@/app/components/modules/blog_main/Blog_main';

const Content_main = ({ projects, blogs }) => {
  return (
    <section className="bg-secondary min-h-screen">
      <div className="layout-component">
        <Projects_home projects={projects} />
        <Blog_main blogs={blogs} />
      </div>
    </section>
  );
};

export default Content_main;

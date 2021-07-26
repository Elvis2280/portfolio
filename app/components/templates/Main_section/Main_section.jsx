import Header from '../../modules/header-main/Header';
import Content_main from '../../modules/content_main/Content_main';
import Footer_main from '../../modules/footer_main/Footer_main';

const Main_section = ({ projects, home_pic }) => {
  return (
    <main className="font-fontDefault text-neutral min-h-screen">
      <Header home_pic={home_pic} />
      <Content_main projects={projects} />
      <Footer_main />
    </main>
  );
};

export default Main_section;

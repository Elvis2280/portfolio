import Header from '@/app/components/modules/header-main/Header';
import Content_main from '@/app/components/modules/content_main/Content_main';
import Footer_main from '@/app/components/modules/footer_main/Footer_main';

const Main_section = ({ projects, home_pic, blogs }) => {
  return (
    <main className="font-fontDefault text-neutral min-h-screen ">
      <Header home_pic={home_pic} />
      <Content_main projects={projects} blogs={blogs} />
      <Footer_main />
    </main>
  );
};

export default Main_section;

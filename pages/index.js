import axios from 'axios';
import Main_section from '@/app/components/templates/Main_section/Main_section';
import Head from 'next/head';

export async function getStaticProps(context) {
  const { data: projects } = await axios.get(
    `${process.env.BACKEND_URL}/projects`,
  );

  const { data: home_pic } = await axios.get(
    `${process.env.BACKEND_URL}/home-picture`,
  );

  const { data: blogs } = await axios.get(`${process.env.BACKEND_URL}/blogs`);

  if (!projects && !home_pic && !blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
      home_pic,
      blogs,
    },
  };
}

const Home = ({ projects, home_pic, blogs }) => {
  return (
    <>
      <Head>
        <title>Elvis Miranda portfolio</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Main_section projects={projects} home_pic={home_pic} blogs={blogs} />
    </>
  );
};

Home.layout = 'L1';

export default Home;

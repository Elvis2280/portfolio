import axios from 'axios';

import Main_section from '../app/components/templates/Main_section/Main_section';
import { url } from '../config/next.config';

export async function getStaticProps(context) {
  const { data: projects } = await axios.get(`${url}/projects`);

  const { data: home_pic } = await axios.get(`${url}/home-picture`);

  const { data: blogs } = await axios.get(`${url}/blogs`);

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
  return <Main_section projects={projects} home_pic={home_pic} blogs={blogs} />;
};

Home.layout = 'L1';

export default Home;

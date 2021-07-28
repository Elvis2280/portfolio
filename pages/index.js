import axios from 'axios';

import Main_section from '../app/components/templates/Main_section/Main_section';

export async function getStaticProps(context) {
  const { data: projects } = await axios.get('http://localhost:1337/projects');

  const { data: home_pic } = await axios.get(
    'http://localhost:1337/home-picture',
  );

  const { data: blogs } = await axios.get('http://localhost:1337/blogs');

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

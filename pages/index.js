import axios from 'axios';

import Main_section from '../app/components/templates/Main_section/Main_section';

export async function getStaticProps(context) {
  const { data: projects } = await axios.get('http://localhost:1337/projects');

  const { data: home_pic } = await axios.get(
    'http://localhost:1337/home-picture',
  );

  return {
    props: {
      projects,
      home_pic,
    },
  };
}

const Home = ({ projects, home_pic }) => {
  return <Main_section projects={projects} home_pic={home_pic} />;
};

Home.layout = 'L1';

export default Home;

import axios from 'axios';
import Image from 'next/image';

import Btn_linkPage from '../app/components/elements/btn_linkPage/Btn_linkPage';
import { url } from '../config/next.config';

export async function getStaticProps(context) {
  const { data: empty_page } = await axios.get(`${url}/empty-page`);

  return {
    props: {
      empty_page,
    },
  };
}

function Custom404({ empty_page }) {
  return (
    <div className="text-secondaryVeryLight text-center my-10 layout-component xl:text-left">
      <div className="xl:flex xl:items-center">
        <div className="xl:w-2/4">
          <h1 className="text-4xl md:text-5xl xl:text-8xl   font-bold mb-2">{`It's empty here`}</h1>
          <p className="text-xl xl:text-2xl">{`We can't find the page that you are looking for`}</p>
        </div>

        <div className="unset-img xl:w-2/4">
          <Image
            alt={empty_page.page404.name}
            src={url + empty_page.page404.url}
            layout="fill"
            loading="lazy"
            className="custom-img"
          />
        </div>
      </div>

      <Btn_linkPage pageDirection="/">Back to homepage</Btn_linkPage>
    </div>
  );
}

Custom404.layout = 'L2';
export default Custom404;

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps(context) {
  const { data: empty_page } = await axios.get(
    'http://localhost:1337/empty-page',
  );

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
            src={'http://localhost:1337' + empty_page.page404.url}
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>

      <Link href="/">
        <a className="uppercase mt-4 inline-block py-2 px-3 rounded bg-secondaryVeryLight text-secondaryDark hover:bg-secondaryDark hover:text-secondaryVeryLight transition-all duration-300">
          Back to homepage
        </a>
      </Link>
    </div>
  );
}

Custom404.layout = 'L2';
export default Custom404;

import axios from 'axios';
import TitleAnimated from '@/app/components/elements/titleAnimated/TitleAnimated';
import useFormatDate from '@/app/hooks/useFormatDate';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Markdown_text from '@/app/components/modules/markdown_text/Markdown_text';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const { data: blogs } = await axios.get(`${process.env.BACKEND_URL}/blogs`);

  const paths = blogs.map((blog) => {
    return { params: { id: blog.id.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data: blog } = await axios.get(
    `${process.env.BACKEND_URL}/blogs/${params.id}`,
  );

  return {
    props: blog,
  };
};

const Blog_element = (blog) => {
  const [formatedDate] = useFormatDate(blog.date);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <section className="layout-component pb-4">
        <div className="text-neutral">
          <TitleAnimated
            breakText={false}
            text={[blog.title.slice(0, 1).toUpperCase() + blog.title.slice(1)]}
            textSize="text-4xl sm:text-5xl lg:text-6xl"
          />
          <p className="pb-3 pt-2 md:text-lg text-neutralGray">
            {`Written on ${formatedDate === null ? '' : formatedDate} by `}
            <span className="text-secondaryLight">
              <Link href="/about">
                <a>Elvis Miranda</a>
              </Link>
            </span>
          </p>

          <p className="py-2 border-t border-b border-gray-600">
            {blog.description}
          </p>
          <Markdown_text content={blog.content} />
        </div>
        <Link href={`/blog`}>
          <a className="text-secondaryLight hover:text-neutral transition duration-300 mt-8 inline-block">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to blog
          </a>
        </Link>
      </section>
    </>
  );
};

Blog_element.layout = 'L1';

export default Blog_element;

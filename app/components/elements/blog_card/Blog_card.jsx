import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Blog_card = ({ blog, bgColor, textColor, extraStyle = '' }) => {
  const { ref, inView, entry } = useInView();

  const controls = useAnimation();
  if (inView) {
    controls.start({
      x: 0,
      transition: {
        delay: 0.7,
      },
    });
  }

  return (
    <Link passHref={true} href={`/blog/${blog.id}`}>
      <motion.a
        ref={ref}
        whileHover={{
          scale: 1.05,
          translateY: -2,
        }}
      >
        <motion.article
          initial={{
            x: '100vw',
          }}
          animate={controls}
          className={`${bgColor} ${textColor} ${extraStyle} px-3 py-4 rounded-lg cursor-pointer shadow-lg`}
        >
          <div className="flex justify-between">
            <h4 className="text-xl font-semibold sm:text-xl">{blog.title}</h4>
          </div>
          <div className="flex items-center">
            <p>{blog.date}</p>
            <span className="w-1 h-1 rounded-full bg-current mx-1 md:w-2 md:h-2"></span>
            <p className="text-dangerous">{`${blog.time} min read`}</p>
          </div>
          <p className=" pt-2 md:text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
            {blog.description}
          </p>
        </motion.article>
      </motion.a>
    </Link>
  );
};

export default Blog_card;

import ReactMarkdown from 'react-markdown';
import { url } from '../../../../config/next.config';
import Image from 'next/image';

//Change the img label to Image of nextjs
const components = {
  img({ src, alt, ...props }) {
    return (
      <div className="unset-img my-3">
        <Image
          className="custom-img"
          src={src}
          alt={alt}
          layout="fill"
          loading="lazy"
          {...props}
        />
      </div>
    );
  },

  p(props) {
    const element = props.children[0];
    if (typeof element === 'object') {
      if (typeof element.type === 'function') {
        return <div {...props} />;
      }
    }
    return <p {...props} />;
  },
};
const Markdown_text = ({ content }) => {
  return (
    <article className="pt-2 w-full prose lg:prose-lg">
      <ReactMarkdown
        linkTarget="_blank"
        components={components}
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${url}${uri}`
        }
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Markdown_text;

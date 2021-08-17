import Link from 'next/link';
import style from './Btn_link.module.css';

const Btn_linkPage = ({ children, extraStyle, pageDirection }) => {
  return (
    <p className={`relative inline-block z-10`}>
      <Link href={pageDirection} passHref={true}>
        <a
          className={`cursor-pointer  bg-secondaryVeryLight inline-block text-secondaryDark font-semibold rounded-lg px-4 py-2 btn_anime  ${extraStyle}  lg:text-lg relative ${style.btn_link} overflow-hidden shadow-lg`}
        >
          <span className="z-10 relative">{children}</span>
        </a>
      </Link>
    </p>
  );
};

export default Btn_linkPage;

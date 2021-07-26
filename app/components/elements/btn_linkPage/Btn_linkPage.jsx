import Link from 'next/link';

const Btn_linkPage = ({ children, extraStyle, pageDirection }) => {
  return (
    <p>
      <Link href={pageDirection}>
        <a
          className={`bg-secondaryVeryLight cursor-pointer px-3 py-2 inline-block text-secondaryDark font-semibold rounded-lg hover:bg-secondaryDark hover:text-secondaryVeryLight transition-all duration-200 ${extraStyle} lg:text-lg`}
        >
          {children}
        </a>
      </Link>
    </p>
  );
};

export default Btn_linkPage;

import style from './Btn_submit.module.css';

const Btn_submit = () => {
  return (
    <button
      type="submit"
      className={`cursor-pointer  bg-secondaryVeryLight inline-block text-secondaryDark font-semibold rounded-lg px-4 py-1 mt-2  lg:text-lg relative ${style.btn_link} overflow-hidden shadow-lg`}
    >
      <span className="z-10 relative">Submit</span>
    </button>
  );
};

export default Btn_submit;

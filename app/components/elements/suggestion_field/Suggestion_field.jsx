import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import Btn_submit from '../btn_submit/Btn_submit';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Suggestion_field = () => {
  // framer motion control
  const controlField = useAnimation();
  // Framer motion variants
  const variantField = {
    hidden: {
      opacity: 0,
    },
  };
  //Use in view event for show animation when the element is on the view screen
  const { ref, inView, entry } = useInView();
  if (inView) {
    controlField.start({
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1.5,
      },
    });
  }

  console.log(inView);

  //Taking react hooks form variables
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Emailjs Init with user id
  init('user_5nvH1qK0navpC8lqP2DAI');

  //Function will handle the data to send it
  const onSubmit = (data) => {
    sendForm('service_portfolio', 'template_8n1gpgn', '#portfolio_form')
      .then(() => {
        toast.dark('Message Sent 😄!!');
        reset();
      })
      .catch(() => {
        toast.error('Something went wrong 😥');
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.form
        ref={ref}
        className="pt-3"
        id="portfolio_form"
        onSubmit={handleSubmit(onSubmit)}
        initial="hidden"
        animate={controlField}
        variants={variantField}
      >
        <div className="mb-3">
          <label className="md:text-lg">Name</label> <br />
          <input
            className=" rounded bg-neutral text-black p-1 w-full shadow-lg"
            type="text"
            {...register('user_name', {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.user_name && (
            <span className=" p-2 text-white bg-dangerous inline-block mt-1 rounded">
              This field is required
            </span>
          )}
        </div>

        <div>
          <label className="md:text-lg">Suggestion / Feedback</label> <br />
          <textarea
            className="rounded bg-neutral text-black p-1 resize-none w-full shadow-lg"
            type="text"
            rows="5"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className="text-white p-2 bg-dangerous inline-block mt-1 rounded">
              This field is required
            </span>
          )}
        </div>

        <Btn_submit />
      </motion.form>
    </>
  );
};

export default Suggestion_field;

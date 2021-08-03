import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';

const Suggestion_field = () => {
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

      <form
        className="pt-3"
        id="portfolio_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="md:text-lg">Name</label> <br />
          <input
            className=" rounded bg-neutral text-black p-1 w-full"
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
            className="rounded bg-neutral text-black p-1 resize-none w-full"
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

        <input
          type="submit"
          value="Submit"
          className="bg-secondaryVeryLight text-secondaryDark py-1 px-3 font-semibold rounded-lg cursor-pointer mt-4 lg:text-lg hover:bg-secondaryDark hover:text-secondaryVeryLight transition-all duration-200"
        />
      </form>
    </>
  );
};

export default Suggestion_field;

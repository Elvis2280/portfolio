import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { useState } from 'react';

const Suggestion_field = () => {
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
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
    console.log(data);
    sendForm('service_portfolio', 'template_8n1gpgn', '#portfolio_form')
      .then(() => {
        //Show notification depend was success or not for 3 seconds
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 3000);
        reset();
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  return (
    <>
      {notification && (
        <p
          className={` bg-dangerous text-neutral py-1 px-2 rounded-lg mt-2 absolute left-2/4 transform -translate-x-2/4 top-1/4 text-lg text-center`}
        >
          Message sent!! <i className="far fa-laugh-wink"></i>
        </p>
      )}
      {error && (
        <p
          className={` bg-dangerous text-neutral py-1 px-2 rounded-lg mt-2 absolute left-2/4 transform -translate-x-2/4 top-1/4 text-lg text-center ${
            error ? ' inline-block' : 'hidden'
          }`}
        >
          Something went wrong!! <i className="far fa-frown-open"></i>
        </p>
      )}

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

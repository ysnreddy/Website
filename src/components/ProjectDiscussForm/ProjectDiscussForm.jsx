import { useFormik } from "formik";
import { EnquiryFormSchema } from "../../schema/EnquiryFormSchema";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { toast } from "react-toastify";


const ProjectDiscussForm = () => {


  const form = useRef();

  const onSubmit = (values, actions) => {

    localStorage.setItem('formData', JSON.stringify(values));
    
    emailjs.sendForm(
      "service_9ffndeh",
      "template_ye0qeve",
      form.current,
      { publicKey: "p08S3A64_1zXCiGKm" }
    ).then((result) => {
      console.log(result);
      if (result.status === 200) {
        toast.success("Thank you for reaching us, We will contact you soon", {
          position:"top-center"
        })
      }
      actions.resetForm();
    }).catch((error) => {
      console.log(error);
      toast.error("Error in Form Submission!!",{position:"top-center"});
      actions.resetForm();
    })
  }
  
  const { values,errors,touched, handleBlur, handleChange,handleSubmit,isSubmitting} = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      projectdescription:""
    },

    validationSchema: EnquiryFormSchema,

    onSubmit

  });

  return (
    <div
      id="contact"
      className="p-4 flex flex-col gap-4 text-white bg-body md:items-center md:w-[86.5%] md:mx-auto"
    >
      <div className="md:text-center flex flex-col md:gap-2">
        <p><h2 className="text-3xl md:text-4xl">Get Your</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Project Discussed
        </h1></p>
      </div>
      <p className="text-lg  md:w-3/5 md:text-center">
        Have An Idea? Work With Us And See How It Goes. We Promise To Go The
        Extra Mile For Every Project That We Take On Onboard.
      </p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="text-lg md:w-full md:flex md:flex-col md:items-center md:gap-4"
      >
        <div className="md:flex md:gap-8 md:w-4/5 md:justify-center">
          <div className="flex flex-col gap-4 pt-4 md:w-2/5 relative">
            <label htmlFor="firstname">
              First Name<span className="text-primary">*</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              value={values.firstname}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="h-[7vh] border-solid border-2 pl-4 border-gray-600 bg-body"
              placeholder="Enter your first name here"
            />
            {errors.firstname && touched.firstname && (
              <p className="absolute text-primary top-[105%] text-sm">
                {errors.firstname}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 pt-4 md:w-2/5 relative">
            <label htmlFor="lastname">
              Last Name<span className="text-primary">*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              value={values.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="h-[7vh] border-solid border-2 pl-4 border-gray-600 bg-body"
              placeholder="Enter your last name here"
            />
            {errors.lastname && touched.lastname && (
              <p className="absolute text-primary top-[105%] text-sm">
                {errors.lastname}
              </p>
            )}
          </div>
        </div>

        <div className="md:flex md:gap-8 md:w-4/5 md:justify-center">
          <div className="flex flex-col gap-4 pt-4 md:w-2/5 relative">
            <label htmlFor="email">
              Email<span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="h-[7vh] border-solid border-2 pl-4 border-gray-600 bg-body"
              placeholder="Enter your Email here"
            />
            {errors.email && touched.email && (
              <p className="absolute text-primary top-[105%] text-sm">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 pt-4 md:w-2/5 relative">
            <label htmlFor="phone">
              Phone No.<span className="text-primary">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="h-[7vh] border-solid border-2 pl-4 border-gray-600 bg-body"
              placeholder="Enter your Phone No. here"
            />
            {errors.phone && touched.phone && (
              <p className="absolute text-primary top-[105%] text-sm">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4 md:w-[66.5%] relative">
          <label htmlFor="projectdescription">
            Project Description<span className="text-primary">*</span>
          </label>
          <textarea
            name="projectdescription"
            id="projectdescription"
            value={values.projectdescription}
            onChange={handleChange}
            cols="30"
            rows="30"
            className="h-[15vh] border-solid border-2 p-4 border-gray-600 bg-body md:h-[20vh]"
            placeholder="Tell us about your project"
          />
          {errors.projectdescription && touched.projectdescription && (
            <p className="absolute text-primary top-[105%] text-sm">
              {errors.projectdescription}
            </p>
          )}
        </div>
        <div className="flex justify-center pt-8 md:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-medium text-white cursor-pointer text-xl bg-primary h-12 w-52 hover:
          transition duration-500 ease-out hover:bg-white hover:text-primary "
          >
            {isSubmitting ? "Processing..." : "Let's Connect"}
          </button>

         
        </div>
        <div>Or</div>
        <div>
        <p class="text-xl  text-white transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary">Call us at <a href="tel:+1234567890" class="underline">+1234567890</a></p>
   
          </div>
      </form>
    </div>
  );
};

export default ProjectDiscussForm;

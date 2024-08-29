import { Mutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const feadback = object({
  name: string({
    required_error: "*Please write your name",
  }),
  email: string({
    required_error: "*Please write your email",
  }),
  message: string({
    required_error: "*please write your message",
  }),
});

export const Contact = () => {
  return (
    <div>
      <span className="text-center">
        <h1 className="font-extrabold text-[3rem]">Contact Us</h1>
        <p className="text-[1.5rem]">
          Feel free to contact us if you got any question, suggestion or
          feadback.
        </p>
      </span>
      <div className="flex">
        <div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={async (value, { resetForm }) => {
              await Mutation.mutateAsync({
                name: value.name,
                email: value.email,
                message: value.message,
              });
              resetForm();
            }}
            validationSchema={toFormikValidationSchema(feadback)}
          >
            {({ errors }) => {
              return (
                <Form>
                  <div className="m-5">
                    <div>
                      <label htmlFor="">Name:</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="User Name"
                        className="rounded-lg w-96 block border border-black p-2 bg-transparent"
                      />
                      {!!errors.name && (
                        <div className="text-red-500 pt-2">{errors.name}</div>
                      )}
                    </div>
                    <div className="mt-3">
                      <label htmlFor="">Email:</label>
                      <Field
                        type="text"
                        name="email"
                        placeholder="User Email"
                        className="rounded-lg w-96 block border border-black p-2 bg-transparent"
                      />
                      {!!errors.email && (
                        <div className="text-red-500 pt-2">{errors.email}</div>
                      )}
                    </div>
                    <div className="mt-3">
                      <label htmlFor="">Message:</label>
                      <Field
                        type="text"
                        name="message"
                        placeholder="your message"
                        className="rounded-lg w-96 h-60 block border border-black p-2 bg-transparent"
                      />
                      {!!errors.message && (
                        <div className="text-red-500 pt-2">
                          {errors.message}
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-slate-600 mt-5 px-4 py-2 rounded-md text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="flex justify-center w-full m-5">
          <div className="grid grid-cols-2 grid-rows-2 w-96 h-52">
            <div className="pr-2 m-3">
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="inline-block mr-5 text-6xl rounded-2xl text-white bg-gradient-to-r from-[#ca1d8e] via-[#e27e1a] to-[#e91f1fdd]" />
                Instagram
              </a>
            </div>
            <div className="pr-2 m-3">
              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="inline-block mr-5 text-6xl text-[#1943cd]" />
                Facebook
              </a>
            </div>
            <div className="pr-2 m-3">
              <a href="https://x.com" target="_blank">
                <FaXTwitter className="inline-block mr-5 text-6xl text-white bg-black" />
                X/Twitter
              </a>
            </div>
            <div className="pr-2 m-3">
              <a href="https://youtube.com" target="_blank">
                <FaYoutube className="inline-block mr-5 p-3 text-6xl text-white bg-[#dd1a10] rounded-2xl" />
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

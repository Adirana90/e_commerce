import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { object, string, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

// Define the schema using Zod
const Schema = object({
  title: string({
    required_error: "*Please enter a title",
  }),
  price: string({
    required_error: "*Please enter a price",
  }),
  description: string({
    required_error: "*Please enter a description",
  }),
  image: string({
    required_error: "*Image is required",
  }),
  category: z.string().min(3, "*Category must be at least 3 characters long"),
});

// This is the function that will add product;
const addProduct = async (product) => {
  try {
    const fetchData = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!fetchData.ok) {
      throw new Error("Network response was not ok");
    }
    return fetchData.json();
  } catch (errors) {
    console.error(errors);
  }
};
export const AddproductForm = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("product add successfully", data);
      alert("product add succssfully");
      client.invalidateQueries(string["getProducts"]);
    },
    onError: (error) => {
      console.log("Something went wrong", error);
      alert("Something went wrong");
    },
  });
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            image: "",
            category: "",
          }}
          onSubmit={async (value, { setSubmitting }) => {
            await mutation.mutateAsync({
              title: value.title,
              price: Number(value.price),
              description: value.description,
              image: value.image,
              category: value.category,
            });
          }}
          validationSchema={toFormikValidationSchema(Schema)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label className="text-md font-semibold text-black">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  className="rounded-lg w-full border border-black p-2"
                />
                <ErrorMessage
                  className="text-red-600"
                  name="title"
                  component="div"
                />
              </div>
              <div className="mt-4">
                <label className="text-md font-semibold text-black">
                  Price
                </label>
                <Field
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  className="rounded-lg w-full border border-black p-2"
                />
                <ErrorMessage
                  className="text-red-600"
                  name="price"
                  component="div"
                />
              </div>
              <div className="mt-4">
                <label className="text-md font-semibold text-black">
                  Description
                </label>
                <Field
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  className="rounded-lg w-full border border-black p-2"
                />
                <ErrorMessage
                  className="text-red-600"
                  name="description"
                  component="div"
                />
              </div>

              <div className="mt-4">
                <label className="text-md font-semibold text-black">
                  Image
                </label>
                <Field
                  type="text"
                  name="image"
                  placeholder="Enter image"
                  className="rounded-lg w-full border border-black p-2"
                />
                <ErrorMessage
                  className="text-red-600"
                  name="image"
                  component="div"
                />
              </div>

              <div className="mt-4">
                <label className="text-md font-semibold text-black">
                  Category
                </label>
                <Field
                  type="text"
                  name="category"
                  placeholder="Enter category"
                  className="rounded-lg w-full border border-black p-2"
                />
                <ErrorMessage
                  className="text-red-600"
                  name="category"
                  component="div"
                />
              </div>
              <button
                className="bg-transparent border-2 border-black rounded-xl px-5 py-2 mt-5"
                type="submit"
                disabled={isSubmitting}
              >
                submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

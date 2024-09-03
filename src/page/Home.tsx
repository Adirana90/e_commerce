import React from "react";
import { useEffect, useState } from "react";
import { AddproductForm } from "../form/addProduct";
import { Modal } from "../components/modal";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { ErrorMessage, Field, Form, Formik } from "formik";

interface isHome {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

// fatching data
export const Home = () => {
  const [data, setData] = useState<isHome[]>([]);
  const [update, setUpdate] = useState<isHome | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchProduct = await fetch("https://fakestoreapi.com/products");
        if (fetchProduct.ok) {
          const jsonData = await fetchProduct.json();
          setData(jsonData);
          //   console.log(data);
        } else {
          console.error();
          ("failed to fetch data");
          alert("failed to fetch data");
        }
      } catch (errors) {
        console.error("something went wrong", errors);
      }
    };
    fetchData();
  }, []);

  const deleteData = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    setData(data.filter((value) => value.id !== id));
  };

  const updateData = async (dataToUpdate) => {
    await fetch(`https://fakestoreapi.com/products/${dataToUpdate.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToUpdate),
    });
    setData(
      data.map((item) => (item.id === dataToUpdate.id ? dataToUpdate : item))
    );
    setUpdate(null);
    setOpenModal(false);
  };
  const editButton = (product) => {
    if (product) {
      setUpdate(product);
      setOpenModal(true);
    } else {
      console.error("product is undefined or null");
    }
  };

  //   for modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="flex justify-center mt-5 mb-40">
        <img className="w-[1000px]" src="../../public/offer.png" alt="" />
      </div>

      {/* adding product using modal */}
      <div>
        <button
          className="bg-[#bcc1c1] px-5 py-2 ml-5 rounded-xl hover:bg-transparent border-2 hover:border-black hover:shadow-md hover:shadow-slate-600 transition-all"
          onClick={() => setOpenModal(true)}
        >
          Add product
        </button>
        {openModal && !update ? (
          <Modal>
            <div className="bg-white w-full rounded-md p-4">
              <div className="flex justify-end">
                <button onClick={() => setOpenModal(false)}>
                  <RiCloseCircleLine />
                </button>
              </div>
              <AddproductForm />
            </div>
          </Modal>
        ) : null}
      </div>

      {update && (
        <Modal>
          <div className="bg-white w-full rounded-md p-4">
            <div className="flex justify-end">
              <button>
                <RiCloseCircleLine onClick={() => setOpenModal(false)} />
              </button>
            </div>
            <h2>Edit Product</h2>
            <Formik
              initialValues={{
                title: update.title,
                price: update.price,
                image: update.image,
              }}
              validate={(values) => {
                const errors: { title?: string; price?: string } = {};
                if (!values.title) {
                  errors.title = "Title is required";
                }
                if (!values.price) {
                  errors.price = "Price is required";
                }
                return errors;
              }}
              onSubmit={(values) => {
                const updatedProduct = {
                  ...update,
                  ...values,
                };
                updateData(updatedProduct);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <Field
                      type="text"
                      name="title"
                      placeholder="Product Title"
                      className="block w-full p-2 border rounded"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="price"
                      placeholder="Product Price"
                      className="block w-full p-2 border rounded mt-2"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      className="block w-full p-2 border rounded mt-2"
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                  >
                    Update Product
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 m-5">
        {data.map((item: isHome) => {
          return (
            <div
              className="border-2 border-black hover:shadow-lg hover:shadow-slate-600 transition ease-out duration-300 rounded-2xl cursor-pointer bg-white"
              key={item.id}
            >
              <div className="flex justify-between">
                <MdCancel
                  className="text-3xl ml-1 mt-1"
                  onClick={() => deleteData(item.id)}
                />
                <IoAdd
                  className="text-3xl ml-1 mt-1"
                  onClick={() => editButton(item)}
                />
              </div>
              <div>
                <img
                  className="h-[300px] m-auto rounded-3xl"
                  src={item.image}
                  alt="image of item"
                />
                <h1 className="font-[700] text-[20px] mx-3">{item.title}</h1>
                <p className="font-[800] m-2 text-[25px]">${item.price}</p>
                {/* <p className="text-center">{item.description}</p> */}
                <p className="m-2 text-zinc-700">
                  rating: {item.rating.rate} ({item.rating.count})
                </p>
                <div className="flex justify-between">
                  <button className="bg-[#acc9ec] px-5 py-2 ml-5 mb-5 rounded-xl hover:bg-[hsl(32,92%,60%)] transition-all">
                    Buy Now
                  </button>
                  <button className="bg-[#e57e09] px-5 py-2 mr-5 mb-5 rounded-xl hover:bg-[hsl(32,92%,60%)] transition-all">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

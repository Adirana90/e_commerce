// THIS CURRENTLY DOES NOT WORK. MAYBE SOMETHING IS WORNG WHILE EXPORTING
// WILL TRY TO FIXED IT LATER...MAYBE.
// 404

import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

export const DeleteProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const deleteData = async (id) => {
      try {
        await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        });
        setData(data.filter((value) => value.id !== id));
      } catch (errors) {
        console.error(errors);
      }
    };
    deleteData();
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <MdCancel
              className="text-black bg-black w-full"
              onClick={() => DeleteProduct(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

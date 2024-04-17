import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import {useNavigate} from "react-router-dom"

const Create = () => {
const navigate =  useNavigate()
  const [Product, setProduct] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, settitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
    }

    const products = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    console.log(Product);
    setProduct([...Product,products]);
    localStorage.setItem("Product",JSON.stringify([...Product,products]))
    navigate("/")
  };

  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="flex flex-col  justify-center items-center w-screen h-screen "
      >
        <h1 className="text-5xl font-mono font-black  ">Add New Product</h1>

        <input
          type="url"
          placeholder="Image URL"
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="Title"
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <div className="flex w-1/2 gap-2">
          <input
            type="text"
            placeholder="Category"
            className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="Price"
            className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          type="text"
          placeholder="Enter a product description here."
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          rows="5"
        >
          {" "}
        </textarea>

        <div className="w-1/2">
          <button className="font-bold border-2 border-blue-400 text-sky-400 p-2 m-2 rounded-md hover:bg-blue-400 hover:text-white">
            Done
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;

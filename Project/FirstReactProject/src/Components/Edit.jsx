import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [Product, setProduct] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [Products, setProducts] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
      setProducts ({...Products,[e.target.name] :e.target.value})  
};
//   const [image, setImage] = useState("");
//   const [title, settitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");


  useEffect(() => {
    setProducts(Product.filter((p) => p.id == id)[0]);
  }, [id]);
  console.log(Product);

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      Products.title.trim().length < 5 ||
      Products.image.trim().length < 5 ||
      Products.category.trim().length < 5 ||
      Products.price.trim().length < 1 ||
      Products.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
    }

    const products = {
      // id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    console.log(Product);
    setProduct([...Product, products]);
    localStorage.setItem("Product", JSON.stringify([...Product, products]));
    navigate("/");
  };

  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="flex flex-col  justify-center items-center w-screen h-screen "
      >
        <h1 className="text-5xl font-mono font-black  ">Edit Product</h1>

        <input
          type="url"
          placeholder="Image URL"
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          name="name"
          onChange={changeHandler}
          value={Products && Products.image}
        />
        <input
          type="text"
          placeholder="Title"
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          name="title"
          onChange={changeHandler}
          value={Products && Products.title}
        />
        <div className="flex w-1/2 gap-2">
          <input
            type="text"
            placeholder="Category"
            className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
            name="category"
            onChange={changeHandler}
            value={Products && Products.category}
          />
          <input
            type="number"
            placeholder="Price"
            className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
            name="price"
            onChange={changeHandler}
            value={Products && Products.price}
          />
        </div>
        <textarea
          type="text"
          placeholder="Enter a product description here."
          className="text-2xl bg-zinc-200 mt-4 p-2 font-semibold  w-1/2 rounded-lg "
          name="description"
          onChange={changeHandler}
          value={Products && Products.description}
          rows="5"
        ></textarea>

        <div className="w-1/2">
          <button className="font-bold border-2 border-blue-400 text-sky-400 p-2 m-2 rounded-md hover:bg-blue-400 hover:text-white">
            Add New Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;

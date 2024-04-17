import React from "react";
import Product from "./Product";

const Products = () => {
  let products = [
    {
      live: true,
      case: false,
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      live: true,
      case: false,
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      live: true,
      case: false,
      title: "Layout Land",
      description:
        " An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      live: true,
      case: false,
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    {
      live: true,
      case: false,
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
    {
      live: true,
      case: false,
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.,",
    },
    {
      live: true,
      case: true,
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    },
    {
      live: true,
      case: true,
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
    },
    {
      live: true,
      case: true,
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    },
    {
      live: true,
      case: false,
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    },
    {
      live: true,
      case: true,
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
    },
    {
      live: true,
      case: true,
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
    },
  ];
  return (
    <> 
      <div className="bg-zinc-900">
        {products.map((elem, index) => (
          <Product val={elem} key={index} />
        ))}

      </div>
    </>
  );
};

export default Products;

import React from "react";
import Heading from "../heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../button/Button";
import {Link} from "react-router-dom"

const Category = () => {
  const renderCards = category.map((card) => {
    return (
        // card
      <div className="flex-1 basis-[300px]" key={card.id}>
        {/* card Image */}
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} alt="" className="absolute bottom-0 " />
        </div>

        {/* card Contents */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link to="/fruits" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 hover:cursor-pointer transition-all duration-300 ">See All</Link>
          {/* <Button content="See All" /> */}
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading spans="Shop" remain="by Category" />

        {/* category cart */}
        <div className="flex flex-wrap gap-10 md:mt-15 mt-">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];

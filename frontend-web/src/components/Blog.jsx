import React from "react";
// import { BlogPage } from '../data/blog'
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
const Blog = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <>

      <div className="flex flex-col justify-center items-center w-[70%]  gap-9 mx-auto md:text-[3rem] mt-5">
          <h1 className="text-[2.5rem] text-center">News Articles</h1>
          <p className="md:w-[80%] text-justify w-full md:mx-auto md:text-center md:text-xl"> We publish a variety of news stories and press releases to keep you informed about Red Cross activities, from the ways we deliver on our mission, to the impact of our work on everyday lives. Read the latest!</p>
      </div>


      <div className="md:grid md:grid-cols-3 md:grid-flow-row md:gap-0 md:w-[80%] md:mx-auto md:mb-10">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => navigate(`/blogdetail/${card.id}`)}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;

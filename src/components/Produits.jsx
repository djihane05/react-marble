
import React,{ useState } from "react";
import Categories from "./Categories";
import { data } from "./data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
function Produits() {
    
  const [project,setMenuProject]=useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuProject(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuProject(newItems);
  };
 
  return (
    <div name ="produits" className='bg-[#071807] w-full    '>
<h1 className='text-white text-3xl flex justify-center font-bold  p-4 border-b-2 border-[#994d00] '>Nos Produits</h1>
<Categories filterItems={filterItems} categories={categories} />
<div className=" p-8 grid  sm:grid-cols-4 md:grid-cols-5 gap-4">
          
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image}) `,backgroundSize:"cover", }}
    className="shadow-lg shadow-[#040c16]  container rounded-md  
    flex justify-center w-40 h-[100px] text-center items-center mx-auto text-white hover:scale-110 duration-500  ">
      <div className='bg-black bg-opacity-40 text-white px-0.5 font-bold' >
{item.name}
</div>  
</div>))}
   </div>
  
  </div>
  )
}

export default Produits
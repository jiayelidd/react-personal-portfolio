import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Food Order Page",
      desc:
        "This is my ordering app demo for a website that I am building. I has the feature to store order food into the trolly.",
      img:
        "../../assets/FoodOrder.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Restaurant Page",
      desc:
        "This website is my first ever Bootstrap based website, It has an responsive design which will adjust its layout based on screen.",
      img:
        "../../assets/Restaurant.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Shopping List",
      desc:
        "Shooping list is my first ever React project.",
      img:
        "../../assets/shoppingList.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id="works">
      {/*这里每一个slide都已经有了，但是是横向排列的，一个slide占了一整页，所以不显示*/}
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}

      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  )
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Doc1 from "../Images/Doc's Images/169671343ef815d20808e6c9e43c5c19.jpg";
import Doc2 from "../Images/Doc's Images/1b52fd81c2282b432b85dc6a8a01f13d.jpg";
import Doc3 from "../Images/Doc's Images/20322e78cd112ee1f6bcc9dbb75c41ff.jpg";

export default function Review() {
  const data = [
    { image: Doc1, name: "John Deo", rating: 3 },
    { image: Doc2, name: "Mary Deo", rating: 4.5 },
    { image: Doc3, name: "Jerry Deo", rating: 4 },
  ];
  function StarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={faStar} className="text-white" />);
      } else if (i - rating === 0.5) {
        stars.push(
          <FontAwesomeIcon icon={faStarHalfStroke} className="text-white" />
        );
      } else {
        stars.push(
          <FontAwesomeIcon icon={faStarRegular} className="text-white" />
        );
      }
    }
    return <div>{stars}</div>;
  }
  return (
    <div className="lg:h-screen bg-gray-100 max-lg:pb-5" id="review">
      <h2 className="text-center text-6xl font-black text-shadow pt-7 mb-5">
        Client's <span className="text-primary">Review</span>
      </h2>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 md:px-2 lg:px-16 lg:gap-8 xl:px-32 xl:gap-16">
        {data.map((item) => (
          <div className="border-2 border-primary rounded-md max-sm:m-5 max-md:m-9">
            <div className="bg-primary flex flex-col items-center py-5 rounded-b-[49%]">
              <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={item.image}
                  alt="Doctor Pic"
                  className="object-fill"
                />
              </div>
              <p className="text-xl text-center font-bold text-white">
                {item.name}
              </p>
              <p className="text-center">
                {StarRating({ rating: item.rating })}
              </p>
            </div>
            <p className="text-center mx-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ducimus delectus neque soluta voluptatum quidem sequi ad nihil
              amet illo. Vitae porro iste corrupti magni quia doloremque nihil
              rerum aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Cupiditate fuga nostrum, vel, ducimus ad possimus quod
              debitis quaerat facere quidem esse ipsa culpa animi dolore
              voluptate obcaecati, placeat reprehenderit accusamus Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Quos sunt commodi
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

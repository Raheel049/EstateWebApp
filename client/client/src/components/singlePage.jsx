import { useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const SinglePageItem = () => {

  const { id } = useParams();

  // later backend se fetch kar lena
  const [userHouse, setUserHouse] = useState("")

  const getUserHouseDetails = async () => {
    const res = await apiRequest.get(`/post/${id}`)
    console.log(res.data)
    setUserHouse(res.data)
  }

  const item = {
    title: userHouse.title,
    price: userHouse.price,
    imges: 
    address: "Karachi",
    bedroom: 2,
    bathroom: 1,
    description: "Luxury apartment in Karachi",
  };

  return (
    <div className="singlePage">

      <div className="left">

        <div className="images">

          <img
            className="mainImage"
            src={item.imges[0]}
            alt=""
          />

          <div className="smallImages">

            {item.imges.map((img, index) => (
              <img src={img} key={index} alt="" />
            ))}

          </div>
        </div>

        <h1>{item.title}</h1>

        <p>{item.address}</p>

        <span>${item.price}</span>

        <p>{item.description}</p>

      </div>

      <div className="right">

        <div>🛏 {item.bedroom} bedroom</div>

        <div>🛁 {item.bathroom} bathroom</div>

      </div>

    </div>
  );
};

export default SinglePageItem;
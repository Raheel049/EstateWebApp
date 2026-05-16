import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/property/${item._id}`} className="card">

      <img src={item.imges[0]} alt="" />

      <div className="textContainer">

        <h2>{item.title}</h2>

        <p>{item.address}</p>

        <span>${item.price}</span>

        <div className="bottom">

          <div className="feature">
            🛏 {item.bedroom} bedroom
          </div>

          <div className="feature">
            🛁 {item.bathroom} bathroom
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Card;
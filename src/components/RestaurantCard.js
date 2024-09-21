import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-2 p-2 w-[250px] bg-gray-100 rounded-lg lg:hover:bg-green-200 transition-all sm:hover:bg-yellow-200">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4 className="avg-rating">
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price">
          <span style={{ marginLeft: "4px" }}></span>
          <span>{costForTwo}</span>
        </h4>
        <h4 className="time">
          <span>{sla.deliveryTime} minutes</span>
        </h4>
        <h4> User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

//hoc

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    console.log(props);
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
      resData?.info;
    const { deliveryTime } = resData?.info?.sla ;
    console.log("resData:", resData);
    return (
      <div className="res-card">
        <img
          alt="res-image"
          className="res-image"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
        ></img>
        <p>{name} </p>
        <p>{cuisines.join(",")} </p>
        <p>{costForTwo} </p>
        <p>{avgRating} </p>
        <p>{deliveryTime} minutes </p>
      </div>
    );
  };

  export default RestaurantCard;
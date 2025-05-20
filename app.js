import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="flex-child logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/aa2250f4-9b3d-4df1-a58d-276d36cc813e_5938.jpg"
        ></img>
      </div>

      <div className="flex-child nav-items">
        <ul className="list-style">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

const resList = [
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "3241",
          "name": "Meghana Foods",
          "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
          "locality": "Residency Road",
          "areaName": "Residency Road",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
          ],
          "avgRating": 4.7,
          "parentId": "635",
          "avgRatingString": "4.7",
          "totalRatingsString": "84K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-18 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "21K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/meghana-foods-residency-road-rest3241",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "102334",
          "name": "Dindigul Thalappakatti",
          "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
          "locality": "Mg Road",
          "areaName": "Indiranagar",
          "costForTwo": "₹650 for two",
          "cuisines": [
              "Biryani",
              "Barbecue",
              "South Indian",
              "Chinese",
              "North Indian"
          ],
          "avgRating": 4.4,
          "parentId": "332",
          "avgRatingString": "4.4",
          "totalRatingsString": "9.3K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-18 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-mg-road-indiranagar-rest102334",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "405798",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Malleshwaram",
          "areaName": "Malleshwaram",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "61955",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.4K+",
          "sla": {
              "deliveryTime": 62,
              "lastMileTravel": 6,
              "serviceability": "SERVICEABLE",
              "slaString": "60-65 mins",
              "lastMileTravelString": "6.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-18 22:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.5",
                  "ratingCount": "65"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "5938",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/aa2250f4-9b3d-4df1-a58d-276d36cc813e_5938.jpg",
          "locality": "Tasker Town",
          "areaName": "Shivaji Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.4,
          "parentId": "166",
          "avgRatingString": "4.4",
          "totalRatingsString": "38K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-19 04:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹139"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "10575",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/5c424dcc-2417-4679-a8f0-659c9e4aa5c1_10575.jpg",
          "locality": "Richmond Town",
          "areaName": "Central Bangalore",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-19 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "1.9K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-central-bangalore-rest10575",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "23847",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/23f109d4-5a1c-4b5c-be08-47be37d366c2_23847.JPG",
          "locality": "MG Road",
          "areaName": "Brigade Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "2456",
          "avgRatingString": "4.4",
          "totalRatingsString": "6.0K+",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-18 22:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹119"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "4.9K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "396748",
          "name": "The Good Bowl",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2385f59d-92c8-46fb-9bab-e370e61bc197_396748.jpg",
          "locality": "Residency Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Biryani",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "7918",
          "avgRatingString": "4.4",
          "totalRatingsString": "923",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-18 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "ABOVE ₹1000",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-residency-road-central-bangalore-rest396748",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "847260",
          "name": "Kwality Walls Ice Cream and More",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/f571f8d2-2d3c-484b-9046-2a770ae4820c_847260.JPG",
          "locality": "Bharati Nagar",
          "areaName": "Central Bangalore",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "582",
          "avgRatingString": "4.7",
          "totalRatingsString": "177",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-19 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹49"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-210a5180-97b0-4e78-82ad-2a023232740a"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-bharati-nagar-central-bangalore-rest847260",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <label>
          Search: <input name="mySearch" />
        </label>
      </div>
      <div className="res-container">
        {resList.map((restaurant) =>(
          <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
        ))}
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// <div id ="root">
//<h1>
// Hello World From React !
// </h1>
// </div>

// Below code will be used for injecting the heading tag inside div which has id 'root' using REACT library.
//const  reactHeading = React.createElement('h1', {}, "Hello World from React !");

//console.log(reactHeading); //It is an object

//const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

//reactRoot.render(reactHeading);  // render method is taking the object and converting it into HTML tag and attaching that HTML inside div named as root

// <div id ="root">
//<h1 id= 'heading' xyz=''abc> Hello World from React !</h1>
// </div>

//const  reactHeadingWithAttribute = React.createElement('h1', {id: 'heading', xyz: 'abc' }, "Hello World from React !");

//const reactRootForHeadingAttribute = ReactDOM.createRoot(document.getElementById('root'));

//reactRootForHeadingAttribute.render(reactHeadingWithAttribute);

//<div id="parent">
// <div id= "child">
// <h1>
// I am an H1 tag       //Example 2
// </h1>
// </div>
// </div>

//<div id="parent">
// <div id= "child">
// <h1>
// I am an H1 tag       //Example 3
// </h1>
// <h2>  I am an H2 Tag </h2>
// </div>
// </div>

//Example 4
//<div id="parent">
// <div id= "child">
// <h1>
// I am an H1 tag
// </h1>
// <h2>  I am an H2 Tag </h2>

//<div id= "child2">
// <h1>
// I am an child2H1 tag
// </h1>
// <h2>  I am an child2H2 Tag </h2>
// </div>
// </div>

//*************************

//Example 2
//const parent2 = React.createElement("div", {id: 'parent'}, React.createElement("div", {id: "child"}, React.createElement('h1', {}, 'I am an H1 tag')))

//   console.log(parent);// So basically parent 2 is an React Element  which is ultimately an object

//      const commonroot = ReactDOM.createRoot(document.getElementById("root"));

//    commonroot.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present
//in the DOM.

//Example 3

//const parent = React.createElement("div", {id: 'parent'}, React.createElement("div", {id: "child"},[React.createElement('h1', {}, 'I am an H1 tag'),React.createElement('h2', {}, 'I am an H2 tag')] ))

//    console.log(parent);// So basically heading is an object which is ultimately an React Element

//      const root = ReactDOM.createRoot(document.getElementById("root"));

//        root.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present
//in the DOM.
//                         *******************************************************************************//

//Example 4
// const parent = React.createElement("div", {id: 'parent'}, [React.createElement("div", {id: "child"},[React.createElement('h1', {}, 'I am an H1 tag'),React.createElement('h2', {}, 'I am an H2 tag')] ),React.createElement("div", {id: "child2"},[React.createElement('h1', {}, 'I am an child2H1 tag'),React.createElement('h2', {}, 'I am an child2H2 tag')] )] )

// console.log(parent);// So basically heading is an object which is ultimately an React Element

//   const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present
//in the DOM.

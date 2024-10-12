import './App.css';

const Title= () => (
    <img className='logo'
    alt="logo"
    src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"
></img>);

function Header(){
  return(
    <div className='header'>
      
      <Title/>
      <div className='nav-item'>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About</li>
        </ul>     
      </div>
    </div> 
);} 
const resturauntList=[{
  "info": {
    "id": "62763",
    "name": "Biryani Zest",
    "cloudinaryImageId": "aql3oegyi6gvxvi6ym9u",
    "locality": "Whitefield",
    "areaName": "Whitefield (Kadugodi)",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian",
      "Tandoor"
    ],
    "avgRating": 4.3,
    "parentId": "387218",
    "avgRatingString": "4.3",
    "totalRatingsString": "18K+",
    "promoted": true,
    "adTrackingId": "cid=19627797~p=1~adgrpid=19627797#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=62763~eid=dac3c1e9-65aa-4bef-a5ae-789259a02a96~srvts=1728717166987~collid=111664",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3.7,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-12 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "6.4K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "19627797"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=62763",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "96510",
    "name": "Potful - Claypot Biryanis",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/13/3e5b49c8-a116-414f-98e4-2c74b45ec72c_96510.jpg",
    "locality": "Arya Hub mall",
    "areaName": "Whitefield",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Mughlai",
      "Kebabs",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "160121",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 64,
      "lastMileTravel": 3.7,
      "serviceability": "SERVICEABLE",
      "slaString": "60-65 mins",
      "lastMileTravelString": "3.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-13 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "brand",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "shortDescription": "brand",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "description": ""
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=96510",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "172459",
    "name": "Haveli Hyderabadi Dum Biriyani",
    "cloudinaryImageId": "eybisik7lcyhljmkujx6",
    "locality": "Whitefield",
    "areaName": "Kadugodi",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Indian",
      "Biryani"
    ],
    "avgRating": 4.3,
    "parentId": "94514",
    "avgRatingString": "4.3",
    "totalRatingsString": "3.2K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 1.7,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "1.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-12 22:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "544"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=172459",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},         {
  "info": {
    "id": "375063",
    "name": "Andhra Gunpowder",
    "cloudinaryImageId": "fyqerxszkyhxfekkyriy",
    "locality": "Seegehalli",
    "areaName": "Kadugodi",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 4.4,
    "parentId": "10496",
    "avgRatingString": "4.4",
    "totalRatingsString": "4.8K+",
    "promoted": true,
    "adTrackingId": "cid=19093175~p=4~adgrpid=19093175#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375063~eid=0ffcdcc5-3b52-4d60-91ca-eda0f9ed261e~srvts=1728717166987~collid=111664",
    "sla": {
      "deliveryTime": 37,
      "lastMileTravel": 4.4,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "4.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-13 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Andhra.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "Rxawards/_CATEGORY-Andhra.png",
                "description": "Delivery!"
              }
            }
          ]
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹269"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "19093175"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=375063",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "699448",
    "name": "Advaita Restaurant",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/2522134a-d392-4f4d-a0a9-7c95ec0790c3_699448 SS.jpg",
    "locality": "Whitefield",
    "areaName": "Whitefield",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Biryani",
      "South Indian",
      "Chinese",
      "North Indian",
      "Tandoor",
      "Thalis"
    ],
    "avgRating": 4.3,
    "parentId": "418032",
    "avgRatingString": "4.3",
    "totalRatingsString": "3.2K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-12 16:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "679"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=699448",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "673436",
    "name": "Kitchen County",
    "cloudinaryImageId": "283455b07061ad9db8f84f92e22dd756",
    "locality": "Whitefield",
    "areaName": "Whitefield",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Chinese",
      "North Indian",
      "Tandoor"
    ],
    "avgRating": 4.2,
    "parentId": "119044",
    "avgRatingString": "4.2",
    "totalRatingsString": "589",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 1.6,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "1.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-12 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "344"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=673436",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "221738",
    "name": "Meghana Foods",
    "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
    "locality": "Brookefields",
    "areaName": "Brookefield",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "Chinese",
      "Seafood"
    ],
    "avgRating": 4.5,
    "parentId": "635",
    "avgRatingString": "4.5",
    "totalRatingsString": "78K+",
    "promoted": true,
    "adTrackingId": "cid=19632563~p=5~adgrpid=19632563#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=221738~eid=af9539e8-4de1-4060-a7ae-6b61bc8875c0~srvts=1728717166987~collid=111664",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 9.5,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "9.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-13 01:30:00",
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
    "select": true,
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                "description": "Delivery!"
              }
            }
          ]
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "3.1",
        "ratingCount": "209"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "19632563"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=221738",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "408",
    "name": "Alpha Biryani",
    "cloudinaryImageId": "1bd53bdc933dcc4125c925e135dbe874",
    "locality": "Whitefield",
    "areaName": "Whitefield",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Biryani",
      "Arabian",
      "Chinese",
      "Tandoor",
      "Andhra",
      "Sweets",
      "Desserts",
      "Indian",
      "Punjabi",
      "Seafood"
    ],
    "avgRating": 4,
    "parentId": "11357",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "2.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-13 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=408",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
},
{
  "info": {
    "id": "634181",
    "name": "Thalassery Restaurant",
    "cloudinaryImageId": "fx9l6hlnr1qzlwfzalr5",
    "locality": "Prashanth Layout",
    "areaName": "Whitefield",
    "costForTwo": "₹450 for two",
    "cuisines": [
      "Kerala",
      "South Indian",
      "Chinese"
    ],
    "avgRating": 4.2,
    "parentId": "14391",
    "avgRatingString": "4.2",
    "totalRatingsString": "4.9K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-12 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textBased": {
          
        },
        "imageBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=634181",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  }
}]

const ResturauntCard=(props)=>{
  const { resturaunt } = props;
  console.log(props)
  return(
      <div className='card'>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${resturaunt.cloudinaryImageId}`}
            alt="food"
          />
          <h2>{resturaunt.name}</h2>
          <h3>{resturaunt.cuisines.join(', ')}</h3>
          <h4>Rating: {resturaunt.avgRating}</h4>
     </div>
  )
}

const Body=()=>{
  return(
    <div className='body'>
      {resturauntList.map((resturaunt) => (
        <ResturauntCard key={resturaunt.id} resturaunt={resturaunt.info} />
      ))}
    </div>
  );
}

function Footer(){
  return(
    <h4>
      {resturauntList[0].data?.info}</h4>
  );
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;


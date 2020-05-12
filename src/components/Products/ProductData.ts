import moment from "moment";
import {ProductType} from "./ProductTypes";

const ProductData: Array<ProductType> = [
    {
        "id" : 1,
        "name": "Wireless headphones",
        "image": "https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589218153/samples/products/Wireless-headphones_vxnlz2.jpg",
        "desc": "Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh",
        "likes": 4,
        "comments": [
            {
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                
                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                
            },
            {
                
                "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        "created": moment.utc("2020-03-25").toDate()
    },
    {
        "id" : 2,
        "name": "Round white watch with white band",
        "image": "https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589218152/samples/products/White-watch_n3ansu.jpg",
        "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "likes": 10,
        "comments": [
            {
                
                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                
            },
            {
                
                "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        "created": moment.utc("2020-04-10").toDate()
    },
    {
        "id" : 3,
        "name": "Unpaired maroon plimsoll on top of yellow textile",
        "image": "https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589218152/samples/products/Maroon-plimsoll_i8lhlr.jpg",
        "desc": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "likes": 5,
        "comments": [
            {
                "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            }
        ],
        "created": moment.utc("2020-04-15").toDate()
    },
    {
        "id" : 4,
        "name": "Beige wooden bar stool",
        "image": "https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589218152/samples/products/Wooden-stool_bex90w.jpg",
        "desc": "Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh Lorem ipsum dolor amet post-ironic four dollar toasts selvage meh",
        "likes": 20,
        "comments": [
            {
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                
                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                
            },
            {
                
                "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                
                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                
            },
            {
                
                "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        "created": moment.utc("2020-04-20").toDate()
    },
    {
        "id" : 5,
        "name": "Black sunglasses",
        "image": "https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589218152/samples/products/Black-sunglasses_mffok6.jpg",
        "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "likes": 7,
        "comments": [
            {
                
                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                
            },
            {
                
                "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        "created": moment.utc("2020-04-25").toDate()
    }
  ];

  //const ProductData: Array<ProductType> = []; // For no records test

  export default ProductData;
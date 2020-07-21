import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": 
                  [
                   "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                   "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                   "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                   "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                   "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                   "https://www.upsieutoc.com/images/2020/06/27/img6.jpg"
                  ],
            "description": "Best Shoes for Both summer and sports",
            "content": "Order it now before the stock is run out available in different colors",
            "colors": ["red", "black", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 23,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": [
                "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img6.jpg"
               ],
            "description": "New design for Mens shoes 2020 that will make you look attractive and smart and make you look more smarter and cooler buy it today available in different sizes and colors.",
            "content": "Welcome to Nike shoe store.New design of 2020 is available in different colors and sizes.So order your shoe of nike today.Its is one of the most suitable design for parties and sports.You can even go on picnics wearing these shoes. Even in festivales like eid you would look way cooler and attractive by wearing this shoe of nike collection 2020",
            "colors": ["red", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 19,
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": [
                "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img6.jpg"
               ],
            "description": "Attractive Design Nike 2020",
            "content": "Buy the new attractive collection from the nike shoe store",
            "colors": ["lightblue", "white", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 50,
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": [
                "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img6.jpg"
               ],
            "description": "Eid Collection 2020",
            "content": "Make your eid best with the nike shoes available in stores",
            "colors": ["orange", "black", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 15,
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Shoes 05",
            "src": [
                "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img6.jpg"
               ],
            "description": "Eid Attractive Collection 2020",
            "content": "Buy this eids attractive design shoes from nike shoe store",
            "colors": ["orange", "black", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 10,
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Shoes 06",
            "src": [
                "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "https://www.upsieutoc.com/images/2020/06/27/img5.jpg"
               ],
            "description": "Nike Slipper Collections",
            "content": "Buy good looking slippers from nike shoe store today",
            "colors": ["orange", "black", "crimson", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 17,
            "count": 1
        }
    ])
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
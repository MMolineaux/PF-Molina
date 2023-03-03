const products = [
    {
        id: 1,
        name: "Multicolored Harlequin",
        price: 15000,
        cat: "sculpture",
        image: "https://live.staticflickr.com/65535/52722641340_4d08770b88_o.png"

    },
    {
        id: 2,
        name: "Motionless Melancholy",
        price: 15000,
        cat: "sculpture",
        image: "https://live.staticflickr.com/65535/52722641405_47ef4b7615_o.png"

    },
    {
        id: 3,
        name: "Good Winter",
        price: 15000,
        cat: "portrait",
        image: "https://live.staticflickr.com/65535/52722491079_e519d54bc2_o.png"

    },
    {
        id: 4,
        name: "Operation Pied Piper",
        price: 15000,
        cat: "photography",
        image: "https://live.staticflickr.com/65535/52721705517_c95d1f260b_o.png" 

    },
    {
        id: 5,
        name: "Pyramid Song",
        price: 15000,
        cat: "photography",
        image: "https://live.staticflickr.com/65535/52721705667_9cca5c520e_o.png" 

    },
    {
        id: 6,
        name: "Kid-Z",
        price: 15000,
        cat: "oil",
        image: "https://live.staticflickr.com/65535/52722714118_dd4a12f459_o.png" 

    },
    {
        id: 7,
        name: "The Doggialty",
        price: 15000,
        cat: "oil",
        image: "https://live.staticflickr.com/65535/52722491694_232bd8825e_o.png" 

    },
    {
        id: 8,
        name: "Behind Schedule",
        price: 15000,
        cat: "photography",
        image: "https://live.staticflickr.com/65535/52721706427_b3c7a6dfce_o.png" 

    },
    {
        id: 9,
        name: "They never learn",
        price: 15000,
        cat: "oil",
        image: "https://live.staticflickr.com/65535/52722642305_148bceb031_o.png"

    },
    {
        id: 10,
        name: "Dirty Night Clowns",
        price: 15000,
        cat: "oil",
        image: "https://live.staticflickr.com/65535/52722492754_48fe57c380_b.jpg"

    },
    {
        id: 12,
        name: "Dishdda",
        price: 15000,
        cat: "surrealism",
        image: "https://live.staticflickr.com/65535/52721707082_94c80f7f3f_b.jpg"
    }
]

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export default getList;
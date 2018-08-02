require("dotenv").config();

const mongoose = require("mongoose");
const Phone = require("../models/Phone");

const phones = [
  {
    brand: "Samsung",
    name: "S9 64 GB",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    specs: ["two months battery life", "undestructable"]
  },
  {
    brand: "Nokia",
    name: "CEO",
    image:
      "http://pricepony.b-cdn.net/blog/wp-content/uploads/2015/12/Nokia-E1-front.jpg",
    specs: ["10 years battery life", "amazing"]
  },
  {
    brand: "LG",
    name: "G7 ThinkQ",
    image: "http://www.lg.com/us/mobile-phones/g7-thinq/images/g7-lockup.png",
    specs: ["Super Far Field Voice Recognition", "amazing low-light camera"]
  },
  {
    brand: "Apple",
    name: "iPhone 8",
    image:
      "https://1.bp.blogspot.com/-JGZBK0nlfsQ/WaqdfY_UbZI/AAAAAAAABec/b9KaOCFNR7EZ9bKQscHto7xPhQOy6vpbQCLcBGAs/s1600/iphone%2B8.jpg",
    specs: ["all-new Super Retina OLED display", "quad-LED True Tone flash"]
  }
];

mongoose.connect(process.env.DBURL).then(() => {
  console.log(`Conectado a ${process.env.DBURL}`);

  Phone.collection.drop();

  phones.forEach(p => {
    let ph = new Phone(p);
    ph.save()
    .then ( phone => {
      console.log(`Phone saved: ${phone.brand}, ${phone.name}`);
    })
    .catch( e => console.log(e));
  });
});
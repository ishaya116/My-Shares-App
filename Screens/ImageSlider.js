import React, { useState, useEffect } from "react";
import { View, StyleSheet} from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    title: "UYJ FLOUR",
    caption: "Original  Flour",
    url:
      "https://uyj-farms.vercel.app/shares_img/flour.jpg"
  },
  {
    title: "Burger 2",
    caption: "100% Original Transport",
    url:
      "https://uyj-farms.vercel.app/shares_img/transport.jpg"
  },
  {
    title: "Burger 3",
    caption: "Mouthfull Of Happiness",
    url:
      "https://uyj-farms.vercel.app/shares_img/shipping.jpg"
  }
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  return (
    <View>
      <Slideshow position={position} dataSource={dataSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageSlider;

import { Box, Button, Card, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductCard = () => {
  const [products, setProducts] = useState();
  console.log(products);
  useEffect(() => {
    const productData = axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((data) => {
        const filterProduct = data.data.filter(
          (products) => products?.title !== "New product"
        );
        console.log(filterProduct, "filterDeta")
        setProducts(data.data);
      });
  }, []);

  return (
    <Grid container>
      {products?.map((porduct) => {
        return (
          <Grid item sm={3}>
            <Card className="p-2">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {porduct?.images?.map((img) => {
                  return (
                    <SwiperSlide>
                      <img className="img-fluid" src={img} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Typography variant="body2">{porduct?.category?.name}</Typography>

              <h6>{porduct?.title}</h6>
              <Rating
                size="small"
                name="read-only"
                value={porduct?.rating}
                readOnly
              />
              <Box className="d-flex justify-content-between align-items-center">
                <Typography>{porduct?.price}</Typography>
                <Button size="small" variant="contained">
                  <AddIcon /> Add
                </Button>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductCard;

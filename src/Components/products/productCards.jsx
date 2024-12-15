import { Box, Button, Card, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState();
  console.log(products);
  useEffect(() => {
    const productData = axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <Grid container>
      {products?.map((porduct) => {
        return (
          <Grid item sm={3}>
            <Card className="p-2">
              <img className="img-fluid" src={porduct?.images[0]} alt="" />
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

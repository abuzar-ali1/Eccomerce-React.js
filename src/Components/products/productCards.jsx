import { Box, Button, Card, Rating, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <Box className="d-flex gap-2">
      {product.map((porductList) => {
        return (
     
              <Card className="p-2">
                <img src={porductList.img} alt="" />
                <Typography variant="body2">{porductList.category}</Typography>
                <h6>{porductList.name}</h6>
                <Rating
                  size="small"
                  name="read-only"
                  value={porductList.rating}
                  readOnly
                />
                <Box className="d-flex justify-content-between align-items-center">
                  <Typography>{porductList.price}</Typography>
                  <Button size="small" variant="contained">
                    <AddIcon /> Add
                  </Button>
                </Box>
              </Card>
       
        );
      })}
    </Box>
  );
};

export default ProductCard;

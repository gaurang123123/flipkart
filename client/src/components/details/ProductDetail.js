import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const Textbox = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const Badge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: green;
  font-size: 15px;
`
const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td{
    font-size: 14px;
    margin-top: 10px;
    border: none;
}
`
const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.data?.title.longTitle}</Typography>
      <Typography
        style={{
          marginTop: 5,
          color: "#878787",
          fontSize: 14,
          fontWeight: "bolder",
        }}
      >
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="img" />
        </Box>
      </Typography>
      <Typography style={{ marginTop: 10, color: "green" }}>
        Special Price
      </Typography>
      <Typography>
        <Box
          component="span"
          style={{ fontSize: 30, marginTop: 10, fontWeight: "500" }}
        >
          ₹{product.data?.price.cost}
        </Box>
        <Box
          component="span"
          style={{ color: "878787", marginTop: 10, marginLeft: 20 }}
        >
          <strike>₹{product.data?.price.mrp}</strike>
        </Box>
        <Box
          component="span"
          style={{
            color: "green",
            marginTop: 10,
            marginLeft: 20,
            fontWeight: "500",
          }}
        >
          {product.data?.price.discount} off
        </Box>
      </Typography>
      <Typography style={{ fontSize: 15, marginTop: 10, fontWeight: "500" }}>
        Available Offers
      </Typography>
      <Textbox>
        <Typography>
          <Badge />
          <Typography
            component="span"
            style={{ fontSize: 15, marginTop: 10, fontWeight: "500" }}
          >
            Bank Offer
          </Typography>{" "}
          10% off on Citi Credit Card EMI Transactions, up to ₹2,000 on orders
          of ₹5,000 and above
        </Typography>
        <Typography>
          <Badge />
          <Typography
            component="span"
            style={{ fontSize: 15, marginTop: 10, fontWeight: "500" }}
          >
            Bank Offer
          </Typography>{" "}
          Extra Rs1,000 off on Citi Credit Card EMI Transactions on a Net Cart
          Value of Rs29,999 and above
        </Typography>
        <Typography>
          <Badge />
          <Typography
            component="span"
            style={{ fontSize: 15, marginTop: 10, fontWeight: "500" }}
          >
            Bank Offer
          </Typography>{" "}
          10% off on Kotak Bank Credit Card Transactions, up to ₹1,000 on orders
          of ₹5,000 and above
        </Typography>
        <Typography>View 9 more offers</Typography>
      </Textbox>
      {/* // */}
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>
              1 year Domestic Warranty
              <Typography
                component="span"
                style={{
                  fontSize: 15,
                  color: "blue",
                  marginLeft: 10,
                  fontWeight: "500",
                }}
              >
                Know more
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} |{" "}
              {product.data?.price.cost > 500 ? (
                <>
                 <strike
                  style={{ color: "green", fontWeight: 600 }}
                  component="span"
                >
                  ₹40
                </strike>
                <Typography>Free Delivery</Typography>
                </>
               
              ) : (
                <Typography
                  style={{ color: "green", fontWeight: 600 }}
                  component="span"
                >
                  ₹40
                </Typography>
              )}
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Typography
                component="span"
                style={{
                  fontSize: 15,
                  color: "blue",
                  marginLeft: 10,
                  fontWeight: "400",
                }}
              >
                MTAILMODEECOM
              </Typography>
              <Typography>
                <li>7 Days Service Center Replacement/Repair</li>
              </Typography>
              <Typography
                component="span"
                style={{
                  fontSize: 14,
                  color: "blue",
                  marginLeft: 10,
                  fontWeight: "400",
                }}
              >
                See other seller
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{width : '80vh'}}>{product.data?.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;

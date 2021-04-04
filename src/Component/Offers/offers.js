import React from "react";
import "./offer.css";

const Offers = () => {
  return (
    <>
        <div style={{color: "white", marginTop:"50px", fontSize: "25px", marginBottom:"10px"}}>
        Deals That Will <strong><em>Interest You</em></strong>
        </div>
      <div className="offercontainer">
        <div className="book">
          <div className="info">
            <center>
              <strong>Flat 10% Discount on Flipkart Big Billion Days</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Samsung 20+ major brands</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://i.gadgets360cdn.com/large/flipkart-sale_1537795025926.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px" }}
            />
          </div>
        </div>
        <div className="book">
          <div className="info">
            <center>
              <strong>Flat 10% Discount on Amaon Great Indian Sale</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Apple 20+ major brands</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://static.toiimg.com/photo/msid-71537156/71537156.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px" }}
            />
          </div>
        </div>

        <div className="book">
          <div className="info">
            <center>
              <strong>Flat 10% Discount on Samsung Mobiles</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Samsung.com</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://media-eng.dhakatribune.com/uploads/2020/10/photo-october-offer-1602498632004.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

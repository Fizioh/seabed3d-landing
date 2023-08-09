import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import gif from "assets/images/image.png";

const Hero = () => {
  return (
    <Card sx={() => ({
      height: "100%",
      mt: "-50px",
      py: "32px",
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    })}>
      <VuiBox height="45%" display="flex" flexDirection="column" justifyContent="space-between" >
        <VuiBox textAlign="center" mt="208px">
          <VuiTypography color="white" variant="h2" fontWeight="regular" mb="26px">
          Welcome to the
          </VuiTypography>           
          <VuiTypography color="white" variant="h1" fontWeight="bold" mb="32px">
            SEABED 3D EXPERIENCE  
          </VuiTypography>
        </VuiBox>
        <VuiBox
        display="flex"
        alignItems="center"
        justifyContent="right" 
        position="fixed"
        top="40%"
        right="20px"
        zIndex={100}
        >
        <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "0",
            width: "180px",
            height: '50px',
            textAlign: "center",
            alignItems: "center",
            border: "2px solid white",
            cursor: "pointer",
            //zIndex: "80",
            borderRadius: "28px",
            padding: "12px",
            backgroundColor: "#5D8AA8",
            position: "fixed",
            top: "40%",
            right: "20px",
            bottom: "20px",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
            },

            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`,
            },
          }}
        >
          Explore Underwater 
          <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
        </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default Hero;

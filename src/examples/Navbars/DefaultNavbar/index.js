/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Vision UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function DefaultNavbar({ transparent, light, action }) {
  const { borderCol } = colors;
  const { borderWidth } = borders;
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [navbarType, setNavbarType] = useState("sticky");


  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }
    

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <VuiBox display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      marginTop: '50px'
    }}

    >
      <VuiBox
        py={2}
        px={{ xs: transparent ? 4 : 3, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={2}
        border={`${borderWidth[1]} solid ${borderCol.navbar}`}
        width="98%"
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        left="50%"
        zIndex={99}
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8.1px)",
          "-webkit-backdrop-filter": "blur(8.1px)",
          transform: "translate(-50%, 0px)",
        })}
      >
        <VuiBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <VuiTypography
            variant="button"
            textGradient={true}
            color="logo"
            fontSize={14}
            letterSpacing={2}
            fontWeight="medium"
            sx={{
              margin: "0 auto",
            }}
          >
            SEABED 3D
          </VuiTypography>
        </VuiBox>
        <VuiBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
        
          <DefaultNavbarLink icon="donut_large" name="dashboard" route="/dashboard" />
          {/* <DefaultNavbarLink icon="person" name="profile" route="/profile" /> */}
          <DefaultNavbarLink icon="account_circle" name="sign up" route="/authentication/sign-up" />
          <DefaultNavbarLink icon="key" name="sign in" route="/authentication/sign-in" />
          <DefaultNavbarLink icon="explore" name="explore" route="/explore" />

        </VuiBox>
        {action &&
          (action.type === "internal" ? (
            <VuiBox display={{ xs: "none", lg: "inline-block" }}>
              <VuiButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </VuiButton>
            </VuiBox>
          ) : (
            <VuiBox display={{ xs: "none", lg: "inline-block" }}>
              <VuiButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color ? action.color : "info"}
                sx={({ typography: { size }, functions: { pxToRem } }) => ({
                  fontSize: pxToRem(size.sm),
                })}
              >
                {action.label}
              </VuiButton>
            </VuiBox>
          ))}
        <VuiBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon
            sx={({ palette: { white } }) => ({
              color: white.main,
            })}
            fontSize="default"
          >
            {mobileNavbar ? "close" : "menu"}
          </Icon>
        </VuiBox>
      </VuiBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </VuiBox>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;

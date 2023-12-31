 
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";


// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Pricing from "examples/Pricing";


import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import Navbar from "layouts/home/components/Navbar";
import Hero from "layouts/home/components/Hero";
import Projects from "layouts/home/components/Projects";
import OrderOverview from "layouts/home/components/OrderOverview";
import SatisfactionRate from "layouts/home/components/SatisfactionRate";
import ReferralTracking from "layouts/home/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import WaitList from "./components/WaitList";

function Dashboard() {
  const { gradients } = colors;

  return (
    <PageLayout>
      <VuiBox sx={{ height: '2000px'}}>
      <DefaultNavbar />
      <Hero />
      <Pricing />
      <WaitList />

      </VuiBox>
      
    </PageLayout>
  );
}

export default Dashboard;

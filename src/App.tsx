import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import FitbitIcon from '@mui/icons-material/Fitbit';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeScreen from './dashboard/screens/HomeScreen';
import DashboardScreen from './dashboard/screens/DashboardScreen';
import CustomersScreen from './dashboard/screens/CustomersScreen';
import OrdersSecreen from './dashboard/screens/OrdersSecreen';
import AnalyticsScreen from './dashboard/screens/AnalyticsScreen';
import MessagesScreen from './dashboard/screens/MessagesScreen';
import ProductsScreen from './dashboard/screens/ProductsScreen';
import ReportsScreen from './dashboard/screens/ReportsScreen';
import AddProductScreen from './dashboard/screens/AddProductScreen';
import SettingsScreen from './dashboard/screens/SettingsScreen';
import LogOutScreen from './dashboard/screens/LogOutScreen';
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main'
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: <PersonIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <AutoAwesomeMotionIcon />,
  },
  {
    segment: 'analytics',
    title: 'Analytics',
    icon: <SignalCellularAltIcon />,
  },
  {
    segment: 'messages',
    title: 'Messages',
    icon: <MailOutlineIcon />,
  },
  {
    segment: 'products',
    title: 'Products',
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
  },
  {
    segment: 'add product',
    title: 'Add Product',
    icon: <AddShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Options',
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    segment: 'log out',
    title: 'Log Out',
    icon: <LogoutIcon />
  }
];


/*
0)>>> =()= <<<(0
*/

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (  
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      { pathname === "/" ? <HomeScreen /> : 
        pathname === "/dashboard" ? <DashboardScreen /> :
        pathname === "/customers" ? <CustomersScreen /> :
        pathname === "/orders" ? <OrdersSecreen /> :
        pathname === "/analytics" ? <AnalyticsScreen /> :
        pathname === "/messages" ? <MessagesScreen /> :
        pathname === "/products" ? <ProductsScreen /> :
        pathname === "/reports" ? <ReportsScreen /> :
        pathname === "/add%20product" ? <AddProductScreen /> :
        pathname === "/settings" ? <SettingsScreen /> :
        pathname === "/log%20out" ? <LogOutScreen /> : ""
      }
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter('/');

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <FitbitIcon style={{ textAlign:"center", height:"100%", width: "100%" }}/>,
        title: 'Dashboard',
        homeUrl: '/',
      }}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

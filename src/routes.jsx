import { createBrowserRouter } from "react-router-dom";
import SignUpOptions from "./pages/auth/SignUpOptions";
import SignUp from "./pages/auth/financial/SignUp";
import Login from "./pages/auth/financial/Login";
import FinancialDashboard from "./pages/financial/FinancialDashboard";
import MarketPlaceScreen from "./pages/FinancialMarketPlace";
// import AssetMarketScreen from "./pages/assetPages/AssetMarket";
import AssetMarket from "./pages/assetPages/AssetMarket";
// import moreInfo from "./pages/auth/financial/moreInfo";
import MoreInfoLayout from "./components/MoreInfoLayout";
import FirstStep1 from "./pages/auth/financial/step-form/FirstStep";
import FinancialInstitueForm from "./pages/auth/financial/FinancialInstitueForm";
import FinancialLayout from "./components/FinancialLayout";
import AssetLayout from "./components/AssetLayout";
import ChangePassword from "./pages/auth/financial/changePassword";
import FinancialLoading from "./pages/auth/financial/step-form/FinancialLoading";
import EmailVerified from "./components/common/EmailVerified";
import WelcomePage from "./pages/auth/financial/WelcomePage";
import AssetSignUp from "./pages/auth/assetHolder/AssetSignUp";
import AssetLogin from "./pages/auth/assetHolder/AssetLogin";
import AssetCreatePassword from "./pages/auth/assetHolder/AssetCreatePassword";
import AssetEmailVerified from "./pages/auth/assetHolder/AssetEmailVerified";
import AssetHolderFormLayout from "./pages/auth/assetHolder/AssetHolderFormLayout";
import AssetLoading from "./pages/auth/assetHolder/step-form/AssetLoading";
import FinancialSearchResult from "./pages/financial/FinancialSearchResult";
import FinancialCart from "./pages/financial/FinancialCart";
import TransactionSettlement from "./pages/financial/TransactionSettlement";
import Profile from "./pages/financial/Profile";
import AssetDashboard from "./pages/assetPages/AssetDashboard";
import AssetSearchResult from "./pages/assetPages/AssetSearchResult";
import AssetCart from "./pages/assetPages/AssetCart";
import AssetTransaction from "./pages/assetPages/TransactionSettlement";
import AssetProfile from "./pages/assetPages/Profile";


import LenderFinancialDashboard from "./pages/lender/LenderFinancialDashboard";
import LenderFinancialSearchResult from "./pages/lender/LenderFinancialSearchResult";



const DashoardScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <FinancialDashboard />
      </FinancialLayout>
    </div>
  );
};

const SearchResultScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <FinancialSearchResult />
      </FinancialLayout>
    </div>
  );
};

const MarketPlace = () => {
  return (
    <div>
      <FinancialLayout>
        <MarketPlaceScreen />
      </FinancialLayout>
    </div>
  );
};

const TransactionScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <TransactionSettlement />
      </FinancialLayout>
    </div>
  );
};
const ProfileScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <Profile />
      </FinancialLayout>
    </div>
  );
};

const FinancialCartScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <FinancialCart />
      </FinancialLayout>
    </div>
  );
};

// Asset
const AssetDashboardScreen = () => {
  return (
    <AssetLayout>
      <AssetDashboard />
    </AssetLayout>
  );
};

const AssetSearchScreen = () => {
  return (
    <div>
      <AssetLayout>
        <AssetSearchResult />
      </AssetLayout>
    </div>
  );
};

const AssetMarketScreen = () => {
  return (
    <div>
      <AssetLayout>
        <AssetMarket />
      </AssetLayout>
    </div>
  );
};

const AssetTransactionScreen = () => {
  return (
    <div>
      <AssetLayout>
        <AssetTransaction />
      </AssetLayout>
    </div>
  );
};
const AssetProfileScreen = () => {
  return (
    <div>
      <AssetLayout>
        <AssetProfile />
      </AssetLayout>
    </div>
  );
};

const AssetCartScreen = () => {
  return (
    <div>
      <AssetLayout>
        <AssetCart />
      </AssetLayout>
    </div>

    );
};

const LenderDashoardScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <LenderFinancialDashboard />
      </FinancialLayout>
    </div>
  );
};

const LenderSearchResultScreen = () => {
  return (
    <div>
      <FinancialLayout>
        <LenderFinancialSearchResult />
      </FinancialLayout>
    </div>
  );
};

export const router = [
  {
    path: "/",
    Component: SignUpOptions,
  },

  // Financial Authentication
  {
    path: "/financial/signup",
    Component: SignUp,
  },

  {
    path: "/financial/login",
    Component: Login,
  },

  {
    path: "/financial/create-password",
    Component: ChangePassword,
  },

  {
    path: "/financial/verification",
    Component: EmailVerified,
  },

  {
    path: "/financial/registration",
    Component: FinancialInstitueForm,
  },

  {
    path: "/financial/loading",
    Component: FinancialLoading,
  },

  {
    path: "/financial/welcome",
    Component: WelcomePage,
  },





  // Asset Authentication
  {
    path: "/asset/signup",
    Component: AssetSignUp,
  },

  {
    path: "/asset/login",
    Component: AssetLogin,
  },

  {
    path: "/asset/create-password",
    Component: AssetCreatePassword,
  },

  {
    path: "/asset/verification",
    Component: AssetEmailVerified,
  },

  {
    path: "/asset/registration",
    Component: AssetHolderFormLayout,
  },

  {
    path: "/asset/loading",
    Component: AssetLoading,
  },

  {
    path: "/more-info",
    Component: () => {
      <MoreInfoLayout>
        <FirstStep1 />
      </MoreInfoLayout>;
    },
  },


  // Lender view

  
  {
    path: "/lender/dashboard",
    Component: LenderDashoardScreen,
  },
  {
    path: "/lender/search",
    Component: LenderSearchResultScreen,
  },





  // Financial section
  {
    path: "/financial/dashboard",
    Component: DashoardScreen,
  },
  {
    path: "/financial/search",
    Component: SearchResultScreen,
  },
  {
    path: "/financial/marketplace",
    Component: MarketPlace,
  },
  {
    path: "/financial/cart",
    Component: FinancialCart,
  },
  {
    path: "/financial/transaction-settlement",
    Component: TransactionScreen,
  },
  {
    path: "/financial/profile",
    Component: ProfileScreen,
  },

  // AssetPages section
  {
    path: "/asset/dashboard",
    Component: AssetDashboardScreen,
  },
  {
    path: "/asset/search",
    Component: AssetSearchScreen,
  },
  {
    path: "/asset/cart",
    Component: AssetCart,
  },
  {
    path: "/asset/market",
    Component: AssetMarketScreen,
  },
  {
    path: "/asset/transaction-settlement",
    Component: AssetTransactionScreen,
  },
  {
    path: "/asset/profile",
    Component: AssetProfileScreen,
  },
];

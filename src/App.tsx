import { Navigate, useRoutes } from 'react-router-dom';
import {
  SignIn,
  Signup,
  Dashboard,
  Account,
  Password,
  Fa,
  Package,
  Direct,
  Downline,
  Referral,
  TeamBonus,
  RankBonus,
  Ledger,
  Payout,
  MarketingMaterial,
  Support
} from './pages';
import LoggedinLayout from './layout';
import TeamNew from './pages/team/new';

function App() {
  return useRoutes([
    { path: "/sign-in", element: <SignIn />, },
    { path: "/sign-up", element: <Signup />, },
    {
      path: "/", element: <LoggedinLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "/profile/account", element: <Account /> },
        { path: "/profile/password", element: <Password /> },
        { path: "/profile/2fa", element: <Fa /> },
        { path: "/package", element: <Package /> },
        { path: "/team/new", element: <TeamNew /> },
        { path: "/team/direct", element: <Direct /> },
        { path: "/team/downline", element: <Downline /> },
        { path: "/income/referral", element: <Referral /> },
        { path: "/income/team-bonus", element: <TeamBonus /> },
        { path: "/income/rank-bonus", element: <RankBonus /> },
        { path: "/ledger", element: <Ledger /> },
        { path: "/payout", element: <Payout /> },
        { path: "/marketing-material", element: <MarketingMaterial /> },
        { path: "/support", element: <Support /> },
      ]
    },
    { path: "404", element: <div>not found</div> },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ])
}

export default App;

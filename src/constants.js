import icon from './assets/Available Balance.png'
import Team from "./assets/team.png"
import Direct from "./assets/Directs.png"
import Downline from "./assets/Downline.png"
import ActiveHead from "./assets/Active-heading.png"
import Active from "./assets/Active.png"
import Business from "./assets/Business.png"
import Inactive from "./assets/Inactive.png"
import Settled from "./assets/Settled.png"



export const SigupData = [
  {
    label: "Sponsor Username",
    type: "text",
    required: true,
    placeholder: "NENJA123456789",
    name: "sponsorName"
  },
  {
    label: "Username",
    type: "text",
    required: true,
    placeholder: "philipjohn2023",
    name: "username"
  },
  {
    label: "First Name",
    type: "text",
    required: false,
    placeholder: "Philip",
    name: "firstName"
  },
  {
    label: "Last Name",
    type: "text",
    required: false,
    placeholder: "John",
    name: "lastName"
  },
  {
    label: "Country",
    type: "select",
    options: [{ value: 10, text: "India" }, { value: 20, text: "Pakistan" }],
    required: false,
    placeholder: "India",
    name: "country"
  },
  {
    label: "Phone Number",
    type: "phone",
    required: false,
    placeholder: "Enter your phone number",
    name: "phone"
  },
  {
    label: "Email Address",
    type: "email",
    required: false,
    placeholder: "xyz@gmail.com",
    name: "email"
  },
  {
    label: "Password",
    type: "password",
    required: false,
    placeholder: "Enter your password",
    name: "password"
  },
  {
    label: "Confirm Password",
    type: "password",
    required: false,
    placeholder: "Enter your confirm password",
    name: "confirmPassword"
  },

]



export const sidebarRoutes = [
  {
    href: `/profile`,
    icon: icon,
    activeIcon: icon,
    title: "Profile",
    childs: [
      {
        title: "Account",
        href: "/profile/account",
      },
      {
        title: "Password",
        href: "/profile/password",
      },
      {
        title: "2FA",
        href: "/profile/2fa",
      },
    ],
  },
  {
    href: `/package`,
    icon: icon,
    activeIcon: icon,
    title: "Package",
    childs: null,
    type: "link",
  },
  {
    href: `/team`,
    icon: icon,
    activeIcon: icon,
    title: "Team",
    childs: [
      {
        title: "Direct",
        href: "/team/direct",
      },
      {
        title: "Downline",
        href: "/team/downline",
      },
    ],
  },
  {
    href: `/income`,
    icon: icon,
    activeIcon: icon,
    title: "Income",
    childs: [
      {
        title: "Referral",
        href: "/income/referral",
      },
      {
        title: "Team Bonus",
        href: "/income/team-bonus",
      },
      {
        title: "Rank Bonus",
        href: "/income/rank-bonus",
      },
    ],
  },
  {
    href: `/ledger`,
    icon: icon,
    activeIcon: icon,
    title: "Ledger",
    childs: null,
    type: "link",
  },
  {
    href: `/payout`,
    icon: icon,
    activeIcon: icon,
    title: "Payout",
    childs: null,
    type: "link",
  },
  {
    href: `/marketing-material`,
    icon: icon,
    activeIcon: icon,
    title: "Marketing Material",
    childs: null,
    type: "link",
  },
  {
    href: `/support`,
    icon: icon,
    activeIcon: icon,
    title: "Support",
    childs: null,
    type: "link",
  },
  {
    href: `/sign-in`,
    icon: icon,
    activeIcon: icon,
    title: "Log Out",
    childs: null,
    type: "logout",
  },
];

export const BussinsessData = {
  Heading: "Business",
  HeadingImg: Business,
  SubHeading: "Settled",
  SubHeadingImg: Settled,
  SubHeading2: "Unsettled",
  SubHeadingImg2: Settled,
}

export const TeamData = {
  Heading: "Team",
  HeadingImg: Team,
  SubHeading: "Directs",
  SubHeadingImg: Direct,
  SubHeading2: "Downline",
  SubHeadingImg2: Downline,
}

export const ActiveInacitveData = {
  Heading: "Active / Inactive",
  HeadingImg: ActiveHead,
  SubHeading: "Active",
  SubHeadingImg: Active,
  SubHeading2: "Inactive",
  SubHeadingImg2: Inactive,
}
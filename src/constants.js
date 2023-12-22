import icon from './assets/Available Balance.png'

export const SigupData = [
  {
      label: "Sponsor Username",
      type: "text",
      required: true,
      placeholder: "NENJA123456789",
      name:"sponsorName"
  },
  {
      label: "Username",
      type: "text",
      required: true,
      placeholder: "philipjohn2023",
      name:"username"
  },
  {
      label: "First Name",
      type: "text",
      required: false,
      placeholder: "Philip",
      name:"firstName"
  },
  {
      label: "Last Name",
      type: "text",
      required: false,
      placeholder: "John",
      name:"lastName"
  },
  {
      label: "Country",
      type: "select",
      options: [{ value: 10, text: "India" }, { value: 20, text: "Pakistan" }],
      required: false,
      placeholder: "India",
      name:"country"
  },
  {
      label: "Phone Number",
      type: "phone",
      required: false,
      placeholder: "Enter your phone number",
      name:"phone"
  },
  {
      label: "Email Address",
      type: "email",
      required: false,
      placeholder: "xyz@gmail.com",
      name:"email"
  },
  {
      label: "Password",
      type: "password",
      required: false,
      placeholder: "Enter your password",
      name:"password"
  },
  {
      label: "Confirm Password",
      type: "password",
      required: false,
      placeholder: "Enter your confirm password",
      name:"confirmPassword"
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
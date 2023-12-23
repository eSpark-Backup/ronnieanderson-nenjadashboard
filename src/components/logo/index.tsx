import { logo } from "../../assets";

const Logo = ({ width }: { width?: string }): JSX.Element => {
  return <img src={logo} alt="logo" width={width || "180px"} />;
};

export default Logo;
import LogoImage from "../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <img src={LogoImage} alt="Weather App" />
    </a>
  );
}

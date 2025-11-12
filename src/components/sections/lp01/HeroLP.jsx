
import { useNavigate } from "react-router-dom";
import FullImg from "../../sectionElements/Lp01/hero/FullImg";
import DefaultHero from "../../sectionElements/Lp01/hero/DefaultHero";

export default function HeroLP({ fullImg }) {
  const navigate = useNavigate();

  return fullImg ? <FullImg obs={false} /> : <DefaultHero />;
}

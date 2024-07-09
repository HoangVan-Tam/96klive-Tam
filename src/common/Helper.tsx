import thienPhuLogo from "../assets/mu.jpg";
import hyVongLogo from "../assets/mc.jpeg";
import moUocLogo from "../assets/real.jpg";

export const getLogoByTeamName = (teamName: string) => {
  switch (teamName) {
    case "Thiên Phú":
      return thienPhuLogo;
    case "Hy Vọng":
      return hyVongLogo;
    case "Mơ Ước":
      return moUocLogo;
    default:
      break;
  }
};

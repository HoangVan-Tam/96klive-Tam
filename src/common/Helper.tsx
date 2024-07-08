import thienPhuLogo from "../assets/mu.jpg";
import hyVongLogo from "../assets/mc.jpeg";

export const getLogoByTeamName = (teamName: string) => {
  switch (teamName) {
    case "Thiên Phú":
      return thienPhuLogo;
    case "Hy Vọng":
      return hyVongLogo;
    default:
      break;
  }
};

import CloudIcon from "../../assets/icons/cloud.svg?react";
import MobileIcon from "../../assets/icons/mobile.svg?react";
import WebdevIcon from "../../assets/icons/webdev.svg?react";
import UiuxIcon from "../../assets/icons/uiux.svg?react";
import SoftwareIcon from "../../assets/icons/Software.svg?react";
import ItinfraIcon from "../../assets/icons/itinfra.svg?react";
import CybersecurityIcon from "../../assets/icons/cybersecurity.svg?react";
import QaIcon from "../../assets/icons/qa.svg?react";
import ConsultingIcon from "../../assets/icons/consulting.svg?react";

export type IconName =
  | "webdev"
  | "mobile"
  | "uiux"
  | "software"
  | "itinfrastructure"
  | "cybersecurity"
  | "qa"
  | "consulting"
  | "cloud";

const icons: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  cloud: CloudIcon,
  mobile: MobileIcon,
  webdev: WebdevIcon,
  uiux: UiuxIcon,
  software: SoftwareIcon,
  itinfrastructure: ItinfraIcon,
  cybersecurity: CybersecurityIcon,
  qa: QaIcon,
  consulting: ConsultingIcon,
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}


export default function Icon({ name, className="", size = 40,}: IconProps) {
  const IconComponent = icons[name]
  if (!IconComponent) return null; 
   
  return <IconComponent className={className} width={size} height={size}  />
}
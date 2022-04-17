import { IconType } from "react-icons";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaParachuteBox,
  FaExternalLinkAlt,
  FaListUl,
  FaListOl,
  FaCog,
  FaClock,
  FaStopwatch,
  FaTelegramPlane,
} from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineMedium,
  AiOutlineCopy,
  AiOutlineCheck,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineExclamation,
  AiFillCaretLeft,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineUpload,
  AiOutlineEdit,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoClose, IoWalletSharp, IoWarning } from "react-icons/io5";
import { VscLoading, VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BsHourglassSplit, BsExclamationCircle } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { CgArrowsExchangeAltV, CgUndo } from "react-icons/cg";
import { BiArrowBack, BiBold, BiItalic, BiGlobe } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import { IconBaseProps } from "react-icons/lib";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export type IconTypes =
  | "Discord"
  | "Telegram"
  | "Twitter"
  | "Youtube"
  | "Medium"
  | "Facebook"
  | "Linkedin"
  | "Parachute"
  | "Link"
  | "ListUl"
  | "ListOl"
  | "Cog"
  | "Clock"
  | "Copy"
  | "Check"
  | "Menu"
  | "Close"
  | "StopWatch"
  | "Info"
  | "CheckCircle"
  | "Exclamation"
  | "CaretLeft"
  | "Like"
  | "Dislike"
  | "Upload"
  | "Wallet"
  | "Loading"
  | "Down"
  | "Up"
  | "HourglassSplit"
  | "ExclamationCircle"
  | "Settings"
  | "Warning"
  | "ArrowBack"
  | "Back"
  | "Forward"
  | "Bold"
  | "Italic"
  | "Blockchain"
  | "ExternalLink"
  | "ExchangeAlt"
  | "Edit"
  | "Globe"
  | "Undo";

export const iconList: { [key in IconTypes]: IconType } = {
  ExchangeAlt: CgArrowsExchangeAltV,
  Undo: CgUndo,
  Loading: VscLoading,
  Down: VscTriangleDown,
  Facebook: FaFacebookF,
  Discord: RiDiscordLine,
  Telegram: FaTelegramPlane,
  Twitter: AiOutlineTwitter,
  Youtube: AiFillYoutube,
  Medium: AiOutlineMedium,
  Copy: AiOutlineCopy,
  Check: AiOutlineCheck,
  Menu: FiMenu,
  Close: IoClose,
  Linkedin: FaLinkedinIn,
  Link: FaExternalLinkAlt,
  Info: AiOutlineInfoCircle,
  CheckCircle: AiOutlineCheckCircle,
  Parachute: FaParachuteBox,
  StopWatch: FaStopwatch,
  Exclamation: AiOutlineExclamation,
  ExclamationCircle: BsExclamationCircle,
  ExternalLink: GoLinkExternal,
  CaretLeft: AiFillCaretLeft,
  Globe: BiGlobe,
  Like: AiOutlineLike,
  Dislike: AiOutlineDislike,
  Up: VscTriangleUp,
  Upload: AiOutlineUpload,
  HourglassSplit: BsHourglassSplit,
  Settings: IoMdSettings,
  Wallet: IoWalletSharp,
  Warning: IoWarning,
  ArrowBack: BiArrowBack,
  Back: MdOutlineArrowBackIosNew,
  Forward: MdOutlineArrowForwardIos,
  Blockchain: SiHiveBlockchain,
  Italic: BiItalic,
  Bold: BiBold,
  Cog: FaCog,
  Clock: FaClock,
  ListOl: FaListOl,
  ListUl: FaListUl,
  Edit: AiOutlineEdit,
};

interface IconProps extends IconBaseProps {
  type: IconTypes;
}

export default function Icon(props: IconProps) {
  const { type, ...rest } = props;
  const Icon = iconList[type];
  return <Icon {...rest} />;
}

export const getIcon = (type: IconTypes) => iconList[type];
import { Keplr } from "./cosmos";

export interface Dwindow extends Window {
  xfi?: {
    ethereum?: { isMetaMask?: boolean; [index: string]: any };
    terra?: any;
  };
  ethereum?: any;
  BinanceChain?: any;
  keplr?: Keplr;
}
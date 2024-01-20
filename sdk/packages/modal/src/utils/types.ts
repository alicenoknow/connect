export enum QueryNetwork {
  SOLANA = 'SOLANA',
  SUI = 'SUI',
  POLKADOT = 'POLKADOT'
}

export interface WalletSelectorItem {
  name: string
  icon: string
  link: string
  detected?: boolean
  recent?: boolean
}

export enum SelectorView {
  DESKTOP_MAIN,
  MOBILE_MAIN,
  MOBILE_QR,
  MOBILE_ALL,
  CONNECTING
}

type FooterText = string;

interface FooterLink {
  url: string;
  name: string;
}

export type FooterTextData = FooterText | FooterLink;

export interface AdditionalModalConfig {
  footerTextData: ReadonlyArray<FooterTextData> | undefined
}
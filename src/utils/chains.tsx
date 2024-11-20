import type { Chain } from "wagmi/chains";
import { saleConfig } from "../saleConfig";
import { getDefaultChains } from "@0xsequence/kit";

function getChainConfig(chainId: number): Chain {
  return getDefaultChains([chainId])[0];
}

const chains = Array.from(new Set([getChainConfig(saleConfig.chainId)])) as [
  Chain,
  ...Chain[],
];

export default chains;

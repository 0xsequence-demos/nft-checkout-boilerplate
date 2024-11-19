type SaleConfiguration = {
  nftTokenAddress: `0x${string}`;
  salesContractAddress: `0x${string}`;
  chainId: number;
  itemsForSale: string[];
};

export const salesConfigs: SaleConfiguration[] = [
  {
    nftTokenAddress: "0xf79db07c7a802f77ad2438ce7b8cb3f07d1d8ac1",
    salesContractAddress: "0x0a333e69cc23623424e223e078130ac8f54c16f6",
    chainId: 80002, //polygonAmoy
    // Modify here to show different items
    itemsForSale: ["0", "1"],
  }
];

// This value must match one of the chainIds present in your salesConfigurations.
export const defaultChainId = 80002; //polygonAmoy

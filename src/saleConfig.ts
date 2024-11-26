type SaleConfiguration = {
  currencyAddress: `0x${string}`;
  nftTokenAddress: `0x${string}`;
  salesContractAddress: `0x${string}`;
  chainId: number;
  itemForSale: string;
  price: string;
};

export const saleConfig: SaleConfiguration = {
  // ERC-20 contract # NATIVE token sale: for the native token sale, you should use ethers.ZeroAddress.
  currencyAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  // NFT Contract
  nftTokenAddress: "0xdeb398f41ccd290ee5114df7e498cf04fac916cb",
  // Primary Sales Erc1155 contract
  salesContractAddress: "0xe65b75eb7c58ffc0bf0e671d64d0e1c6cd0d3e5b",
  chainId: 137, //polygonAmoy
  // Modify here to show different item
  itemForSale: "1",
  // NFT price ($0.02) USDC
  price: "20000",
};

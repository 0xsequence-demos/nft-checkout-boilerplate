import { Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import ChainInfo from "./ChainInfo";
import Disconnect from "./Disconnect";
import Tests from "./Tests";
import Checkout from "./Tests/Checkout";
import { salesConfigs } from "../../../../salesConfigs";

const Connected = () => {
  const { address, chain, chainId } = useAccount();
  const currentChainId = chainId || 80002;
  const saleConfig = salesConfigs.find((sale) => sale.chainId === currentChainId);

  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <Disconnect />
      {chain && <ChainInfo chain={chain} address={address!} />}
      {/* <Tests chainId={chainId!} /> */}
      {saleConfig ? <Checkout saleConfig={saleConfig}/> : <div>No sale detected in this chain</div>}
    </>
  );
};

export default Connected;

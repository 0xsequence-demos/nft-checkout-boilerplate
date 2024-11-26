import { Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import ChainInfo from "./ChainInfo";
import Disconnect from "./Disconnect";
import Tests from "./Tests";
import Testing from "../../Testing";

const Connected = () => {
  const { address, chain } = useAccount();

  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <Disconnect />
      {chain && <ChainInfo chain={chain} address={address!} />}
      <Tests />
      <div style={{ marginBottom: "1rem" }}/>
      <Testing/>
    </>
  );
};

export default Connected;

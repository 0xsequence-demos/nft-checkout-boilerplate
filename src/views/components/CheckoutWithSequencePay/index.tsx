import { Box } from "@0xsequence/design-system";
import CardButton from "../CardButton";
import Collectible from "../Collectible";
import { useOpenWalletModal } from "@0xsequence/kit-wallet";
import { OnClickSelectPaymentProps } from "../blockchain/Connected/Tests/Checkout";

const CheckoutWithSequencePay = ({ onClickSelectPayment } : { onClickSelectPayment: OnClickSelectPaymentProps }) => {
  const { setOpenWalletModal } = useOpenWalletModal();

  const tokenMetadata1 = {
    image: "/mario-bros-nft.jpeg",
    name: "Mario",
    tokenId: "1",
  };

  const tokenMetadata2 = {
    image: "/veigar-nft.png",
    name: "FiNF",
    tokenId: "0",
  };

  return (
    <Box>
      <CardButton
        title="Inventory"
        description="Click here to open your inventory"
        onClick={() => setOpenWalletModal(true)}
      />
      <Collectible
        tokenMetadata={tokenMetadata1}
        onClickSelectPayment={onClickSelectPayment}
      />
      <Collectible
        tokenMetadata={tokenMetadata2}
        onClickSelectPayment={onClickSelectPayment}
      />
    </Box>
  );
};

export default CheckoutWithSequencePay;

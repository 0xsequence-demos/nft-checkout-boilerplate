import { Box, Card, Skeleton, Text, useMediaQuery } from "@0xsequence/design-system";
import { CollectibleTileImage } from "@0xsequence/kit";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { OnClickSelectPaymentProps } from "./blockchain/Connected/Tests/Checkout";

const Collectible = ({ tokenMetadata, onClickSelectPayment } : { tokenMetadata: any, onClickSelectPayment: OnClickSelectPaymentProps }) => {
  const isMobile = useMediaQuery("isMobile");
  const [amount, setAmount] = useState(0);
  const [purchasingNft, setPurchasingNft] = useState(false);
  const logoURI = null;
  const formmatedPrice = 0.001;
  const increaseAmount = () => {
    if (purchasingNft) return;
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount === 0 || purchasingNft) return;
    setAmount(amount - 1);
  };

  const resetAmount = () => {
    setAmount(0);
  };

  const onSuccessAction = () => {
    console.log("Purchase successful");
    resetAmount();
  }

  const onErrorAction = (error: Error) => {
    console.error(error);
  };

  return (
    <Box
      padding="1"
      width="full"
      flexDirection="column"
      style={{
        flexBasis: isMobile ? "100%" : "50%",
        maxWidth: "55rem",  
      }}
    >
      <Card>
        <Box flexDirection="row" gap="6">
          <CollectibleTileImage imageUrl={tokenMetadata?.image || ""} />
          <Box display="flex" flexDirection="column" gap="6">
            <Text variant="large" fontWeight="bold" color="text100">
              {tokenMetadata?.name || ""}
            </Text>
            <Text
              variant="normal"
              fontWeight="bold"
              color="text100"
              style={{ textAlign: "left" }}
            >
              Token id: {tokenMetadata?.tokenId || ""}
            </Text>
            <Box display="flex" justifyContent="space-between" gap="4">
              <Box flexDirection="row" gap="2">
                <Text
                  variant="normal"
                  fontWeight="bold"
                  color="text100"
                  style={{ textAlign: "left" }}
                >
                  Price: {formmatedPrice}
                </Text>
                {!logoURI ? (
                  <Skeleton style={{ width: 20, height: 20 }} />
                ) : (
                  // <TokenImage
                  //   // src="https://metadata.sequence.app/projects/30957/collections/690/image.png"
                  //   withNetwork="amoy"
                  //   symbol="matic"
                  //   style={{ width: 20, height: 20 }}
                  // />
                  <></>
                )}
              </Box>
            </Box>
            <Box
              display="flex"
              padding="4"
              borderRadius="lg"
              justifyContent="space-between"
              gap="4"
              style={{ backgroundColor: "rgba(32, 32, 32, 1)", width: "25rem" }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap="8"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  width: "fit-content",
                  padding: "0.5rem 1rem",
                }}
                borderRadius="lg"
              >
                <Text
                  variant="large"
                  fontWeight="bold"
                  onClick={decreaseAmount}
                  style={{
                    cursor: "pointer",
                    color: "#ffffff",
                    fontWeight: 900,
                  }}
                >
                  -
                </Text>
                <Text
                  variant="large"
                  fontWeight="bold"
                  style={{ color: "#ffffff" }}
                >
                  {amount}
                </Text>
                <Text
                  variant="large"
                  fontWeight="bold"
                  onClick={increaseAmount}
                  style={{
                    cursor: "pointer",
                    color: "#ffffff",
                    fontWeight: 900,
                  }}
                >
                  +
                </Text>
              </Box>
              <CustomButton
                text="Buy"
                onClick={() => onClickSelectPayment(tokenMetadata.tokenId, amount, onSuccessAction, onErrorAction)}
              />
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Collectible;
import { Box } from "@0xsequence/design-system";
import TestInventory from "./TestInventory";
import TestCheckout from "./Checkout";

const Tests = () => {
  return (
    <Box display="flex" flexDirection="column" gap="4">
      <TestInventory/>
      <TestCheckout/>
    </Box>
  );
};

export default Tests;

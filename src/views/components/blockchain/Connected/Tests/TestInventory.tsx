import { useOpenWalletModal } from "@0xsequence/kit-wallet";
import CardButton from "../../../CardButton";

const TestInventory = () => {
  const { setOpenWalletModal } = useOpenWalletModal();
  const openInventory = () => setOpenWalletModal(true);

  return (
    <CardButton
      title="Inventory"
      description="Click here to open your Inventory"
      onClick={openInventory}
    />
  );
};

export default TestInventory;

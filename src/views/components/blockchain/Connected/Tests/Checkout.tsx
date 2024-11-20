import { useAccount } from "wagmi";
import CheckoutWithSequencePay from "../../../CheckoutWithSequencePay";
import { useERC1155SaleContractPaymentModal } from "@0xsequence/kit-checkout";
import { saleConfig } from "../../../../../saleConfig";

const TestCheckout = () => {
	const { address } = useAccount();
	const { openERC1155SaleContractPaymentModal } = useERC1155SaleContractPaymentModal()

	const onClickSelectPayment = () => {
    if (!address) {
      return
    }

    openERC1155SaleContractPaymentModal({
      collectibles: [
        {
          tokenId: saleConfig.itemForSale,
          quantity: '1'
        }
      ],
      chain: saleConfig.chainId,
      price: saleConfig.price,
      targetContractAddress: saleConfig.salesContractAddress,
      recipientAddress: address,
      currencyAddress: saleConfig.currencyAddress,
      collectionAddress: saleConfig.nftTokenAddress,
      creditCardProviders: ['sardine'],
      isDev: true,
      copyrightText: 'ⓒ2024 Sequence',
      onSuccess: (txnHash: string) => {
        console.log('success!', txnHash)
      },
      onError: (error: Error) => {
        console.error(error)
      }
    })
  }

  return <CheckoutWithSequencePay onClickSelectPayment={onClickSelectPayment} />;
};

export default TestCheckout;
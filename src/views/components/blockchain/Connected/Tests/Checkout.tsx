import { useAccount } from "wagmi";
import CheckoutWithSequencePay from "../../../CheckoutWithSequencePay";
import { useERC1155SaleContractPaymentModal } from "@0xsequence/kit-checkout";

export interface OnClickSelectPaymentProps {
  (tokenId: string, quantity: number, onSuccessAction: () => void, onErrorAction: (error: Error) => void): void;
}

const Checkout = ({ saleConfig }) => {
	const { address } = useAccount();
	const { openERC1155SaleContractPaymentModal } = useERC1155SaleContractPaymentModal();

	const onClickSelectPayment: OnClickSelectPaymentProps = (tokenId, quantity, onSuccessAction, onErrorAction) => {
    if (!address || !quantity || !tokenId) {
      return
    }
    
    // NATIVE token sale
    // const currencyAddress = ethers.ZeroAddress
    // const salesContractAddress = '0xf0056139095224f4eec53c578ab4de1e227b9597'
    // const collectionAddress = '0x92473261f2c26f2264429c451f70b0192f858795'
    // const price = '200000000000000'

    // // ERC-20 contract
    const currencyAddress = '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582' // USDC
    // Primary Sales Erc1155 contract
    const salesContractAddress = saleConfig.salesContractAddress;
    // NFT Contract
    const collectionAddress = saleConfig.nftTokenAddress;
    const price = 1000;

    const chainId = saleConfig.chainId;
    const formmatedPrice = (quantity * price).toString();
    const formmatedQuantity = quantity.toString();

    openERC1155SaleContractPaymentModal({
      collectibles: [
        {
          tokenId,
          quantity: formmatedQuantity
        }
      ],
      chain: chainId,
      price: formmatedPrice,
      targetContractAddress: salesContractAddress,
      recipientAddress: address,
      currencyAddress,
      collectionAddress,
      creditCardProviders: ['sardine'],
      isDev: true,
      copyrightText: 'ⓒ2024 Sequence',
      onSuccess: (txnHash: string) => {
        console.log('success!', txnHash);
        onSuccessAction();
      },
      onError: (error: Error) => {
        onErrorAction(error);
      }
    })
  }

  return <CheckoutWithSequencePay onClickSelectPayment={onClickSelectPayment} saleConfig={saleConfig}/>;
};

export default Checkout;

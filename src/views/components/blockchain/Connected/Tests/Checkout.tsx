import { useAccount } from "wagmi";
import CheckoutWithSequencePay from "../../../CheckoutWithSequencePay";
import { useERC1155SaleContractPaymentModal } from "@0xsequence/kit-checkout";

const Checkout = () => {
	const { address } = useAccount();
	const { openERC1155SaleContractPaymentModal } = useERC1155SaleContractPaymentModal()

	const onClickSelectPayment = () => {
    if (!address) {
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
    const salesContractAddress = '0x0a333e69cc23623424e223e078130ac8f54c16f6'
    // NFT Contract
    const collectionAddress = '0xf79db07c7a802f77ad2438ce7b8cb3f07d1d8ac1'
    const price = '1000'

    const chainId = 80002

    openERC1155SaleContractPaymentModal({
      collectibles: [
        {
          tokenId: '0',
          quantity: '1'
        }
      ],
      chain: chainId,
      price,
      targetContractAddress: salesContractAddress,
      recipientAddress: address,
      currencyAddress,
      collectionAddress,
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

export default Checkout;

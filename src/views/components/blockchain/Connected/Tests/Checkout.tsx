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
    const currencyAddress = '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359'
    const salesContractAddress = '0xe65b75eb7c58ffc0bf0e671d64d0e1c6cd0d3e5b'
    const collectionAddress = '0xdeb398f41ccd290ee5114df7e498cf04fac916cb'
    const price = '20000'

    const chainId = 137

    openERC1155SaleContractPaymentModal({
      collectibles: [
        {
          tokenId: '1',
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

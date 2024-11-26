import CardButton from "../CardButton";

const CheckoutWithSequencePay = ({
  onClickSelectPayment,
}: {
  onClickSelectPayment: () => void;
}) => {
  return (
    <CardButton
      title="Checkout with Sequence Pay"
      description="Purchase an NFT through various purchase methods"
      onClick={onClickSelectPayment}
    />
  );
};

export default CheckoutWithSequencePay;

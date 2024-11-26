import { useSelectPaymentModal } from '@0xsequence/kit-checkout'
import { encodeFunctionData, toHex } from "viem";
import { useAccount } from "wagmi";
import CardButton from './CardButton';

const Testing = () => {
  const { openSelectPaymentModal } = useSelectPaymentModal();
	const { address } = useAccount();

	const onClick = () => {
    const saleConfig = {
      // ERC-20 contract # NATIVE token sale: for the native token sale, you should use ethers.ZeroAddress.
      currencyAddress: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
      // NFT Contract
      nftTokenAddress: "0x280ab414233f42fd4261d8563be61d2b2c96d25d",
      // Primary Sales Erc1155 contract
      salesContractAddress: "0xe65b75eb7c58ffc0bf0e671d64d0e1c6cd0d3e5b",
      chainId: 80002, //polygonAmoy
      // Modify here to show different item
      itemForSale: "1",
      // NFT price ($0.02) USDC
      price: "0",
    };

    const chainId = saleConfig.chainId;
    const recipientAddress = address;
    const currencyAddress = saleConfig.currencyAddress;
    const price = saleConfig.price;
    const collectionAddress = saleConfig.nftTokenAddress;

    const collectionContractABI = [
      { type: "constructor", inputs: [], stateMutability: "nonpayable" },
      {
        type: "function",
        name: "DEFAULT_ADMIN_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          { name: "_owner", type: "address", internalType: "address" },
          { name: "_id", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "balanceOfBatch",
        inputs: [
          { name: "_owners", type: "address[]", internalType: "address[]" },
          { name: "_ids", type: "uint256[]", internalType: "uint256[]" },
        ],
        outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "baseURI",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "batchBurn",
        inputs: [
          { name: "tokenIds", type: "uint256[]", internalType: "uint256[]" },
          { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "batchMint",
        inputs: [
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenIds", type: "uint256[]", internalType: "uint256[]" },
          { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "burn",
        inputs: [
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "contractURI",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getRoleAdmin",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getRoleMember",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "index", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getRoleMemberCount",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "grantRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "hasRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "initialize",
        inputs: [
          { name: "owner", type: "address", internalType: "address" },
          { name: "tokenName", type: "string", internalType: "string" },
          { name: "tokenBaseURI", type: "string", internalType: "string" },
          { name: "tokenContractURI", type: "string", internalType: "string" },
          { name: "royaltyReceiver", type: "address", internalType: "address" },
          {
            name: "royaltyFeeNumerator",
            type: "uint96",
            internalType: "uint96",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          { name: "_owner", type: "address", internalType: "address" },
          { name: "_operator", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "isOperator", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "renounceRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "revokeRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "royaltyInfo",
        inputs: [
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "salePrice", type: "uint256", internalType: "uint256" },
        ],
        outputs: [
          { name: "", type: "address", internalType: "address" },
          { name: "", type: "uint256", internalType: "uint256" },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "safeBatchTransferFrom",
        inputs: [
          { name: "_from", type: "address", internalType: "address" },
          { name: "_to", type: "address", internalType: "address" },
          { name: "_ids", type: "uint256[]", internalType: "uint256[]" },
          { name: "_amounts", type: "uint256[]", internalType: "uint256[]" },
          { name: "_data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          { name: "_from", type: "address", internalType: "address" },
          { name: "_to", type: "address", internalType: "address" },
          { name: "_id", type: "uint256", internalType: "uint256" },
          { name: "_amount", type: "uint256", internalType: "uint256" },
          { name: "_data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          { name: "_operator", type: "address", internalType: "address" },
          { name: "_approved", type: "bool", internalType: "bool" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setBaseMetadataURI",
        inputs: [
          { name: "tokenBaseURI", type: "string", internalType: "string" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setContractName",
        inputs: [{ name: "tokenName", type: "string", internalType: "string" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setContractURI",
        inputs: [
          { name: "tokenContractURI", type: "string", internalType: "string" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setDefaultRoyalty",
        inputs: [
          { name: "receiver", type: "address", internalType: "address" },
          { name: "feeNumerator", type: "uint96", internalType: "uint96" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setTokenRoyalty",
        inputs: [
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "receiver", type: "address", internalType: "address" },
          { name: "feeNumerator", type: "uint96", internalType: "uint96" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tokenSupply",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "totalSupply",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "uri",
        inputs: [{ name: "_id", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
          {
            name: "_owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleAdminChanged",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleGranted",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleRevoked",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "TransferBatch",
        inputs: [
          {
            name: "_operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_ids",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
          {
            name: "_amounts",
            type: "uint256[]",
            indexed: false,
            internalType: "uint256[]",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "TransferSingle",
        inputs: [
          {
            name: "_operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "_id",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
          {
            name: "_amount",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "URI",
        inputs: [
          {
            name: "_uri",
            type: "string",
            indexed: false,
            internalType: "string",
          },
          {
            name: "_id",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      { type: "error", name: "InvalidArrayLength", inputs: [] },
      { type: "error", name: "InvalidInitialization", inputs: [] },
    ];

    const purchaseTransactionData = encodeFunctionData({
      abi: collectionContractABI,
      functionName: "mint",
      args: [recipientAddress, saleConfig.itemForSale, "1", toHex(0)],
    });

    const swapModalSettings = {
      collectibles: [
        {
          tokenId: "1",
          quantity: "1",
        },
      ],
      chain: chainId,
      price,
      targetContractAddress: collectionAddress,
      recipientAddress: address!,
      currencyAddress,
      collectionAddress,
      enable: true,
      creditCardProviders: [],
      copyrightText: "ⓒ2024 Sequence",
      onSuccess: (txnHash: string) => {
        console.log("success!", txnHash);
      },
      onError: (error: Error) => {
        console.error(error);
      },
      txData: purchaseTransactionData,
    };

    openSelectPaymentModal(swapModalSettings);
  };

  return (
    <CardButton
      title="Mint an NFT"
      description="This custom call directly uses the mint method of the NFT contract (Test)."
      onClick={onClick}
    />
  );
};

export default Testing;
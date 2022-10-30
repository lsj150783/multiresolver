export const loadTippingContract = async (
  ethersProvider?: provider,
): Promise<Contract | undefined> => {
  (CONTRACT_ABI = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'AdminAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'AdminDeleted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'delegateHandle',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'delegateAddress',
          type: 'address',
        },
      ],
      name: 'DelegateAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'delegateHandle',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'delegateAddress',
          type: 'address',
        },
      ],
      name: 'DelegateDeleted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'paymentId_hash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'string',
          name: 'IDrissHash',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
      ],
      name: 'PaymentDone',
      type: 'event',
    },
    {
      inputs: [{ internalType: 'string', name: '', type: 'string' }],
      name: 'IDrissHashes',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'adminAddress', type: 'address' },
      ],
      name: 'addAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'delegateAddress', type: 'address' },
        { internalType: 'string', name: 'delegateHandle', type: 'string' },
      ],
      name: 'addDelegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'delegateAddress', type: 'address' },
        { internalType: 'string', name: 'delegateHandle', type: 'string' },
        { internalType: 'uint256', name: 'percentage', type: 'uint256' },
      ],
      name: 'addDelegateException',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      name: 'amounts',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'contractOwner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: '', type: 'string' }],
      name: 'delegate',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'adminAddress', type: 'address' },
      ],
      name: 'deleteAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: 'delegateHandle', type: 'string' },
      ],
      name: 'deleteDelegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: 'receiptId', type: 'string' },
        { internalType: 'address', name: 'paymAddr', type: 'address' },
      ],
      name: 'hashReceipt',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'paymentId_hash', type: 'bytes32' },
        { internalType: 'string', name: 'IDrissHash', type: 'string' },
        { internalType: 'string', name: 'delegateHandle', type: 'string' },
      ],
      name: 'payNative',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      name: 'receipts',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferContractOwnership',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: 'receiptId', type: 'string' },
        { internalType: 'address', name: 'paymAddr', type: 'address' },
      ],
      name: 'verifyReceipt',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
        { internalType: 'string', name: 'delegateHandle', type: 'string' },
      ],
      name: 'withdraw',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ]),
    (CONTRACT_ADDRESS = '0x066d3AE28E017Ac1E08FA857Ec68dfdC7de82a54');
  return await new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    ethersProvider,
  );
};

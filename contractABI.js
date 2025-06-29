
// ABI الخاص بعقد TBC الحقيقي على Ethereum
const contractAddress = "0x0000000000000000000000000000000000000000"; // 👈 استبدل بعنوان عقدك
const contractABI = [
  // أدخل ABI الخاص بعقدك الحقيقي هنا من Etherscan أو Remix
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];

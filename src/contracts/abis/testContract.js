const testContract = {
  "address": "0x73c4666c0f0343edb6477323a18bdd9409a69fd3",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "name": "save",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "name": "getValue",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "name": "testContract"
};
module.exports = testContract
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain evil include kiwi surround taxi'; 
let testAccounts = [
"0x2365539a5c099cd4f4218fb8af9604ebde29e08c60fba4681d6f1161d40c5fae",
"0x01bb55b2cb3e631c433ce94dd310125b3778677b1f9713037b794a29fd80d4ad",
"0x21fddca755b633520c317dcdeaf3c842682cf80343a137adfce5d78068a08978",
"0x2be932c03d9f57b23722bcf4d3e5258c62c56e4edaf09e14df6e7cda5b2bda31",
"0xbb2df17a5e97031aac82646af43fbb6b64fc830a4906713ea1eabba50f765407",
"0xfc061c978db0433b562b1fda42037f8018a997706be269d2c8372e59c97dcb8c",
"0x0d027e3be1ededd0b914413439b2b3eff16df50caf08edb06c26fbee5ab58477",
"0xd9cf44cf5ec26be9b1730ce267c1dab42b844d7d5443d4e08bac51505e9ed93c",
"0x2842913187442a9add37279d8c9e92d318d7f5c8a255cc4c80edc15a27d4d0af",
"0xbf00e65b8ad490bfb452244b0b99403433a77ec95151c25880a9be3d969a3092"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure top film decrease noble honey join light army gift'; 
let testAccounts = [
"0x7de756b89caaba07343e2a862f8878bf8cc27282b5639d9698eebb0cd9d050db",
"0xf2c50deb82777df316a60d884f4894876d5aedf06b1315df9c254ef3fe317c49",
"0xe3676dbfd919c1b71da45002a1e288a781c166c766e5fb608bbd692ec723e882",
"0xed8130ca3dbc8b70da2c07177ec7f4db8975a9753c651d5f8b2a840a8597f901",
"0xea065b9cd90a0ef742b2489cb46b1a31a9f479a2f3a46c2da348f69af5134a24",
"0xd0807e62e950f688b14c7229a5e36c18abccc47c9707a3ab6dbab563ae1cd776",
"0xf6dcda7a097d7fce433cc0b36747267ab4cc7c7856aee2c1e99d5fece7442bc5",
"0x2b0c68bf6a6d169872b75d344cc24713abe588a1e391506860ee504c2d8ee66e",
"0x41d8ce706476e6dd071745bc477930ef90b5a8a4f7dcafabb82fbf7cc5eb96e4",
"0xf254ed007385db8bc2b258ce3fff6d788aaf358c8d0258f7565490753dc725f7"
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
            version: '^0.5.11'
        }
    }
};

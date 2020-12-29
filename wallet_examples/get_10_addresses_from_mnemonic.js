const Web3 = require('web3');
const web3 = new Web3();
const bip39 = require('bip39')
const HDKey = require('hdkey')
const mnemonic="tag volcano eight thank tide danger coast health above argue embrace heavy";
console.log(`Start mnemonic: ${mnemonic}`);

const seed=bip39.mnemonicToSeedSync(mnemonic)
const hdWallet = HDKey.fromMasterSeed(seed);

for (var i=0;i<10;i++) {

    var root = hdWallet.derive("m/44'/60'/0'/0/"+i)
    var privkey = "0x"+root.privateKey.toString('hex');
    console.log(`Private key:        ${privkey}`);

    var account=web3.eth.accounts.privateKeyToAccount(privkey);
    console.log(`Account:            ${account.address}`);

    // priv key: 0x04BFCEDBBAA686F15643DB581857BF06CE19830D10CBA4EBF4B35899F1410AD4
    // account:  0x6c728716a68499d486cDA1701AB13C7b57f30aA0
    // compare to: https://iancoleman.io/bip39/ - tab "BIP44" - Coin: ETH


 
}
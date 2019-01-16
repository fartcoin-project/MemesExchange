'use strict';

exports.recaptcha_priv_key = 'Google_captcha_privkey';
exports.password_private_suffix = 'All_coin.conf_the_same_RPCUser';
exports.SSL_KEY = '../ssl_certificates/privkey.pem'; //change to your ssl certificates private key
exports.SSL_CERT = '../ssl_certificates/fullchain.pem'; //change to your ssl certificates fullchain

exports.walletspassphrase = {
    'LTC' : 'Wallet_encryption_Pass1',
    'FART' : 'Wallet_encryption_Pass2',
    'BTC' : 'Wallet_encryption_Pass3',
    'DOGE' : 'Wallet_encryption_Pass4'
};

'use strict';

exports.object = {
    c : function(strCoin) {
        try {
            return exports.object[strCoin][exports.object.coin];
        }
        catch(e) {
            return strCoin;
        }
    },
    l : function(str) {
        try {
            return this.dict['_words_'][str][this.dict.lang];
        }
        catch(e) {
            return str;
        }
    },
    setLanguage : function(lang) {
        if (lang === 'en')
            this.lang = 0;
        if (lang === 'nl')
            this.lang = 1;
    },
    'lang' : 0,
    '_words_' : {
        'Buy' : ['Buy', 'Koop'],
        'Sell' : ['Sell', 'Verkoop'],
        'buy' : ['buy', 'koop'],
        'Faucet' : ['Faucet', 'Kraan'],
        'Forum' : ['Forum', 'Forum'],
        'sell' : ['sell', 'verkoop'],
        'Buying' : ['Buying', 'Kopen'],
        'Selling' : ['Selling', 'Verkopen'],
        'Help' : ['Account', 'Account'],
        'Wallet' : ['Wallet', 'Portemonee'],
        'Exchange' : ['Exchange', 'Beurs'],
        'Trade' : ['Trade', 'Handel'],
        'Support' : ['Support', 'Ondersteuning'],
        'Fees' : ['Fees', 'Kosten'],
        'Login' : ['Login', 'Inloggen'],
        'Your active orders' : ['Your active orders', 'Actieve bestellingen'],
        'Your history' : ['Your history', 'Geschiedenis'],
        'Trade history' : ['Trade history', 'Handel Geschiedenis'],
        'Forgot your password?' : ['Forgot your password?', 'Wachtwoord vergeten?'],
        'New to memesexchange?' : ['New to MemesExchange?', 'Nieuw bij MemesExchange?'],
        'Sign up now!' : ['Sign up now!', 'Inschrijven!'],
        'memesexchange - Fartcoin Exchange' : ['MemesExchange.com - Get your MemeCoins!', 'MemesExchange.com - Haal hier je MemeCoins!']
    }
};

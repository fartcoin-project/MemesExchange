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
        if (lang == 'en')
            this.lang = 0;
        if (lang == 'ru')
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
        'Help' : ['Help', 'Help'],
        'Wallet' : ['Wallet', 'Portemonee'],
        'Exchange' : ['Exchange', 'Beurs'],
        'Trade' : ['Trade', 'Handel'],
        'Support' : ['Support', 'Hulp'],
        'Fees' : ['Fees', 'Honorarium'],
        'Login' : ['Login', 'Login'],
        'Your active orders' : ['Your active orders', 'Je actieve bestellingen'],
        'Your history' : ['Your history', 'Je geschiedenis'],
        'Trade history' : ['Trade history', 'Handel geschiedenis'],
        'Forgot your password?' : ['Forgot your password?', 'Wachtwoord vergeten?'],
        'New to memesexchange?' : ['New to memesexchange?', 'Nieuw bij memesexchange?'],
        'Sign up now!' : ['Sign up now!', 'Schrijf je nu in!'],
        'memesexchange - Fartcoin Exchange' : ['memesexchange - Fartcoin Exchange', 'memesexchange - Fartcoin Beurs']
    }
};

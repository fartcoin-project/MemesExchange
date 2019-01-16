
# These are the Tables being created when first time launching the Exchange

CREATE TABLE KeyValue (key TEXT UNIQUE PRIMARY KEY, value TEXT);
CREATE TABLE users (login TEXT UNIQUE, email TEXT UNIQUE, password TEXT, info TEXT, PRIMARY KEY (login, email));
CREATE TABLE chatban (userID TEXT UNIQUE, startBanTime INTEGER, endBanTime INTEGER, comment TEXT, PRIMARY KEY (userID));
CREATE TABLE apikeys (userid INTEGER, key TEXT UNIQUE PRIMARY KEY, read INTEGER, write INTEGER, withdraw INTEGER, info TEXT);
CREATE TABLE sessions (token TEXT UNIQUE PRIMARY KEY, time TEXT, userid INTEGER);
CREATE TABLE support (hash TEXT UNIQUE PRIMARY KEY, time TEXT, subject TEXT, email TEXT, message TEXT, state TEXT);
CREATE TABLE coins (name TEXT UNIQUE PRIMARY KEY, ticker TEXT UNIQUE, icon TEXT, address TEXT, rpc_user TEXT, rpc_password TEXT, info TEXT);
CREATE TABLE balance (userID TEXT, coin TEXT, balance TEXT, history TEXT, info TEXT, FOREIGN KEY(coin) REFERENCES coins(name));
CREATE TABLE orders (userID TEXT, coin TEXT, buysell TEXT, amount TEXT, price TEXT, price_pair TEXT, time TEXT, info TEXT, uuid TEXT UNIQUE PRIMARY KEY, FOREIGN KEY(coin) REFERENCES coins(name));
CREATE TABLE history (buyUserID TEXT, sellUserID TEXT, coin TEXT, coin_pair TEXT, fromSellerToBuyer TEXT, fromBuyerToSeller TEXT, buyerChange TEXT, comission TEXT, time TEXT, buysell TEXT, price TEXT, info TEXT, FOREIGN KEY(coin, coin_pair) REFERENCES coins(name, name));
CREATE TABLE referals (userFrom TEXT, pageFrom TEXT, IP TEXT, timeIn TEXT, timeReg TEXT, userRegID TEXT UNIQUE, history TEXT, uid TEXT UNIQUE, PRIMARY KEY (userRegID, uid));
CREATE TABLE payments (userTo INTEGER, userFrom INTEGER, volume TEXT, coin TEXT, time INTEGER, comment TEXT);
CREATE TABLE coupons (uid TEXT UNIQUE, UserFrom INTEGER, timeCreated INTEGER, amount TEXT, coin TEXT, timeClosed INTEGER, UserTo INTEGER, comment TEXT, PRIMARY KEY (uid));
CREATE TABLE balancelog (userID TEXT, coin TEXT, amount TEXT, time INTEGER, log TEXT);
CREATE INDEX uid ON balance (userID);
CREATE INDEX uid_orders ON orders (userID, coin, buysell, amount, price);
CREATE INDEX history_index ON history (buyUserID, sellUserID, coin, coin_pair, time);



    RUB_NAME: "Ruble",
    RUB_TICKER: "RUB",

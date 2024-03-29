'use strict';

exports.DEBUG_LOG = true;

exports.share = {
    my_port: 13335
};

const PRIVATE_CONSTANTS_PATH = "../server/modules/private_constants";

////////////////////////////////////////////////////////////////////////////////////
// Private constants
const PRIVATE = require(require(PRIVATE_CONSTANTS_PATH).PRIVATE_PATH || PRIVATE_CONSTANTS_PATH);
/////////////////////////////////////////////////////////////////////////////////////

exports.IsAllowedAddress = function(addr)
{
    return !!(PRIVATE.IsUnlimitedAddress && PRIVATE.IsUnlimitedAddress(addr));
        

}

exports.WEB_SOCKETS = null;



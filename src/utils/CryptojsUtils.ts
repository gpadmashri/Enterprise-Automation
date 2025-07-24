let CryptoJSUtil = require("crypto-js");

const SALT = process.env.SALT || "defaultSAlt";

export function encrypt(text: String){
const cipherText = CryptoJSUtil.AES.encrypt(text,SALT).toString();
return cipherText;
}

export function decrypt(cipherText:String)
{
    const bytes = CryptoJSUtil.AES.decrypt(cipherText,SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}

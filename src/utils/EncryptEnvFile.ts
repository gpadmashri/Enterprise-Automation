let CryptoJSUtil = require("Crypto-js");
let fs = require("fs");
let path = require("path");

const SALT = process.env.SALT + "dafaultSalt";

const currentDir = __dirname;

//Go one level above back to source
const srcDir = path.resolve(currentDir, "..");

//Change to config folder
const configDir = path.resolve(srcDir, "config");
const envFilePath = `${configDir}\\.env`;
if (process.env.NODE_ENV) {
    const envFilePath = `${configDir}\\.env.${process.env.NODE_ENV}`
}
console.log(envFilePath);

export function encryptEnvFile() {
    //Read .env file
    const envFileContent = fs.readFileSync(envFilePath, "utf-8");
    const envLines = envFileContent.split("\n");


    //Encrypt values and update array
    const encryptedLines = envLines.map((line) => {
        const [key, value] = line.split("=");

        if (value) {
            const encryptedValue = CryptoJSUtil.AES.encrypt(value, SALT).toString();

            return `${key}=${encryptedValue}`
        }
        return line;
    });
    //Join the line and write back to .env file
    const updatedEnvContent = encryptedLines.join("\n");
    fs.writeFileSync(envFilePath,updatedEnvContent,"utf-8");
    console.log("Encryption completed. Updated .env file")
}
export function decryptEnvFile()
{
    //Read the .env file
    const envFileContent = fs.readFileSync(envFilePath, "utf-8");
    const envLines = envFileContent.split("\n");

    //Decrypt values and update the array
    const decryptedLines = envLines.map((line) => {
        
        const[key, value] =line.split("=");

        if(value)
        {
        const decryptedValue = CryptoJSUtil.AES.decrypt(value,SALT).toString(CryptoJSUtil.enc.utf8);
        return `${key} = ${decryptedValue}`
        }
        return line;
    });

    //Join the lines and write back to .env file

    const updatedEnvContent = decryptedLines.join("\n");
    fs.writeFileSync(envFilePath,updatedEnvContent,"utf-8");

    console.log("Decryption complete. Updated .env file");
}
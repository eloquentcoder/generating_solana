// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();

// console.log(`✅ Generated keypair!`)
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);

import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from the .env file

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(keypair.publicKey.toBase58());
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { useEffect, useState } from "react";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

function Home() {
  const [mnemonic, setMnenomic] = useState("");

  useEffect(() => {
    const mnemonic = generateMnemonic();
    const seed = mnemonicToSeedSync(mnemonic);

    const i = 0;
    const path = `m/44'/501'/${i}'/0'`;
    const { key: derivedSeed } = derivePath(path, seed.toString("hex"));
    const { secretKey } = nacl.sign.keyPair.fromSeed(derivedSeed);

    const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
    const privateKey = Keypair.fromSecretKey(secretKey).secretKey;

    console.log(privateKey, publicKey);
  }, []);

  return <div>SUp hLeppo</div>;
}

export default Home;

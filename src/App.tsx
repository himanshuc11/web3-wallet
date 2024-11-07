import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { useEffect } from "react";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = e.currentTarget.name;
    const url = `/generate/${name}`;
    navigation(url);
  };

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

  return (
    <div className="p-12">
      <h1 className="text-3xl text-white font-bold">
        W-Wallet supports multiple blockchains
      </h1>
      <h3 className="text-white opacity-70">
        Choose a blockchain to get started.
      </h3>
      <div className="mt-10">
        <Button
          className="mr-5 w-32"
          variant="secondary"
          name="sol"
          onClick={handleClick}
        >
          Solana
        </Button>
        <Button
          className="w-32"
          variant="secondary"
          name="eth"
          onClick={handleClick}
        >
          Ethereum
        </Button>
      </div>
    </div>
  );
}

export default Home;

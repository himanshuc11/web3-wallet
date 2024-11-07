import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { toast } from "sonner";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

const generateWallet = (
  userPhrase: string,
  currency: "sol" | "eth",
  walletNumber = 0
) => {
  const isValid = validateMnemonic(userPhrase) || userPhrase === "";
  if (!isValid) {
    toast("Wrong Seed phrase");
    return null;
  }

  const seedPhrase = userPhrase === "" ? generateMnemonic() : userPhrase;
  const seed = mnemonicToSeedSync(seedPhrase);

  const coinCode = currency === "sol" ? "501'" : "60'";
  const path = `m/44'/${coinCode}/${walletNumber}'/0'`;
  const { key: derivedSeed } = derivePath(path, seed.toString("hex"));
  const { secretKey } = nacl.sign.keyPair.fromSeed(derivedSeed);

  const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
  const privateKey = Buffer.from(secretKey).toString("hex");

  return { publicKey, privateKey, seedPhrase };
};

export { generateWallet };

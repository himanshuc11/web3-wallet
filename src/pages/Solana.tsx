import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateWallet } from "@/helper/generateCode";

function Solana() {
  const [userPhrase, setUserPhrase] = useState("");

  const handleClick = () => {
    const output = generateWallet(userPhrase, "sol");
    console.log(output);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhrase(e.target.value);
  };

  return (
    <div className="p-12">
      <h1 className="text-3xl text-white font-bold">Secret Recovery Phrase</h1>
      <h3 className="text-white opacity-70">
        Save these words in a safe place.
      </h3>
      <div className="flex flex-1 mt-10">
        <Input
          placeholder="Enter your secret phrase (Or leave blank to generate)"
          type="password"
          className="h-11"
          onChange={handleInputChange}
        />
        <Button
          className="ml-5 w-32 h-11"
          variant="secondary"
          name="sol"
          onClick={handleClick}
        >
          Generate Wallet
        </Button>
      </div>
    </div>
  );
}

export default Solana;

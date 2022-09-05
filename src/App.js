import "./App.scss";
import { IoIosCopy } from "react-icons/io";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState({
    lengthPass: 20,
    lowercase: true,
    uppercase: true,
    number: true,
    symbol: true,
  });
  const [copied, setCopied] = useState(false);
  const handleGeneratePass = () => {
    const defaultCharacters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      number: "0123456789",
      symbol: "!@#$%^&*(){}[]=<>/,.",
    };
    const charactersArr = [
      typePass.lowercase ? defaultCharacters.lowercase : [],
      typePass.uppercase ? defaultCharacters.uppercase : [],
      typePass.number ? defaultCharacters.number : [],
      typePass.symbol ? defaultCharacters.symbol : [],
    ].join("");
    if (charactersArr.length > 0) {
      let generatedPassword = "";
      for (let i = 0; i < typePass.lengthPass; i++) {
        generatedPassword +=
          charactersArr[Math.floor(Math.random() * charactersArr.length)];
      }
      setPassword(generatedPassword);
      setCopied(false);
    }
  };
  const handleCopy = () => {
    if (password.length > 0) {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  };

  return (
    <div className="App">
      <div className="GeneratePassword">
        <div className="title">Password Generator</div>
        <div className="password">
          <div className="generatedPassword">{password}</div>
          {copied ? (
            <div className="copied">Copied</div>
          ) : (
            <IoIosCopy className="copy-btn" onClick={handleCopy}></IoIosCopy>
          )}
        </div>
        <div className={!(
            typePass.lowercase ||
            typePass.uppercase ||
            typePass.number ||
            typePass.symbol
          ) ? (
            "error showError"
          ) : (
            "error closeError"
          )}>
          <p>Please choose at least one type of password</p>
        </div>
        <div className="length property">
          <span>Length</span>
          <input
            type="number"
            name=""
            id=""
            value={typePass.lengthPass}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > 0 && value <= 20) {
                setTypePass({ ...typePass, lengthPass: value });
              }
            }}
          />
        </div>
        <div className="lowercase property">
          <span>Lowercase</span>
          <input
            type="checkbox"
            name=""
            id=""
            value={typePass.lowercase}
            checked={typePass.lowercase}
            onChange={(e) => {
              setTypePass({ ...typePass, lowercase: e.target.checked });
            }}
          />
        </div>
        <div className="uppercase property">
          <span>Uppercase</span>
          <input
            type="checkbox"
            name=""
            id=""
            value={typePass.uppercase}
            checked={typePass.uppercase}
            onChange={(e) => {
              setTypePass({ ...typePass, uppercase: e.target.checked });
            }}
          />
        </div>
        <div className="number property">
          <span>Number</span>
          <input
            type="checkbox"
            name=""
            id=""
            value={typePass.number}
            checked={typePass.number}
            onChange={(e) => {
              setTypePass({ ...typePass, number: e.target.checked });
            }}
          />
        </div>
        <div className="symbol property">
          <span>Symbol</span>
          <input
            type="checkbox"
            name=""
            id=""
            value={typePass.symbol}
            checked={typePass.symbol}
            onChange={(e) => {
              setTypePass({ ...typePass, symbol: e.target.checked });
            }}
          />
        </div>
        <div className={"generate-btn"}>
          <button onClick={handleGeneratePass} className={!(
            typePass.lowercase ||
            typePass.uppercase ||
            typePass.number ||
            typePass.symbol
          ) ? (
            "notAllow"
          ) : (
            ""
          )}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;

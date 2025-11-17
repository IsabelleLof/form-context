import { useState } from "react";
import Step1PersonData from "./steps/Step1PersonData";
// här kommer senare Step2, Step3, ...

function App() {
  const [step, setStep] = useState(1);

  const next = () => setStep(prev => Math.min(prev + 1, 5));
  const prev = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Flerstegsformulär</h1>
      <p>Steg {step} av 5</p>

      {step === 1 && <Step1PersonData />}
      {/* {step === 2 && <Step2ContactData />} osv */}

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={prev} disabled={step === 1}>
          Tillbaka
        </button>
        <button onClick={next} disabled={step === 5}>
          Nästa
        </button>
      </div>
    </div>
  );
}

export default App;


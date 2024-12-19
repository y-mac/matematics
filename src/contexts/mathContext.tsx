import { createContext, useState } from "react";
import { Serie } from "../classes/serie";

interface MathContextType {
    valueToCalculate: number,
    calculatedNumber: number,
    calculateNumber: (inputNumber:number) => void,
    captureNumber: (value:number) => void,
}

export const MathContext = createContext<MathContextType | undefined >(undefined);

export const MathProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [valueToCalculate, setValueToCalculate] = useState(0); 
    const [calculatedNumber, setCalculatedNumber] = useState(0); 

    const captureNumber = (value:number) => {
        setValueToCalculate(value);
    }
        
    const calculateNumber = (inputNumber:number) => {
      const serie = new Serie();
      const result = serie.calcularTermino(inputNumber);
      setCalculatedNumber(result);
    };
  
    return (
      <MathContext.Provider value={{ valueToCalculate, captureNumber, calculateNumber, calculatedNumber}}>
        {children}
      </MathContext.Provider>
    );
}
import { useEffect } from "react";
import useMathContext from "../../hooks/useMathContext";
import Message from "../Message/Message";

const Calculator = () => {
    const{valueToCalculate,calculateNumber,calculatedNumber} = useMathContext();

    useEffect(()=>{
        calculateNumber(valueToCalculate);
    },[valueToCalculate]);

    

    return (
      <>
        {valueToCalculate > 0 && (
            <Message>
              <p> El resultado es : {calculatedNumber} </p>
            </Message>
        )}
      </>  
    );
}
 
export default Calculator;
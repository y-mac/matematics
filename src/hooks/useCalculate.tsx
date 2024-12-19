import { useEffect } from "react";
import useMathContext from "./useMathContext";
import Message from "../Components/Message/Message";

const UseCalculate = () => {
    const{valueToCalculate,calculateNumber,calculatedNumber} = useMathContext();

    useEffect(()=>{
        calculateNumber(valueToCalculate);
    },[valueToCalculate]);

    const messageComponent = () => {
      return (
        <Message> 
            El resultado es: {calculatedNumber}
        </Message>
      )
    }

    return messageComponent;
}
 
export default UseCalculate;
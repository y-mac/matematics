import { useContext } from "react";
import { MathContext } from "../contexts/mathContext";

const useMathContext = () => {
    
    const context = useContext(MathContext);
    
    if (context === undefined) {
        throw new Error ("useMathContext debe ser usado dentro de un MathProvider");
    }
    return context;
}
 
export default useMathContext;
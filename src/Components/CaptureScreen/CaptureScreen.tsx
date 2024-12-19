import { Formik } from "formik";
import useMathContext from "../../hooks/useMathContext";
import Calculator from "../Calculator/Calculator";

interface errors {
  number?: string
}


const CaptureScreen = () => {
    
    const {captureNumber} = useMathContext();
    

    return ( 
      <>
        <Formik 
          initialValues={{number: ''}} 
          validate={values => {
            const errors:errors = {};
            if (!values.number || parseInt(values.number) <= 0 ) {
              errors.number = 'por favor inserta un número';
            }  
            return errors;
          }}
          onSubmit={(values) => {
            captureNumber(parseInt(values.number));
          }}
        >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="number"
             name="number"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.number}
           />
           {errors.number && touched.number && errors.number}
           <button type="submit" disabled={!values.number}>
             Submit
           </button>
         </form>
       )}
        </Formik>
        <Calculator />
      </>
    );
}
 
export default CaptureScreen;
const Message: React.FC<{children:React.ReactNode}> = ({children}) => {
    return ( 
       <>
         <div className="message">
            {children}
         </div>
       </>
    );
}
 
export default Message;
import {React, useEffect} from "react";
import {motion, AnimatePresence } from 'framer-motion';

const Error = ({error, setError}) => {

    useEffect(() => {
        if (error) {
            console.log("Error component received:", error);
            const timer = setTimeout(() => {
                setError(null); 
                console.log("Error set to null after delay");
            }, 4000);
    
            
            return () => clearTimeout(timer);
        }
    }, [error]); 


    return (
        <AnimatePresence>
            {error && error.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="error-message"
                >
                    <h1>{error.message}</h1>
                </motion.div>
            )}
        </AnimatePresence>
    );

};

export default Error;
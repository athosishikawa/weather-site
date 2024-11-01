import React from "react";
import {motion} from 'framer-motion';

const WeatherFooter = ({ data, tempUnit, velocityUnit, isSelected, setIsSelected }) => {

    return(
        <motion.div 
            transition={{layout : {duration: 0.8, type: "spring"}}}
            layout 
            whileHover={{ scale: 1.05 }}
            className='footer' 
            onClick={() =>setIsSelected(!isSelected)}
        >
            <motion.h2 layout="position">Condições Atuais</motion.h2>
            {isSelected &&(
                <motion.div className='footer-itens'>
                    <div className='sensation'>
                        {data.main ? data.main.feels_like.toFixed() : null} {tempUnit}
                        <p>Sensação Térmica</p>
                    </div>
                    <div className='humidity'>
                        {data.main ? data.main.humidity : null}%
                        <p>Humidade</p>
                    </div>
                    <div className='wind'>
                        {data.wind ? data.wind.speed.toFixed() : null} {velocityUnit}
                        <p>Vento</p>
                    </div>
                </motion.div>
            )}
            
        </motion.div>
        );
};

export default WeatherFooter;
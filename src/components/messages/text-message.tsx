import { motion } from "framer-motion";

function TextMessage(props : {text: string, position : "left" | "right"}) {
    return (

        

        props.position === "right" ?

        <motion.div initial={{opacity : 0, scale: 0.1}}
        animate={{opacity : 1, scale: 1}}
        transition={{type : 'spring', 
                duration : 0.01,
                damping : 20,
                stiffness : 200,
                mass : 1,
                ease : "easeInOut"

            }} className="text-left break-words p-2 bg-primary rounded-lg max-w-[70%]">
            {props.text}
        </motion.div>

        :

        <motion.div initial={{opacity : 0, scale: 0.1}}
        animate={{opacity : 1, scale: 1}}
        transition={{type : 'spring', 
                duration : 0.01,
                damping : 20,
                stiffness : 200,
                mass : 1,
                ease : "easeInOut"

            }} className="text-left break-words p-2 bg-secondary rounded-lg max-w-[70%]">
              {props.text}
        </motion.div>


        
    );
}

export default TextMessage;
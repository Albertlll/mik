
import { motion } from 'framer-motion';
import {buttonMessageContent} from '../props'
import { Button } from '../ui/button';

function ButtonMessage(props: buttonMessageContent["content"]) {
    return (
        <motion.div initial={{opacity : 0, scale: 0.1}}
        animate={{opacity : 1, scale: 1}}
        transition={{type : 'spring', 
                duration : 0.01,
                damping : 20,
                stiffness : 200,
                mass : 1,
                ease : "easeInOut"
  
            }} className="w-[60%] h-full gap-4 flex flex-col justify-between items-center bg-secondary p-3 rounded-lg">

        <div className="text-3xl text-primary break-normal w-[60%] font-semibold">
        {
            props.header     
        }
        </div>
        {/* 
    <div className="text-sm text">
        {props.messageData.content.description}
    </div> */}
    <a href={props.url}>
        <Button>
            {props.buttonBody}
        </Button>

    </a>
        
    </motion.div>

    );
}

export default ButtonMessage;
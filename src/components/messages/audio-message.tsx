import { motion } from "framer-motion";
import AudioPlayer from "../audio-player";

function AudioMessage(props : {audioURL : string}) {
    return (
        <motion.div
        initial={{opacity : 0, scale: 0.1}}
        animate={{opacity : 1, scale: 1}}
        transition={{type : 'spring', 
                duration : 0.01,
                damping : 20,
                stiffness : 200,
                mass : 1,
                ease : "easeInOut"

            }} className="relative w-[60%] text-left break-words p-2 bg-primary rounded-lg flex justify-center">

            <AudioPlayer barGap={2} barWidth={2} audioHeight={40} audioURL={props.audioURL} setAudioURL={null}/>

    </motion.div>

    );
}

export default AudioMessage;
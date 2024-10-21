import { messageDataProps } from "@/storage/interfaces";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import avatarImg from '../assets/avatarbot.jpg'
import { motion } from "framer-motion";
import AudioPlayer from "./audio-player";
function Message(props: { messageData: messageDataProps }) {
    console.log(props.messageData.position)
    return (
        

        
        <div className={props.messageData.position == "left" ?
            "w-full flex justify-end" :
            "w-full flex justify-start gap-3"
        }>

            { props.messageData.type == 'audio' ?
            <motion.div
                    initial={{opacity : 0, scale: 0.1}}
                    animate={{opacity : 1, scale: 1}}
                    transition={{type : 'spring', 
                            duration : 0.01,
                            damping : 20,
                            stiffness : 200,
                            mass : 1,
                            ease : "easeInOut"
 
                        }} className={props.messageData.position == "left" ?
                "relative w-[40%] text-left break-words p-2 bg-primary rounded-lg flex justify-center" :
                "relative w-[60%] text-left break-words p-2 bg-secondary rounded-lg flex justify-center"}>

                        <AudioPlayer barGap={2} barWidth={2} audioHeight={40} audioURL={props.messageData.content.audioURL} />

                </motion.div>

                :
                    
                    props.messageData.type == 'text' &&
                    <motion.div
                    initial={{opacity : 0, scale: 0.1}}
                    animate={{opacity : 1, scale: 1}}
                    transition={{type : 'spring', 
                            duration : 0.01,
                            damping : 20,
                            stiffness : 200,
                            mass : 1,
                            ease : "easeInOut"
 
                        }} className={props.messageData.position == "left" ?
                "relative max-w-[70%] text-left break-words p-2 bg-primary rounded-lg" :
                "relative max-w-[70%] text-left break-words p-2 bg-secondary rounded-lg"}>
                    {props.messageData.content.message.toString()}
                </motion.div>

                        }
                

          </div>

    );
}

export default Message;
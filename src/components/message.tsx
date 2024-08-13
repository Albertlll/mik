import { messageDataProps } from "./props";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {Button} from '@/components/ui/button'
import avatarImg from '../assets/avatarbot.jpg'
import { motion } from "framer-motion";
import AudioPlayer from "./audio-player";
function Message(props : {messageData : messageDataProps}) {
    console.log(props.messageData.position)
    return (
        <div className={props.messageData.position == "left" ?
        "w-full flex justify-end" :
        "w-full flex justify-start gap-3"
        }>   


        {
        props.messageData.position != "left" && 
                <motion.div

                initial={{opacity : 0, scale: 0.1}}
                animate={{opacity : 1, scale: 1}}
                transition={{type : 'spring', 
                        duration : 0.01,
                        damping : 20,
                        stiffness : 200,
                        mass : 1,
                        ease : "easeInOut"

                    }} 
                
                
                >
                <Avatar>
                    <AvatarImage src={avatarImg}/>
                </Avatar>
                </motion.div>

            }
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

                {props.messageData.type == 'button' ?
                <div className="w-full h-full gap-4 flex flex-col justify-between items-center">

                    <div className="text-4xl text-primary">
                        {props.messageData.content.header + '₽'}
                    </div>
{/* 
                    <div className="text-sm text">
                        {props.messageData.content.description}
                    </div> */}

                    <Button>
                        {props.messageData.content.buttonBody}
                    </Button>
                </div>
                :
                props.messageData.type == 'audio'?
                <div className="relative w-[70%]">
                    <AudioPlayer barGap={2} barWidth={2} audioHeight={40} audioURL={props.messageData.audioURL} />
                </div>
                :
                props.messageData.message.toString()
                }
            </motion.div>    
        </div>

    );
}

export default Message;
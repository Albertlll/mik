import Message from "./message";
import { MessageInput } from "./message-input-area";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion";
export function Chat() {
    const [messagesData, setMessagesData] = useState<Array<{message : string, position : 'left' | 'right'}>>([]);

    var lastMessageRef = useRef<any>(null);


    useEffect(() => {
        lastMessageRef.current?.scrollIntoView(false);
    }, [messagesData]);


    return (
        <div className="relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background">

            <ScrollArea className="relative w-full h-full p-3">
                {messagesData.map((messageData, index) => (
                    <AnimatePresence key={index} initial={true}>
                        <div ref={lastMessageRef} className="mt-3">
                            <Message messageData={messageData}/>
                        </div>


                    </AnimatePresence>
                ))}
            </ScrollArea>

            <div className="relative top-auto w-full bottom-0 p]">
            <MessageInput setMessagesData={setMessagesData}/>
            </div>
        </div>
    );

}

import Message from "./message";
import { MessageInput } from "./message-input-area";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {AnimatePresence } from "framer-motion";
import { messageDataProps } from "./props";
import { useMessagesStore } from "@/storage/MessagesStore";
export function Chat() {

    const { messages } = useMessagesStore();


    var lastMessageRef = useRef<any>(null);


    useEffect(() => {
        lastMessageRef.current?.scrollIntoView(false);
    }, [messages]);


    return (
        <div className="relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background mob:p-1 mob:border-transparent">

            <ScrollArea className="relative w-full h-full p-3 mob:p-0">
                {messages.map((messageData, index) => (

                    <AnimatePresence key={index} initial={true}>

                        
                        <div ref={lastMessageRef} className="mt-3 mob:mt-5">
                            <Message messageData={messageData}/>
                        </div>


                    </AnimatePresence>
                ))}
            </ScrollArea>

            <div className="relative top-auto w-full bottom-0 p]">
            <MessageInput/>
            </div>
        </div>
    );

}

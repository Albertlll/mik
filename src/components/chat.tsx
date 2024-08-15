import Message from "./message";
import { MessageInput } from "./message-input-area";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {AnimatePresence } from "framer-motion";
import { messageDataProps } from "./props";
import { httpClient } from "@/httpClient";
import { StompSessionProvider, useSubscription, useStompClient} from "react-stomp-hooks";


export function Chat() {
    const [messagesData, setMessagesData] = useState<Array<messageDataProps>>([]);

    var lastMessageRef = useRef<any>(null);



    const stompClient = useStompClient();

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView(false);
    }, [messagesData]);

    useEffect(() => {
        if (stompClient) {
            console.log("csdcsd")

            stompClient.subscribe(
                "/user/" + localStorage.getItem('uuid') + "/queue/messages",
                (message) => {
                    setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', message: message.body, content: null, type: 'text', audioURL: ''}])
                    // setMessagesData((prev : Array<messageDataProps>) => return [...prev, {position : 'left', message : message, type : 'text'}])
                }
            )
    
        }}, [stompClient])




    // stompClient.connect({}, () => {
    //     console.log('Connected');
    //     stompClient.subscribe(
    //     "/user/" + localStorage.getItem('uuid') + "/queue/messages",
    //     onMessageReceived
    //   );})


    useEffect(() => {


        if (!localStorage.getItem('uuid')) { 

            httpClient.get('/api/get-uuid').then(
                (data) => {
                    console.log(data.data)
                    localStorage.setItem('uuid', data.data.uuid);

            })
        }
        console.log(stompClient)
        if (stompClient) {
            stompClient.publish({
                destination: "/",
                body: "Echo 123",
        });}





        // console.log(socket.active)


        // socket.on('open', () => {
        //     console.log('Соединение установлено');
        // })


        // socket.on('message', (data) => {
        //     console.log(data);
        //     setMessagesData((prevMessages) => [...prevMessages, data]);
        // });

        
    }, []);



    return (

        <div className="relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background mob:p-1 mob:border-transparent">

            <ScrollArea className="relative w-full h-full p-3 mob:p-0">
                {messagesData.map((messageData, index) => (

                    <AnimatePresence key={index} initial={true}>

                        
                        <div ref={lastMessageRef} className="mt-3 mob:mt-5">
                            <Message messageData={messageData}/>
                        </div>


                    </AnimatePresence>
                ))}
            </ScrollArea>

            <div className="relative top-auto w-full bottom-0 p]">
            <MessageInput stompClient={stompClient} setMessagesData={setMessagesData}/>
            </div>
        </div>



    );

}

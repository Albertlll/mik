import { CornerDownLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import AudioRecorder from "./audio-recorder"
import { useState, useRef, SetStateAction, Dispatch} from "react"
import { messageDataProps } from "./props"
// import data from '../assets/data.json'
// import { describe } from "node:test"
import AudioPlayer from "./audio-player"
import { Client } from "react-stomp-hooks"
// import { socket } from "./chat"

function getBase64(file : Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (!reader.result) {return}
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });
}


export function MessageInput(props: {setMessagesData : Dispatch<SetStateAction<messageDataProps[]>>, stompClient : Client | undefined}) {

  const [message, setMessage] = useState<string>('');

  const [audioURL, setAudioURL] = useState<string>('');
  
  const [audioBlob, setAudioBlob] = useState<Blob>();

  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleMessageSend = () => {
    if (message.trim() === '' && !audioURL || !props.stompClient) {

      return

    }

    if (audioURL && audioBlob){

      // socket.emit('/app/chat', 'mvjmfdmvmdf')

      props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'right', content : {audioURL : audioURL}, type : 'audio'}]);
      setAudioURL('')
      // var reader = new FileReader();
      // reader.readAsDataURL(audioBlob); 
      // reader.onloadend = function() {
      // var base64data = reader.result;
      // console.log(base64data);

      getBase64(audioBlob).then((base64data) => {

        if (!props.stompClient) {return;}
        console.log(base64data)
        props.stompClient.publish({
          destination: "/app/chat/audio",
          body: JSON.stringify({senderId: localStorage.getItem('uuid'), content: {audioURL : base64data}}),
        })
      
      })

      


      return
    }

      props.stompClient.publish({
        destination: "/app/chat/text",
        body: JSON.stringify({senderId: localStorage.getItem('uuid'), content: {message : message}}),
    })
    


    // var num = Math.floor(Math.random() * data.length)
    
    props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'right', content : {message : message}, type : 'text'}])
    setTimeout(() => {



    props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'left', content : {header : '500', buttonBody : 'Отправить', description : 'Внуку для школы'}, type : 'button'}])
    
    }, 300)

    setTimeout(() => {

      props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'left', content : {message : 'Нажмите на кнопку Отправить, чтобы прислать деньги внуку. После нажатия вы войдете в систему СБП для перевода, где вы сможете сверить данные и подтвердить перевод.'}, type : 'text'}])
      
      }, 300)

    
      props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {type : 'chart', position: 'left', content : {data : 123}}])
    

    

    if (messageInputRef.current) {
      messageInputRef.current.value = ''
    }

    setMessage('')
}

  return (
    <div
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring grid gap-3 grid-rows-[100px_40px]"
    >
      <Label htmlFor="message" className="sr-only">
        Сообщение

      </Label>

      <div className="h-full w-full">

      {
        audioURL ?
        
        <div className="bg-secondary">

        <AudioPlayer barGap={8} barWidth={5} audioHeight={80} audioURL={audioURL} setAudioURL={setAudioURL}/>
        </div> 

        // {
        //   "container": "body",
        //   "height": 100,
        //   "width": 239,
        //   "splitChannels": false,
        //   "normalize": false,
        //   "waveColor": "#ff4e00",
        //   "progressColor": "#dd5e98",
        //   "cursorColor": "#ddd5e9",
        //   "cursorWidth": 3,
        //   "barWidth": 5,
        //   "barGap": 8,
        //   "barRadius": 30,
        //   "barHeight": 0.9,
        //   "barAlign": "",
        //   "minPxPerSec": 1,
        //   "fillParent": true,
        //   "url": "/wavesurfer-code/examples/audio/audio.wav",
        //   "mediaControls": false,
        //   "autoplay": false,
        //   "interact": true,
        //   "dragToSeek": true,
        //   "hideScrollbar": false,
        //   "audioRate": 1,
        //   "autoScroll": true,
        //   "autoCenter": true,
        //   "sampleRate": 8000
        // }
        :

        <Textarea
        ref={messageInputRef}
        id="message"
        placeholder="Напишите здесь свое сообщение"
        className="h-full resize-none shadow-none !bg-transparent !outline-none !border-transparent"
        onChange={(e) => setMessage(e.target.value)}
      />
      }

    </div>

    
      <div className="flex items-center p-3 pt-0 gap-3">
        <Button size="sm" className="ml-auto gap-1.5"
        onMouseDown={(e) => {e.preventDefault()}}
        onClick={() => {handleMessageSend()}}>
          Отправить сообщение
          <CornerDownLeft className="size-3.5" />
        </Button>
        <AudioRecorder setAudioBlob={setAudioBlob} setAudioURL={setAudioURL}/>

      </div>
    </div>
  )
}

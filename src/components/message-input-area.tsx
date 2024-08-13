import { CornerDownLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useState, useRef} from "react"
import { messageDataProps } from "./props"
// import data from '../assets/data.json'
// import { describe } from "node:test"





export function MessageInput(props: {setMessagesData : Function}) {

  const [message, setMessage] = useState<string>('');

  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleMessageSend = () => {
    if (message.trim() === '') {
      return
    }

    // var num = Math.floor(Math.random() * data.length)
    
    props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'left', message : message, type : 'text'}])
    setTimeout(() => {

    props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'right', content : {header : '500', buttonBody : 'Отправить', description : 'Внуку для школы'}, type : 'button'}])
    
    }, 300)

    setTimeout(() => {

      props.setMessagesData((prev : Array<messageDataProps>) => [...prev, {position : 'right', message : 'Нажмите на кнопку Отправить, чтобы прислать деньги внуку. После нажатия вы войдете в систему СБП для перевода, где вы сможете сверить данные и подтвердить перевод.', type : 'text'}])
      
      }, 300)

    if (messageInputRef.current) {
      messageInputRef.current.value = ''
    }

    setMessage('')
}

  return (
    <div
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
    >
      <Label htmlFor="message" className="sr-only">
        Сообщение
      </Label>
      <Textarea
        ref={messageInputRef}
        id="message"
        placeholder="Напишите сдесь свое сообщение"
        className="min-h-12 resize-none shadow-none !bg-transparent !outline-none !border-transparent"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center p-3 pt-0">
        <Button size="sm" className="ml-auto gap-1.5"
        onMouseDown={(e) => {e.preventDefault()}}
        onClick={() => {handleMessageSend()}}>
          Отправить сообщение
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}

function TextMessage(props : {text: string, position : "left" | "right"}) {
    return (

        

        props.position === "right" ?

        <div className="text-left break-words p-2 bg-primary rounded-lg max-w-[70%]">
            {props.text}
        </div>

        :

        <div className="text-left break-words p-2 bg-secondary rounded-lg max-w-[70%]">
              {props.text}
        </div>


        
    );
}

export default TextMessage;
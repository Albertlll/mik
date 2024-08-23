function TextMessage(props : {text: string, position : "left" | "right"}) {
    return (

        props.position === "right" ?

        <div className="text-left break-words p-2 bg-primary rounded-lg">
            {props.text}
        </div>

        :

        <div className="text-left break-words p-2 bg-secondary rounded-lg">
              {props.text}
        </div>


        
    );
}

export default TextMessage;
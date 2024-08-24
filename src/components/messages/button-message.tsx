
import {buttonMessageContent} from '../props'
import { Button } from '../ui/button';

function ButtonMessage(props: buttonMessageContent["content"]) {
    return (
        <div className="w-full h-full gap-4 flex flex-col justify-between items-center bg-secondary p-3 rounded-lg">

        <div className="text-4xl text-primary break-all w-[60%]">
        {
            props.header     
        }
        </div>
        {/* 
    <div className="text-sm text">
        {props.messageData.content.description}
    </div> */}
    <a href={props.url}>
        <Button>
            {props.buttonBody}
        </Button>

    </a>
        
    </div>

    );
}

export default ButtonMessage;
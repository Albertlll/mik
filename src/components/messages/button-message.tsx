
import {buttonMessageContent} from '../props'
import { Button } from '../ui/button';

function ButtonMessage(props: buttonMessageContent) {
    return (
        <div className="w-full h-full gap-4 flex flex-col justify-between items-center bg-secondary p-3 rounded-lg">

        <div className="text-4xl text-primary">
        {
            props.content.header + '₽'            
        }

        </div>
        {/* 
    <div className="text-sm text">
        {props.messageData.content.description}
    </div> */}
        <Button>
            {props.content.buttonBody}
            
        </Button>
    </div>

    );
}

export default ButtonMessage;
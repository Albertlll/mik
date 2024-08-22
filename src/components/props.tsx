export interface abstractMessageDataProps{

    position : 'left' | 'right',
}

export interface textMessageContent extends abstractMessageDataProps{
    type : 'text',
    content : {    
        message : string
    }
}

export interface audioMessageContent extends abstractMessageDataProps{
    type : 'audio',
    content : {    
        audioURL : string
    }
}

export interface chartMessageContent extends abstractMessageDataProps{
    type : 'chart',
    content : {    
        data : any
    }
}

export interface buttonMessageContent extends abstractMessageDataProps{
    type : 'button',
    content : {
        header : string,
        buttonBody : string,
        description : string
    }
}


export type messageDataProps = textMessageContent | audioMessageContent | buttonMessageContent | chartMessageContent;
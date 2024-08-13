export interface messageDataProps{

    position : 'left' | 'right',
    message : string,
    content : {header: string, buttonBody : string, description : string}
    type : 'text' | 'button',
}
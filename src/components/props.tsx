export interface messageDataProps{

    position : 'left' | 'right',
    message : string,
    content : {header: string, buttonBody : string, description : string}
    audioURL : string,  // Only for type 'audio'
    type : 'text' | 'button' | 'audio',
}
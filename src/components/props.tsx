export interface messageDataProps{

    position : 'left' | 'right',
    message : string,
    content : {header: string | undefined, buttonBody : string | undefined, description : string | undefined} | null
    audioURL : string,  // Only for type 'audio'
    type : 'text' | 'button' | 'audio',
}
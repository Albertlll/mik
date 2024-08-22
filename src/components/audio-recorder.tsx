import { useState, useRef, useEffect } from "react";
// import { Button } from "./ui/button";
// import { UrlObject } from "url";
import { Mic, MicOff } from "lucide-react";

const AudioRecorder = (props : {setAudioURL : Function, setAudioBlob : Function}) => {
    const mimeType = "audio/ogg";

    // const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioChunks, setAudioChunks] = useState<Array<Blob>>([]);

    useEffect(() => {
        getMicrophonePermission();
    }, [])

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });


                if (streamData.active) {localStorage.setItem('permission', 'true'); setStream(streamData);
                }
                else {localStorage.setItem('permission', 'false')}
                // setPermission(true);

            } catch (err) {
                localStorage.setItem('permission', 'false')
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        console.log(stream)
        if (!stream) return;
        
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, {mimeType: mimeType});
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        try{
        mediaRecorder.current.start();
        } catch (err) {
            localStorage.setItem('permission', 'false')
            getMicrophonePermission()
            return;
        }
        let localAudioChunks : Array<Blob> = [];
        mediaRecorder.current.ondataavailable = (event) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
      };

    
    const stopRecording = () => {
        if (!mediaRecorder.current || !stream) return;

        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          //creates a blob file from the audiochunks data
           const audioBlob = new Blob(audioChunks, { type: mimeType});
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           //sets the audioURL to the props.setAudioURL function
        //    var link = document.createElement("a");

        //     link.download = "audio.opus";
        //     link.href = audioUrl;
        //     document.body.appendChild(link);
        //     setTimeout(() => {
        //         link.click();
        //         document.body.removeChild(link);
        //     }, 33);
           console.log(audioUrl);
           props.setAudioURL(audioUrl);
           props.setAudioBlob(audioBlob);
           setAudioChunks([]);
        };
      };


      const microPress = () => {
        console.log(recordingStatus);

        if (localStorage.getItem('permission') == 'false' || !localStorage.getItem('permission')){
            getMicrophonePermission();
            return;
        };

        if (recordingStatus === "inactive") {
            startRecording();
        } else {
            stopRecording();
        }

      }



    return (
        // <div>

        //     <div className="audio-controls">
        //         {!permission ? (
        //         <Button onClick={getMicrophonePermission} type="button">
        //             Get Microphone
        //         </Button>
        //         ) : null}

        //         {permission && recordingStatus === "inactive" ? (
        //         <Button onClick={startRecording} type="button">
        //             Start Recording
        //         </Button>
        //         ) : null}

        //         {recordingStatus === "recording" ? (
        //         <Button onClick={stopRecording} type="button">
        //             Stop Recording
        //         </Button>
        //         ) : null}
        //     </div>

        //     {audio ? (
        //     <div className="audio-container">
        //         <audio src={audio} controls></audio>
        //         <a download href={audio}>
        //             Download Recording
        //         </a>
        //     </div>
        //     ) : null}


        // </div>

        <button onClick={() => {microPress()}} className='flex justify-center items-center w-9 h-9 rounded-full bg-primary'>
{/* 
            {localStorage.getItem('permission') == 'true' ? 
            <Mic color={recordingStatus == 'recording' ? 'red' : 'white'}/>
            :
            <MicOff color='white'/>
            } */}

            <Mic color={recordingStatus == 'recording' ? 'red' : 'white'}/>


        </button>
    );
};
export default AudioRecorder;
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { UrlObject } from "url";
import { Mic, MicOff } from "lucide-react";

const AudioRecorder = (props : {setAudioURL : Function}) => {
    const mimeType = "audio/webm";

    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioChunks, setAudioChunks] = useState<Array<Blob>>([]);
    const [audio, setAudio] = useState<string>('');

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        if (!stream) return;
        
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, {mimeType: mimeType});
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
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
           const audioBlob = new Blob(audioChunks, { type: mimeType });
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           console.log(audioUrl);
           setAudio(audioUrl);
           props.setAudioURL(audioUrl);
           setAudioChunks([]);
        };
      };


      const microPress = () => {
        if (!permission){
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

            {permission ? 
            <Mic color={recordingStatus == 'recording' ? 'red' : 'white'}/>
            :
            <MicOff color='white'/>
            }

        </button>
    );
};
export default AudioRecorder;
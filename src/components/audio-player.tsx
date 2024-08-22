
import WavesurferPlayer from '@wavesurfer/react'
import { Play, Pause, Trash} from 'lucide-react'
import { useState } from'react'
import WaveSurfer from 'wavesurfer.js'
function AudioPlayer(props : { audioURL : string, audioHeight : number, barWidth : number, barGap : number, setAudioURL : Function | null}) {

    const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
  
    const onReady = (ws : WaveSurfer) => {
      setWavesurfer(ws)
      setIsPlaying(false)
    }

    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause()
      }

    const deleteAudio = () => {
        wavesurfer && wavesurfer.destroy()
        setWavesurfer(null)
        setIsPlaying(false)
        props.setAudioURL &&
        props.setAudioURL('')
    }


    return (
        <div className='w-full h-full flex items-center justify-center gap-3'>

        <button onClick={onPlayPause} className='rounded-full bg-primary h-12 w-12 relative flex items-center justify-center'>
            {isPlaying? <Pause fill='white' color='white' strokeWidth={0}/> : <Play fill='white' color='white' strokeWidth={0}/>}

        </button>

        <div className=' w-[80%] relative inline-block p-2'>
            <WavesurferPlayer
                fillParent={true}
                height={props.audioHeight}
                url={props.audioURL}
                waveColor='#ff4e00'
                progressColor='#dd5e98'
                cursorColor="#ddd5e9"
                cursorWidth={3}
                barWidth={props.barWidth}
                barGap={props.barGap}
                barRadius={30}
                mediaControls={false}
                autoplay={false}
                interact={true}
                dragToSeek={true}
                sampleRate={8000}
                normalize={true}
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                />
        </div>


        {
            props.setAudioURL &&
            <button onClick={deleteAudio} className='rounded-full bg-primary h-12 w-12 relative flex items-center justify-center'>
                <Trash color='white'/>
            </button>

        }

            
        </div>
    );
}

export default AudioPlayer;
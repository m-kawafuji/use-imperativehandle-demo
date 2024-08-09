import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './index.module.css';

type VideoRef = {
  play(): Promise<void>;
  pause(): void;
};

const VideoPlayer = forwardRef<VideoRef, JSX.IntrinsicElements['video']>(
  function VideoPlayer(props, ref) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => {
      return {
        play: async () => await videoRef.current?.play(),
        pause: () => videoRef.current?.pause(),
      };
    }, []);

    return (
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <video ref={videoRef} {...props} />
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={() => videoRef.current?.play()}>
            play
          </button>
          <button type="button" onClick={() => videoRef.current?.pause()}>
            pause
          </button>
        </div>
      </div>
    );
  },
);

export default VideoPlayer;

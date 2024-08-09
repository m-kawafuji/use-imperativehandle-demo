'use client';

import { useRef } from 'react';
import VideoPlayer from '../VideoPlayer';
import styles from './index.module.css';

export default function VideoWrapper() {
  const videoRef = useRef<React.ElementRef<typeof VideoPlayer>>(null);

  return (
    <div className={styles.container}>
      <VideoPlayer
        ref={videoRef}
        src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
        width={640}
        height={360}
      />
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
}

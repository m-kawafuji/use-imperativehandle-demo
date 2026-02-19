'use client';

import { useRef } from 'react';
import VideoPlayer, { type VideoRef } from '../VideoPlayer';
import styles from './index.module.css';

export default function VideoWrapper() {
  const videoRef = useRef<VideoRef>(null);

  return (
    <div className={styles.container}>
      <VideoPlayer ref={videoRef} src="/sample.mp4" width={640} height={360} />
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

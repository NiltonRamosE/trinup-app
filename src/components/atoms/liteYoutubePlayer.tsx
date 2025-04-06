interface LiteYoutubePlayerProps {
  videoId: string;
  videoTitle?: string;
}

export function LiteYoutubePlayer({ videoId, videoTitle}: LiteYoutubePlayerProps) {
  return (
  <lite-youtube
    videoid={videoId}
    videotitle={videoTitle}
    rel="0"
    videoplay="Reproducir video"
    style={{
      borderRadius: '12px',
    }}
  ></lite-youtube>
  );
}
  
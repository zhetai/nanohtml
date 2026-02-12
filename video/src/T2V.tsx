import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const TextToVideo: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;
  
  const textOpacity = interpolate(progress, [0, 0.5, 1], [0, 1, 0], {
    extrapolateRight: 'clamp',
  });
  
  const scale = interpolate(progress, [0, 1], [0.8, 1.2], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#2c3e50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '80px',
        color: 'white',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ opacity: textOpacity, transform: `scale(${scale})` }}>
        {text}
      </div>
    </AbsoluteFill>
  );
};

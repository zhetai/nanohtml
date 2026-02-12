import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const BlendTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* Background layer */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity,
          zIndex: 1,
        }}
      />
      
      {/* Overlay layer */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          mixBlendMode: 'overlay',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '100px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        BLEND MODE
      </div>
    </AbsoluteFill>
  );
};

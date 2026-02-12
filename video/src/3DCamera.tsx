import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const CameraFlyThrough: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;

  const z = interpolate(progress, [0, 1], [-2000, 2000], {
    extrapolateRight: 'clamp',
  });
  
  const rotateY = interpolate(progress, [0, 1], [-90, 90], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'black',
        perspective: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          transform: `translateZ(${z}px) rotateY(${rotateY}deg)`,
          width: '500px',
          height: '500px',
          backgroundColor: '#3498db',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          color: 'white',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(52, 152, 219, 0.5)',
        }}
      >
        3D Transition
      </div>
    </AbsoluteFill>
  );
};

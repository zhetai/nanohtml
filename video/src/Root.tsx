import { Composition } from 'remotion';
import { CameraFlyThrough } from './3DCamera';
import { BlendTransition } from './BlendMode';
import { TextToVideo } from './T2V';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CameraFlyThrough"
        component={CameraFlyThrough}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BlendTransition"
        component={BlendTransition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TextToVideo"
        component={TextToVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: 'Hello World',
        }}
      />
    </>
  );
};

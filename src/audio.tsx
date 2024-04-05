import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = (props: { linkes: string }) => (
  <AudioPlayer
    style={{ borderRadius: 5 }}
    autoPlay={false}
    src={props.linkes}
    onPlay={(e) => console.log(e, 'onPlay')}
    // other props here
  />
);
export default Player;

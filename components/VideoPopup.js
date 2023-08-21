import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

const VideoPopup = ({videoID}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
		<button className="play-btn popup-youtube border-0" onClick={()=> setOpen(true)} style={{backgroundColor:'transparent'}} ><i className="flaticon-play-button text-white" ></i></button>
    </React.Fragment>
  )
}
export default VideoPopup;
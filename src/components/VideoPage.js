import React from "react";
import { useParams } from "react-router-dom";
import RightSidevd from "./RightsideVd";

const VideoPage = () => {
  const { videoId } = useParams();

  // Define the video data for each video ID (you can use an array or object here)
  const videoData = {
    1: {
      videoUrl: "https://www.youtube.com/embed/rhPSo4_Tgi0?si=vwYTlSZzQqlE5MpV",
    },
    2: {
      videoUrl: "https://www.youtube.com/embed/emNkJGwcusQ?si=9v5v94CB5wndmrBG",
    },
    3: {
      videoUrl: "https://www.youtube.com/embed/CJrVX-ta4ss?si=P0WhY3IeIQ1kLJTo",
    },
    4: {
      videoUrl: "https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1",
    },
    5: {
      videoUrl: "https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs",
    },
    6: {
      videoUrl: "https://www.youtube.com/embed/yRpLlJmRo2w?si=Hh0uALW7vyd-HjY8",
    },
    7: {
      videoUrl: "https://www.youtube.com/embed/BgScmBg-bsk?si=LRHSBPmlK1KYOS9c",
    },
    8: {
      videoUrl: "https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4",
    },
    9: {
      videoUrl: "https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa",
    },
    10: {
      videoUrl: "https://www.youtube.com/embed/Oes56FoYABc?si=ZhB6nPTEZ7t11d-B",
    },
    11: {
      videoUrl: "https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1",
    },
    12: {
      videoUrl: "https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs",
    },
    13: {
      videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc?si=RWFA8NpD7Hxi9UDX",
    },
    14: {
      videoUrl: "https://www.youtube.com/embed/2OTq15A5s0Y?si=Q0D1XjamLr_0EUx7",
    },
    15: {
      videoUrl: "https://www.youtube.com/embed/Vblvb_s12zM?si=Iv7EdqUkCZxgon9l",
    },
    16: {
      videoUrl: "https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4",
    },
    17: {
      videoUrl: "https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa",
    },
    18: {
      videoUrl: "https://www.youtube.com/embed/dBUBYz75gdk?si=-d6TpfVHAHvVdNlW",
    },
    19: {
      videoUrl: "https://www.youtube.com/embed/cYga4JhX5yM?si=-LzCDtltnD7MvQL2",
    },
    20: {
      videoUrl: "https://www.youtube.com/embed/lh3MGxP3Rl8?si=gYBFB-3eyJYoAvJS",
    },
    21: {
      videoUrl: "https://www.youtube.com/embed/QV2kGyEApuQ?si=PX6turRUOGsfxyVs",
    },
    22: {
      videoUrl: "https://www.youtube.com/embed/GlEY28YLffs?si=xCp4lW7iQ2qSeoFX",
    },
    23: {
      videoUrl: "https://www.youtube.com/embed/ESnrn1kAD4E?si=Vl_A9T2f9lD2xUPW",
    },
    24: {
      videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y?si=7AKVGzYLjqE67qcc",
    },
    25: {
      videoUrl: "https://www.youtube.com/embed/lh3MGxP3Rl8?si=0Yv62repgd39O-38",
    },
    26: {
      videoUrl: "https://www.youtube.com/embed/b1HiZvIlWQk?si=ohkeckzdYvtGPX5K",
    },
    27: {
      videoUrl: "https://www.youtube.com/embed/TIu_KrdWO1M?si=hnL3Vov41P7kq7Vs",
    },
    28: {
      videoUrl: "https://www.youtube.com/embed/tu1DeYVOJL4?si=JK9HWh4aQ2JTBlnD",
    },
    29: {
      videoUrl: "https://www.youtube.com/embed/c_dlAdBhPng?si=2xXwW-H-qJgVIer",
    },
    30: {
      videoUrl: "https://www.youtube.com/embed/6kcmTTYDPF0?si=o6ujbuc0Oy8VWgHV",
    },
  };

  const video = videoData[videoId];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div
      style={{ marginLeft: "250px", position: "absolute", top: "100px" }}
      className="video"
    >
      <div className="content">
        <iframe
          name={`v${videoId}`}
          width="750px"
          height="450px"
          src={video.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="info">
          <h4 className="title_1">{video.title}</h4>
          <p className="channel-name">{video.channelName}</p>
          <p className="views">{video.views}</p>
        </div>
        <RightSidevd></RightSidevd>
      </div>
    </div>
  );
};

export default VideoPage;

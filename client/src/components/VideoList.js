import React, { useEffect } from "react";
import { getVideos } from "../actions";
import { connect } from "react-redux";

const VideoList = (props) => {

  useEffect(() => {
    props.getVideos(props.videoTerm);
  }, [props.videoTerm]);

  console.log(props.videos, "props.videos")
  console.log(props.videoTerm, "props.videoTerm")

  const renderVideos = () => {
    if (props.videos.length > 0) {
      return props.videos.map((vid) => {
        console.log(vid.snippet.title, "vid.snippet.title")
        return <div>{vid.snippet.title}</div>;
      });
    }
  };

  return (
    <div>
      psssshwaawaaawa
      <div>{renderVideos()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos.videos,
    videoTerm: state.videoTerm,
  };
};

const mapDispatchToProps = {
  getVideos: (term) => getVideos(term),
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

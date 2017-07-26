import React,{Component} from 'react';

class VideoListItem extends Component{
	constructor(props){
		super(props);
	}


	render(){
		var videoItem = this.props.video;
		const onVideoSelect = this.props.onVideoSelect;
		console.log(videoItem);
		const imageUrl = videoItem.snippet.thumbnails.default.url;
		return(
			<li onClick={()=>onVideoSelect(videoItem)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>	
				<div className="media-body">
					<div className="media-heading">{videoItem.snippet.title}</div>
				</div>	
			</div>
			</li>
		);
	}
}


export default VideoListItem;
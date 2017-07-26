import React,{Component} from 'react';
import VideoListItem from './video_list_item';

class Videolist extends Component{
	constructor(props){
		super(props)
	}
	
	render(){

		const videos = this.props.videos;
		const onVideoSelect = this.props.onVideoSelect;
		const list = videos.map(function(video){
			return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video}/>	
		});
		console.log(list);
		return(
			<ul className="col-md-4 list-group">
				{list}
			</ul>
		);
	}
}

export default Videolist;
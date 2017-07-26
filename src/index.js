
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import youTubeSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyChcXrYy86n5SY5SypnJAUxR2h5b-0iM-0';



class App extends Component{

	constructor(){
		super();
		this.state = {
			videos : [],
			selectedVideo :null
		};

		this.videoSearch("surfboards")
	}

	videoSearch(term){
		youTubeSearch({key:API_KEY,term},(videos) =>{
			this.setState({videos: videos,selectedVideo:videos[2]});
		});
	}
	render(){
		const bouneFunction = _.debounce((term)=>{this.videoSearch(term)} ,300);
		return(
			<div>
				<SearchBar onSearchTermChange={bouneFunction}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<Videolist onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})}   videos={this.state.videos}/>
  		</div>
		);
	}
} 

ReactDOM.render(<App/>, document.querySelector('.container'));


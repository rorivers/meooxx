import React , { Component }  from 'react'
import { Icon } from 'antd'


class MusicPlayer extends Component {
	state={
		type: 'play-circle-o'
	}
	handleClick = () => {
		
		let type = this.state.type
		
		 type=(type == 'pause-circle-o'?'play-circle-o':'pause-circle-o') 
		
		
		this.setState({
			type : type
		})
		
		if(!this.audio.paused) {
			 this.audio.pause()
			 return
		 
		}
		this.audio.play()
		 
		
	}
	
	
	render() {
			
	  const { type } = this.state
		return (
			<Icon
				title='献曲半首。。'
				style={{
					cursor:'pointer'
				}}
				type={type} 
				onClick={this.handleClick}  >
			<audio 
				ref={(audio)=>this.audio=audio}
				src='http://www.51mp3ring.com/softdown/at201732161020.mp3'>
			</audio>
			</Icon>
	)
	
	}
}

export default MusicPlayer
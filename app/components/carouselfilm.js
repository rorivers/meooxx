

import { Carousel } from 'antd'
import killer from '../images/killer.jpg'
import sherlock from '../images/sherlock.jpg'
import React from 'react'
import  godf from '../images/godf.jpg'
import captain from '../images/captain.jpg'

const CarouselFilm = () => (
	<Carousel autoplay dots>
	   <div>	
				<img src={killer} />
		 </div>
		  <div>	
				<img src={sherlock} />
		 </div>
		  <div>	
				<img src={captain} />
		 </div>
		  <div>	
				<img src={godf} />
		 </div>
	</Carousel>
)  

export default CarouselFilm
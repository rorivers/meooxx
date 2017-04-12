import React from 'react'
import IMGone from '../images/one.jpg'
import avatar from '../images/avatar.jpg'
import { Timeline, Progress, Icon, Row, Col } from 'antd'

const Rezume = () => {
	return (
		<div style={{
					fontWeight: 'bold',
					fontSize: '1em',
					}}>
			<div 
					style={{
						color: '#fff',
						width: '100%',
						height:'180px',
						display:'block',
						backgroundImage:`url(${IMGone})`}}>.
				<Row 
					justify='start'
					//type='flex' 
					align='center'>
					<Col span={3} offset={3}>
						<span style={{
							display: 'block',
							height: '100px',
							}} >
							<img 
								style={{
									width: '100px',
									borderRadius: '50%'}}
								src={avatar} />
						</span>
					</Col>
					<Col span={12} offset={1}>
						<div 
							style={{
								
								display: 'block'
						}}>
							
							<span>
								<Icon type='smile-o'/>2017届毕业生
							</span>
							<span style={{display:'block'}}>
								<Icon type='heart-o'/>有空喜欢打羽毛球， 下午，晚上写代码
							</span>
							<span style={{display:'block'}}>
								<Icon type='compass'/>常逛的网站twitter, 知乎，cnode
							</span>
						
						</div>
					</Col>
				</Row>
			</div>
			<div>
				<span > 
				<h2>你好，</h2>
				<p>  我叫郑少秋，是一名应届毕业生，喜欢web，希望能在技术至上公司从事前端开发的工作
				</p>
				</span>
			</div>
			<Row>
			<Col span={6} offset={1}>
				<div>
					<span>
						学习经历
					</span>
					<Timeline>
						<Timeline.Item color='green'>
							2016-10-23 入坑
						</Timeline.Item>
						<Timeline.Item color='green'>
							2016-11-18 fcc课程刷完
						</Timeline.Item>
						<Timeline.Item color='blue'>
							2017-1 React ,redux
						</Timeline.Item>
						<Timeline.Item color='red'>
							2017-2 webpack构建，css
						</Timeline.Item>
						<Timeline.Item color='orange'>
							2017-3 React版Cnode
						</Timeline.Item>
							<Timeline.Item color='black'>
							2017-4 git, 准备学习node
						</Timeline.Item>
					</Timeline>
				</div>
			</Col>
			<Col span={15} offset={0}>
				<div style={{
					padding: '0',
					margin: '0',
					display: 'block',
				}}>
					
					<span style={{
						width:'100%',
						display: 'block'}}>技能
					</span>
					<Row>
						<Col span={4}>
								<Progress 
									status='success'
									width={80}
									percent={95}
									type='circle' 
									format={() => 'html'}/>
						</Col>
						<Col span={4}>
								<Progress 
									status='active'
									width={80}
									percent={90}
									type='circle' 
									format={() => 'css'}/>
						</Col>
						<Col span={4}>
							<Progress 
								status='exception'
								width={80}
								percent={95}
								type='circle' 
								format={() => 'React'}/>
						</Col>
						<Col span={4}>
								<Progress 
								status='success'
									width={80}
									percent={95}
									type='circle' 
									format={() => 'redux'}/>
						</Col>
					</Row>
					<Row style={{
						marginTop: '30px'
					}}>
						<Col span={4}>
								<Progress 
								status='active'
								width={80}
								percent={70}
								type='circle' 
								format={() => 'webpack'}/>
						</Col>
						<Col span={4}>
								<Progress 
								status='exception'
								width={80}
								percent={80}
								type='circle' 
								format={() => 'js'}/>
						</Col>
						<Col span={4}>
							<Progress 
								status='success'
								width={80}
								percent={90}
								type='circle' 
								format={() => 'router'}/>
						</Col>
						<Col span={4} >
								<Progress 
									status='active'
									width={80}
									percent={70}
									type='circle' 
									format={() => 'git'}/>
						</Col>
					</Row>						
				</div>
			</Col>
			
			</Row>
			<div style={{
				fontSize: '2em',
				marginBottom: '1em'
			}}>
				<h2>
					mroe&联系我
				</h2>
				<Row>
					<Col span={10} offset={1}>
						<a 
							target='_blank'
							href='https://github.com/meooxx'>
							<Icon type='github' />
							github
						</a>
					</Col>
				
					<Col span={10}>
						<Icon type='mail' />
						meooxx@outlook.com
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Rezume
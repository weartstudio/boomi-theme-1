import { Row, Col } from "react-bootstrap"
import Image from "next/image"
import { useState } from "react"

export default function Gallery({data}) {

	const [morePic, setMorePic] = useState(false)

	return (
		<div id="gallery" className='block'>
			<h3 className='text-md mb-5'>{data.gallery_title}</h3>
			<div className="container-sm mb-5">
				<Row className="g-5" lg={3} xs={2}>
					{data.gallery.map(
						(item,i)=>{
							if(i<3) return (
								<Col key={i}>
									<a href={item}>
										<Image src={item} width={300} height={400} alt="" className="w-100 h-auto" />
									</a>
								</Col>
							)
						}
					)}
				</Row>
				{ morePic ?
					<Row className="g-5 pt-5" lg={3} xs={2}>
						{data.gallery.map(
							(item,i)=>{
								if(i>=3) return (
									<Col key={i}>
										<a href={item}>
											<Image src={item} width={300} height={400} alt="" className="w-100 h-auto" />
										</a>
									</Col>
								)
							}
						)}
					</Row>
					:""
				}
			</div>
			<div style={{width: '250px',margin: '0 auto'}}>
				<button onClick={()=>{setMorePic(!morePic)}}>{ morePic ? "Kevesebb kép" : "Még több kép" }</button>
			</div>
		</div>
	)
}

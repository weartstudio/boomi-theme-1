import { Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function Gallery({data}) {
	return (
		<div id="gallery" className='block'>
			<h3 className='text-md mb-5'>{data.title}</h3>
			<div className="container-sm mb-5">
				<Row className="g-5" lg={3} xs={2}>
					{data.imgs.map((item,i)=>(
						<Col key={i}>
							<a href={item}>
								<Image src={item} width={300} height={400} alt="" className="w-100 h-auto" />
							</a>
						</Col>
					))}
				</Row>
			</div>
			<div style={{width: '250px',margin: '0 auto'}}>
				<button>Még több kép</button>
			</div>
		</div>
	)
}

import { Row, Col } from "react-bootstrap"

export default function ImportantNotes({data}) {
	return (
		<div id="important_notes" className="container container-md">
			<h3 className="text-xl">Fontosabb tudnivalók</h3>
			<h2 className="text-md light my-5" style={{margin: "2rem 0"}}>{data.places_title}</h2>
			<Row xs="1" md="auto" className="justify-content-around g-5">
				{data.places.map((item,i)=>(
					<Col key={i}>
						<h4 className="text-sm mb-1" dangerouslySetInnerHTML={{__html: item.title}}></h4>
						<p className="text-sm light ff-secondary" dangerouslySetInnerHTML={{__html: item.address}}></p>
					</Col>
				))}
			</Row>
		</div>
	)
}

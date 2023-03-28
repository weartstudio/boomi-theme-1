"use client"
import { Row, Col } from "react-bootstrap"
export default function HitBack({data}) {
	return (
		<div id="hitback" className="container-sm block">

			<p className="text-md mb-5" dangerouslySetInnerHTML={{__html:data.feedback_title}}></p>

			<Row className="align-items-end g-5" md={3} xs={1}>
				<Col>
					<label>
						<span>Add meg a neved</span>
						<input type="text" />
					</label>
				</Col>
				<Col>
					<label>
						<span>Hány fővel érkezel?</span>
						<input type="number" />
					</label>
				</Col>
				<Col><button>Küldés</button></Col>
			</Row>

		</div>
	)
}

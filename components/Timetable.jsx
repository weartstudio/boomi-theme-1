import Image from "next/image"

export default function Timetable({data}) {
	return (
		<div id="timetable" className="block">
			<h2 className="text-md mb-5 light">{data.title}</h2>
			<div className="grid">
				{data.details.map((item,i)=>(
					<div className="item text-md" key={i}>
						<Image src='/circle.svg' width={300} height={300} alt="" />
						<div className="text">
							<p>{item.time}</p>
							<p className="light">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

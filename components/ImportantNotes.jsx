export default function ImportantNotes({data}) {
	return (
		<div id="important_notes" className="container container-md">
			<h3 className="text-xl">{data.subtitle}</h3>
			<h2 className="text-md light my-5" style={{margin: "2rem 0"}}>{data.title}</h2>
			<div className="grid">
				{data.details.map((item,i)=>(
					<div key={i}>
						<h4 className="text-sm mb-1" dangerouslySetInnerHTML={{__html: item.title}}></h4>
						<p className="text-sm light ff-secondary" dangerouslySetInnerHTML={{__html: item.text}}></p>
					</div>
				))}
			</div>
		</div>
	)
}

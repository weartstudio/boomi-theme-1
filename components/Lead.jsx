export default function Lead({data}) {
	return (
		<div id="lead" className="container-sm block">
			<h2 className='title text-lg mb-5'>{data.intro_title}</h2>
			<div className='text text-md' dangerouslySetInnerHTML={{__html: data.intro_content}}></div>
		</div>
	)
}
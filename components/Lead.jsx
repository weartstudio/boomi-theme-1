export default function Lead({data}) {
	return (
		<div id="lead" className="container-sm block">
			<h2 className='title text-lg mb-5'>{data.title}</h2>
			<p className='text text-md'>{data.text}</p>
		</div>
	)
}
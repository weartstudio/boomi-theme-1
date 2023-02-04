export default function Hero({data}) {
	return (
		<div id="hero">
			<p className='text text-xl'>{data.text}</p>
			<h1 className='names text-xl light'>{data.names}</h1>
			<p className='dates text-xl'>{data.date}</p>
		</div>
	)
}
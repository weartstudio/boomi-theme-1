export default function Hero({data}) {
	console.log(data)
	return (
		<div id="hero">
			<p className='text text-xl'>{data.greeny_hero_1}</p>
			<h1 className='names text-xl light'>{data.greeny_hero_2}</h1>
			<p className='dates text-xl'>{data.greeny_hero_3}</p>
		</div>
	)
}
import React from 'react'

export default function Gallery({data}) {
	return (
		<div id="gallery" className='block'>
			<h3 className='text-md mb-2'>{data.title}</h3>
			<div className="container-sm grid mb-2">
				{data.imgs.map((item,i)=>(
					<a href={item} key={i}>
						<img src={item} />
					</a>
				))}
			</div>
			<div style={{width: '250px',margin: '0 auto'}}>
				<button>Még több kép</button>
			</div>
		</div>
	)
}

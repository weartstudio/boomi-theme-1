import Image from "next/image"

export default function AboutUs({data}) {
	return (
		<div id="aboutus" className="container-sm block">
			<h2 className="text-xl mb-5">{data.title}</h2>
			<div className="grid">
				<div className="img">
					<p className="text-sm">{data.name1}</p>
					<div className="frame">
						<Image src="/frame.png" width={301} height={442} alt="" />
						<Image src="/woman.png" width={243} height={381} alt="" />
					</div>
				</div>
				<div className="img">
					<p className="text-sm">{data.name2}</p>
					<div className="frame">
						<Image src="/frame.png" width={301} height={442} alt="" />
						<Image src="/man.png" width={243} height={381} alt="" />
					</div>
				</div>
				<div className="text">
					<p className="text-md light">
						{data.text}
					</p>
				</div>
			</div>
		</div>
	)
}

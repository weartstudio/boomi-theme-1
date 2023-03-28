import Image from "next/image"

export default function AboutUs({data}) {
	return (
		<div id="aboutus" className="container-sm block">
			<h2 className="text-xl mb-5">{data.about_title}</h2>
			<div className="grid">
				<div className="img">
					<p className="text-sm">{data.about_name1}</p>
					<div className="frame">
						<Image src="/frame.png" width={301} height={442} alt="" />
						<Image src={data.about_image1} width={243} height={381} alt="" />
					</div>
				</div>
				<div className="img">
					<p className="text-sm">{data.about_name2}</p>
					<div className="frame">
						<Image src="/frame.png" width={301} height={442} alt="" />
						<Image src={data.about_image2} width={243} height={381} alt="" />
					</div>
				</div>
				<div className="text">
					<p className="text-md light">
						{data.about_content}
					</p>
				</div>
			</div>
		</div>
	)
}

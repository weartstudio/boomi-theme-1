import Image from "next/image"

function Separator() {
	return (
		<div className="separator">
			<Image src="/separator.svg" width={250} height={47} alt="" />
		</div>
	)
}

export default Separator
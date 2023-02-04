export default function HitBack({data}) {
	return (
		<div id="hitback" className="container-sm block">
			<p className="text-md" dangerouslySetInnerHTML={{__html:data.title}}></p>
			<form>
				<label>
					<span>Add meg a neved</span>
					<input type="text" />
				</label>
				<label>
					<span>Hány fővel érkezel?</span>
					<input type="number" />
				</label>
				<div>
					<button>Küldés</button>
				</div>
			</form>
		</div>
	)
}

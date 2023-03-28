import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function login() {
	const [pass, setPass] = useState("")
	return (
		<>
			<Container className='py-5 my-5 text-center'>
				<h1>A meghívó megtekintéséhez jelszó szükséges!</h1>
				<Form className='mx-auto' style={{maxWidth: 500}}>
					<Form.Control name="pwi" type="password" placeholder="Írd ide a jelszót" value={pass} onChange={(e)=>setPass(e.target.value)} />
				</Form>
			</Container>
		</>
	)
}

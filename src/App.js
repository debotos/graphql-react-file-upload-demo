import React from 'react'
import './App.css'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const uploadImage = gql`
	mutation($file: Upload!) {
		changeProfileImage(image: $file) {
			secure_url
		}
	}
`

function App() {
	return (
		<Mutation mutation={uploadImage}>
			{mutate => (
				<input type="file" onChange={e => mutate({ variables: { file: e.target.files[0] } })} />
			)}
		</Mutation>
	)
}

export default App

import React from 'react'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const uploadImage = gql`
	mutation($file: Upload!) {
		changeProfileImage(image: $file) {
			secure_url
		}
	}
`

export default () => (
	<Mutation mutation={uploadImage}>
		{mutate => (
			<input type="file" onChange={e => mutate({ variables: { file: e.target.files[0] } })} />
		)}
	</Mutation>
)

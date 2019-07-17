import React from 'react'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const uploadImage = gql`
	mutation($id: ID!, $file: Upload!) {
		addProductImage(id: $id, image: $file) {
			secure_url
		}
	}
`

export default () => (
	<Mutation mutation={uploadImage} onError={error => console.log(error.message)}>
		{(mutate, { loading, data }) => {
			if (loading) return <h6>Uploading...</h6>
			if (data) return <h6>{data.addProductImage.secure_url}</h6>
			return (
				<input
					type="file"
					onChange={e =>
						mutate({
							variables: { file: e.target.files[0], id: 'f13b31b7-7a09-45bd-b747-052071c24b93' }
						})
					}
				/>
			)
		}}
	</Mutation>
)

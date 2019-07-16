import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Dropzone from 'react-dropzone'

const uploadImage = gql`
	mutation($id: ID!, $files: [Upload!]) {
		addProductImages(id: $id, images: $files) {
			secure_url
		}
	}
`

export default class MultipleUpload extends Component {
	render() {
		return (
			<Mutation mutation={uploadImage} onError={error => console.log(error.message)}>
				{(mutate, { data }) => {
					if (data) {
						console.log(data)
					}
					return (
						<Dropzone
							onDrop={acceptedFiles =>
								mutate({
									variables: {
										id: '25aaf319-cf0c-4c23-afb3-54ac07a4d266',
										files: acceptedFiles
									}
								})
							}
						>
							{({ getRootProps, getInputProps }) => (
								<section>
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<p>Drag 'n' drop some files here, or click to select files</p>
									</div>
								</section>
							)}
						</Dropzone>
					)
				}}
			</Mutation>
		)
	}
}

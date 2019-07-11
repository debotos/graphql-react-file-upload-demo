import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({
		uri: 'http://localhost:5001/graphql',
		headers: {
			'x-token':
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlOGVmODdkLTdmZDEtNDBjNC04ZTgyLTlkMTQwYTRiOTFhYyIsImVtYWlsIjoiZGVib3Rvc2Rhc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRlYm90b3MiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE1NjI4NDQ5MDksImV4cCI6MTU2Mjg0ODUwOX0.FaC46Rx9ATzWdNSQ-uAZ0lZLHifQnGHYYoTSuMF7cqY'
		}
	})
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

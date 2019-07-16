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
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiNzgxNzJmLWY3ZmUtNGJlZS04YTc3LWJjMzhkZDFhZTU2YSIsImVtYWlsIjoiZGVib3Rvc2Rhc0BnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJkZWJvdG9zIiwicm9sZSI6IkFETUlOIiwiaW1hZ2UiOm51bGwsImZ1bGxfbmFtZSI6IkRlYm90b3MgRGFzIiwicGhvbmUiOiIwMTc5MDAxNTM4MCIsImFkZHJlc3MiOiJLYXppcGFyYSwgMm5kIGxhbmUiLCJyZWdpb24iOiJCYXJpc2hhbCBTb2RvciIsImRpdmlzaW9uIjoiQmFyaXNoYWwiLCJpYXQiOjE1NjMyOTc0ODcsImV4cCI6MTU2MzkwMjI4N30.2UJwinIw64ly9ZC-UEo4wbIpUHfLfim6O2NY-wN7iZM'
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

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
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiNzgxNzJmLWY3ZmUtNGJlZS04YTc3LWJjMzhkZDFhZTU2YSIsImVtYWlsIjoiZGVib3Rvc2Rhc0BnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJkZWJvdG9zIiwicm9sZSI6IkFETUlOIiwiaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZWJvdG9zL2ltYWdlL3VwbG9hZC92MTU2MzI5ODY3NC9hZ3JvLWUtY29tbWVyY2UvQURNSU4vZGVib3Rvcy82YmEwMjg0ZC1lODE2LTQ3NjgtYTk5Yy03YWZiY2QxMDcxNjYucG5nIiwiZnVsbF9uYW1lIjoiRGVib3RvcyBEYXMiLCJwaG9uZSI6IjAxNzkwMDE1MzgwIiwiYWRkcmVzcyI6IkthemlwYXJhLCAybmQgbGFuZSIsInJlZ2lvbiI6IkJhcmlzaGFsIFNvZG9yIiwiZGl2aXNpb24iOiJCYXJpc2hhbCIsImlhdCI6MTU2MzM0MzI2NCwiZXhwIjoxNTYzOTQ4MDY0fQ.jrn_iYKzkDcsQjAhwN2qgjxz3mnKB47Wipz_edlHw-o'
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

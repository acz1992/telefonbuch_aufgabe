import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client.js";
import { DarkModeProvider } from "./contexts/DarkModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</ApolloProvider>
	</React.StrictMode>
);

import { ImageKitProvider } from '@imagekit/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ImageKitProvider
			urlEndpoint="https://ik.imagekit.io/zoiyj5rqq"
			publicKey="public_/euo6SSEZdJIY6wtjt59M09C6aU="
			// transformationPosition="path"
		>
			<App />
		</ImageKitProvider>
	</StrictMode>
);

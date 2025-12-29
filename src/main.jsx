import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import favicon from '../Photos/bos.jpg';

// Favicon'u Photos içindeki dosyaya yönlendir (bundled asset)
const ensureFavicon = () => {
	const existing = document.querySelector('link[rel="icon"]');
	if (existing) {
		existing.href = favicon;
	} else {
		const link = document.createElement('link');
		link.rel = 'icon';
		link.href = favicon;
		document.head.appendChild(link);
	}
};

ensureFavicon();

createRoot(document.getElementById('root')).render(<App />);

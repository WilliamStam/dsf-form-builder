import React from 'react';
import ReactDOM from 'react-dom/client';

import BuilderDemo from '@/demo/BuilderDemo.tsx';

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BuilderDemo />
    </React.StrictMode>
);
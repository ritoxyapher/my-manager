'use client';

import Popular from './components/Popular';
import GlobalStyle from './global-styles';
import { useGlobalContext } from './context/global';
import { BrowserRouter } from "react-router-dom";

export default function Home() {

  const global = useGlobalContext();

  return (
    <main>

        <BrowserRouter>
          <Popular />
        </BrowserRouter>

    </main>
  );
}

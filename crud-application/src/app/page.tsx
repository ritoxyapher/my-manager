'use client';

import Popular from './components/Popular';
import GlobalStyle from './global-styles';
import { useGlobalContext } from './context/global';

export default function Home() {

  const global = useGlobalContext();
  console.log(global);

  return (
    <main>

        <Popular />

    </main>
  );
}

import { useState } from 'react';
import Main from './components/Main.tsx'


function Home() {

  const [count, setCount] = useState(0);

  const addCount = () => { setCount(count + 1) }

  return (
    <>
      <Main title='Home page'>
        <button onClick={addCount}>Adicionar</button>
        <p>Contador: {count}</p>
      </Main>
    </>
  )
}

export default Home

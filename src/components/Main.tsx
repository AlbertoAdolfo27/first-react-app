import '../assets/styles/module.Main.css'
import { type ReactNode, useEffect } from 'react';

type MainProps = {
    title: string,
    children: ReactNode
}

function useTitle(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function Main(props: MainProps) {
    useTitle(props.title)
    return (
        <>
            <main className='main'>
                <h1>{props.title}</h1>
                {props.children}
            </main>
        </>
    )
}

export default Main
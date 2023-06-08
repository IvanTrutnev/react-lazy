import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header style={{display: "flex", justifyContent: 'flex-end'}}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">&copy; ReactRouter Tutorials 2022</footer>
        </>
    )
}

export {Layout}

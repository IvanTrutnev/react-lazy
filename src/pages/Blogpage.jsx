import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';
import BlogImage from './153.jpg';

const Button = ({ children, size, ...props}) => {
    if (size === "jumbo") { return 'asd'}

    return (
        <button size={size} {...props}>
            {children}
        </button>
    );
};

const Button2 = ({ children, size, ...props}) => {
    if (size === "jumbo") { return 'asd'}

    return (
        <button size={size} {...props}>
            {children}
        </button>
    );
};

const Button3 = ({ children, size, ...props}) => {
    if (size === "jumbo") { return 'asd'}

    return (
        <button size={size} {...props}>
            {children}
        </button>
    );
};


const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <h1>Blog</h1>

            <img src={BlogImage} height={200} width={200}/>
            
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

            <Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blogpage};
export default Blogpage;

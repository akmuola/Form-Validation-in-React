
import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem ipsum...', author:'mario', id:1},
        {title:'Welcome to the party!', body:'lorem ipsum...', author:'yoshi', id:2},
        {title:'Web dev top tips', body:'lorem ipsum...', author:'mario', id:3},
        {title:'How to Find Your Dragon', body:'lorem ipsum...', author:'Keisha', id:4}
    ]);
    //dependencies
    const [name, setName] = useState('Muideen')

    const handleDelete = (blogId) => {
        setBlogs(blogs => blogs.filter(({id}) => id !== blogId));
    }
    
    // useEffect(()=>{
    //     console.log('Hello')
    // })

    //Dependencies in UseEffect

    //  useEffect(()=>{
    //     console.log("Hello")
    // }, [])


    useEffect(()=>{
        console.log(name)
    }, [name])

    return(
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs!" handleDelete={handleDelete}/>
          {/* dependencies array */}
           <button onClick={()=> setName("Olawale")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}
export default Home;

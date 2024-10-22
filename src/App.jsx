import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmark] = useState([]);

  const handleBookMark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex mt-3 w-[1200px] mx-auto'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
    </>
  )
}

export default App

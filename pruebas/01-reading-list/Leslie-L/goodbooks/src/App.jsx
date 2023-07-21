import Navbar from "./Navbar.jsx"
import BookCard from "./BookCard.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

export default function App() {
  
  const typesBooks = ['Category','Drama', 'Terror', 'Romance','Fanfic'];
  const [books, setBooks] = useState([]);
  
  useEffect(()=>  {
    const getBooks = async () =>{
      const response = await fetch('./books.json');
      const data = await response.json();
      setBooks(data['library']);
    }
    getBooks();
    
  },[]);
 
  return (
    <div className="w-full h-screen bg-secondary ">
      <Navbar/>
      <main className="flex font-font1">
        <section className="w-2/5 h-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">Books</h1>
          <h1 className="text-2xl font-semibold mb-4">New Bookds</h1>
          <p className="font-medium mb-6">Explore new worlds</p>
          <div className="flex">
            <FontAwesomeIcon  className='bg-white w-15 h-6 p-2 rounded-l-xl' icon={faMagnifyingGlass} />
            <input type="search" placeholder="Titles or author" className="rounded-r-xl"/>
          </div>
          <div className="flex">
            <select id="types" className="w-40 p-2 m-1 rounded-xl " name="types">
            <option  value="category" disabled>Category</option>
              {
                typesBooks.map(category=>
                   <option key={category} value={category}>{category}</option>
                )
              }
            </select>
            <input type="number" className="w-16 p-2 m-1 rounded-xl" name="" id="" placeholder="year"/>
          </div>
        </section>
        <section className="w-3/5 h-96  flex items-center overflow-x-auto ">
            {
              books.map(item =>{
                
                return(
                <BookCard
                  key={item.ISBN}
                  book={item}
                  save={false}
                />
                )
              })
            } 
        </section>
      </main>
    </div>
  )
}
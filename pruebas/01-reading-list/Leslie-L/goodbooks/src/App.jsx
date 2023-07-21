import Navbar from "./Navbar.jsx"
import BookCard from "./BookCard.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

export default function App() {
  
  //const typesBooks = ['Category','Drama', 'Terror', 'Romance','Fanfic'];
  const [books, setBooks] = useState([]);
  const [searchTA, setSearchTA] = useState("");
  const [booksDisplay,setBooksDisplay]=useState([]);
  const [bookDate,setBookDate] = useState("");
  const [bookCategory, setBookCategory] = useState(10000);
  useEffect(()=>  {
    const getBooks = async () =>{
      const response = await fetch('./books.json');
      const data = await response.json();
      setBooks(data['library']);
      setBooksDisplay(data['library']);
    }
    getBooks();
    
  },[]);
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  
 const categories =  books.map(book =>{
    const temporal = book['book'];
    return temporal.genre;
 }).filter(onlyUnique);


const onChangeTA = (event)=>{
  setSearchTA((event.target.value).toLowerCase())
  updateBooks((event.target.value).toLowerCase(),bookCategory)
  
}
const onChangeCategory = (event) =>{
  //alert("cambio"+event.target.value);
  
  if(event.target.value=="category"){
    setBookCategory(10000);
  }else{
    setBookCategory(event.target.value);
  }
  
  updateBooks(searchTA,event.target.value);
  //alert(categories[event.target.value])
} 
const onChangeDate = (event) =>{
  
    console.log(event.target.value)
    setBookDate(event.target.value);
    updateBooks(searchTA,bookCategory,event.target.value);
  
} 

const updateBooks = (valActual,catActual)=>{
  console.log(valActual)
  console.log(catActual)
  console.log(categories[catActual])
  const newBooks = books.filter(book=>{
    const temporal = book['book'];
    const title = temporal['title'].toLowerCase();
    const nameAuthor = temporal['author']['name'].toLowerCase();

    const catego = temporal['genre'];
    const year = temporal['year'];
    /*
    let yearFilter = false
    if (bookDate>1000 ) {
      yearFilter=true
    }
    let categoryFilter =false
    if ( bookCategory!=-1) {
      return categoryFilter=true;
    }

    if(searchTA.length<1 && yearFilter && categoryFilter)
     return catego.includes(categories[bookCategory]) && (bookDate ==year)
    if(searchTA.length>1 && yearFilter && categoryFilter)
    return (title.includes(searchTA) || nameAuthor.includes(searchTA)) && catego.includes(categories[bookCategory]) && (bookDate ==year)
    
    if (searchTA.length>1&&categoryFilter) 
     return (title.includes(searchTA) || nameAuthor.includes(searchTA)) && catego===categories[bookCategory]
    if (searchTA.length<1&&categoryFilter) 
     return  catego===categories[bookCategory]
    
     if(searchTA.length>1&&yearFilter)
     return (title.includes(searchTA) || nameAuthor.includes(searchTA)) && bookDate ==year
    if (searchTA.length<1&&yearFilter) 
      return bookDate ==year*/
    if (valActual.length<1 &&catActual<categories.length) {
      return  catego.includes(categories[catActual])
    }
    if (valActual.length>=1 &&catActual<categories.length) {
      return catego.includes(categories[catActual]) && (title.includes(valActual) || nameAuthor.includes(valActual))
    }
    
    
    return (title.includes(valActual) || nameAuthor.includes(valActual))
  })
  const newBooks2= books.filter(book =>{
    const temporal = book['book'];
    const catego = temporal['genre'];
    if (bookCategory==-1 || bookCategory=="category") {
      return true;
    }
    return catego.includes(bookCategory)
  })
  const newBooks3 = books.filter(book =>{
    const temporal = book['book'];
    const year = temporal['year'];
    if (bookDate<1000 ) {
      return true;
    }
    return bookDate >= year
  })
  
  setBooksDisplay(newBooks);
}

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
            <input type="search" placeholder="Titles or author" value={searchTA} onChange={onChangeTA} className="rounded-r-xl"/>
          </div>
          <div className="flex">
            <select id="types" className="w-40 p-2 m-1 rounded-xl" value={bookCategory} onChange={onChangeCategory} name="types">
              <option  value={10000} default>Category</option>
                {
                  categories.map((category,index)=>
                    <option key={category} value={index}>{category}</option>
                  )
                }
            </select>
            <input type="number" className="w-16 p-2 m-1 rounded-xl" value={bookDate} onChange={onChangeDate} name="" id="" placeholder="year"/>
          </div>
        </section>
        <section className="w-3/5 h-96  flex items-center overflow-x-auto ">
            {
              booksDisplay.map(item =>{
                
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
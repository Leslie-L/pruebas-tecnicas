import Navbar from "./Navbar.jsx"
import BookCard from "./BookCard.jsx"
import FavBookCard from "./FavBookCard.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import  useBookStore  from "./useStore.jsx"
import ShowBookCard from "./ShowBookCard.jsx"

export default function App() {
  const { books, booksDisplay, favorites, cantidadDeLibros, cantidadDeFavs, fetch, addFavorites, deleteFavorites, isFavorite, getBook, updateDisplay,updateFavorites,cantidadDeLibrosDesplegados } = useBookStore((state) => ({
    books:  state.books, 
    booksDisplay: state.booksDisplay,
    favorites: state.favorites,
    cantidadDeLibros: state.cantidadDeLibros,
    cantidadDeFavs: state.cantidadDeFavs,
    fetch: state.fetch,
    addFavorites: state.addFavorites,
    deleteFavorites: state.deleteFavorites,
    isFavorite: state.isFavorite,
    getBook: state.getBook,
    updateDisplay: state.updateDisplay,
    updateFavorites: state.updateFavorites,
    cantidadDeLibrosDesplegados: state.cantidadDeLibrosDesplegados
  }));
  
  useEffect(() => {
    fetch();
    window.addEventListener('storage',(e)=>{
      console.log(e.key)
      console.log(cantidadDeLibros);
      updateFavorites()
    })
  }, []);
 

  
const [searchTA, setSearchTA] = useState("");
const [bookDate,setBookDate] = useState("");
const [bookCategory, setBookCategory] = useState(10000);


function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const categories =  books.map(book =>{
  const temporal = book['book'];
  return temporal.genre;
}).filter(onlyUnique);
 
const onChangeTA = (event)=>{
  setSearchTA((event.target.value).toLowerCase())
  updateBooks((event.target.value).toLowerCase(),bookCategory,bookDate)
  
}
const onChangeCategory = (event) =>{
 
  
  if(event.target.value=="category"){
    setBookCategory(10000);
  }else{
    setBookCategory(event.target.value);
  }
  
  updateBooks(searchTA,event.target.value,bookDate);
 
} 
const onChangeDate = (event) =>{
    setBookDate(event.target.value);
    updateBooks(searchTA,bookCategory,event.target.value);
} 

const updateBooks = (valActual,catActual,actYear)=>{
  
  const newBooks = books.filter(book=>{
    const temporal = book['book'];
    const title = temporal['title'].toLowerCase();
    const nameAuthor = temporal['author']['name'].toLowerCase();

    const catego = temporal['genre'];
    const year = temporal['year'];
    
    
    if (valActual.length>=1 && actYear>1000 && catActual<categories.length) {
        return actYear == year && catego.includes(categories[catActual]) &&  (title.includes(valActual) || nameAuthor.includes(valActual))
    }
    if (valActual.length<1 && actYear>1000 && catActual<categories.length) {
      return actYear == year && catego.includes(categories[catActual])
    }
    if (valActual.length<1 && actYear>1000) {
        return actYear == year
    }
    if (valActual.length>=1 && actYear>1000) {
      return actYear == year && (title.includes(valActual) || nameAuthor.includes(valActual))
    }
    if (valActual.length<1 &&catActual<categories.length) {
      return  catego.includes(categories[catActual])
    }
    if (valActual.length>=1 &&catActual<categories.length) {
      return catego.includes(categories[catActual]) && (title.includes(valActual) || nameAuthor.includes(valActual))
    }
    return (title.includes(valActual) || nameAuthor.includes(valActual))
  })
  
  updateDisplay(newBooks);
}

  return (
    <div className="w-full h-screen bg-secondary ">
      <Navbar/>
      <main className="flex font-font1 flex-col md:flex-row bg-secondary">
        <section className=" w-full md:w-2/5 h-auto flex flex-col justify-center items-center">
          
          <h1 className="text-4xl font-semibold">Books</h1>
          <h1 className="text-2xl font-semibold mb-4">Total of books: {cantidadDeLibros()}</h1>
          <p className="font-medium mb-6">Books displeyed: {cantidadDeLibrosDesplegados()}</p>
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
        <section className="w-full md:w-3/5 h-72 md:h-96 mb-4 mt-4 flex items-center overflow-x-auto  mr-12 px-4 bg-secondary">
            {
              booksDisplay.map(item =>{
                item['book']['save']= isFavorite(item.ISBN)? true: false;
                return(
                  <BookCard
                    key={item.ISBN}
                    bookInfo={item}
                    save={isFavorite}
                    favorites={addFavorites}
                    delete={deleteFavorites}
                  />
                )
              })
            } 
        </section>
        
      </main>
      <div className="w-full h-2 z-10 md:mt-8 shadow-2xl bg-primary"></div>
      <section className="w-full  md:h-44 flex flex-col items-center md:pr-12 bg-secondary md:flex-row md:pr-0">
        <div className="w-full md:w-1/5  md:h-auto flex flex-col justify-center items-center  mt-2">
          <p className=" text-md font-semibold font-font1">Lista de lectura</p>
          <p className=" text-md  font-font1">Cantidad de libros: {cantidadDeFavs()}</p>
        </div>
        <div className="w-full md:w-4/5 h-44 flex items-center overflow-x-auto px-4 m-2">
        {
              favorites.map(id =>{
                const item =getBook(id);
                return(
                  <FavBookCard
                    key={`${id}-favBooks`}
                    book={item}
                    delete = {deleteFavorites}
                  />
                )
              })
          }
        </div>
      </section>
      <ShowBookCard/>
    </div>
  )
}
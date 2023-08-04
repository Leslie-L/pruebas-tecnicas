import { create } from 'zustand';


const useBookStore = create((set, get) => ({
  books: [],
  booksDisplay: [],
  favorites: [],
  cantidadDeLibros: () => get().books.length - get().favorites.length, 
  cantidadDeLibrosDesplegados: ()=> get().booksDisplay.length, 
  cantidadDeFavs: () => get().favorites.length,
  fetch: async () => {
    try {
      const response = await fetch('./books.json');
      if (!response.ok) {
        throw new Error('Failed to fetch books.json');
      }
      const data = await response.json();
      set({ books: data['library'], booksDisplay: data['library'] }); 
      const favs=localStorage.getItem("books_fav_v1");
      if(favs){
        const res = JSON.parse(favs)
        set({favorites:[...res]})
      }else{
        const res = JSON.stringify([]);
        localStorage.setItem("books_fav_v1",res)
      }
    } catch (error) {
      console.error(error);
    }
    
  },
  updateFavorites: ()=>{
    const favs=localStorage.getItem("books_fav_v1");
    const res = JSON.parse(favs)
    set({favorites:[...res]})
  },
  addFavorites: (newFav) =>{
    set((state) => ({ favorites: [...state.favorites, newFav] }));
    localStorage.setItem("books_fav_v1",JSON.stringify(get().favorites));
  },
  deleteFavorites: (fav) =>{
    set((state) => ({ favorites: state.favorites.filter((item) => item !== fav) }))
    localStorage.setItem("books_fav_v1",JSON.stringify(get().favorites));
  } , 
  isFavorite: (id) => {
    return get().favorites.includes(id);
  },
  getBook: (id) => {
    const book = get().books.find((item) => {
      const temporal = item['book'];
      const isnb = temporal.ISBN;
      return isnb === id;
    });
    return book;
  },
  updateDisplay: (newData) => set({ booksDisplay: [...newData] })
}));

export default useBookStore;



/*


const categories =  books.map(book =>{
  const temporal = book['book'];
  return temporal.genre;
}).filter(onlyUnique);
useEffect(()=>  {
    const getBooks = async () =>{
      const response = await fetch('./books.json');
      const data = await response.json();
      setBooks(data['library']);
      setBooksDisplay(data['library']);
    }
    getBooks();
    
  },[]);*/
/*
const [books, setBooks] = useState([]); 
const [booksDisplay,setBooksDisplay]=useState([]);
const [favorites, setFavorites] = useState([]);


  const addFavorites = (newFav)=>{
      const listFavorites = [...favorites];
      listFavorites.push(newFav)
      setFavorites(listFavorites);
  }
  const deleteFavorites = (fav)=>{
    const listFavorites = [...favorites];
    const index = listFavorites.indexOf(fav);
    listFavorites.splice(index,1);
    setFavorites(listFavorites);
    
  }
  const isFavorite =(id)=>{
    return favorites.includes(id);
  }
  const getBook=(id)=>{
    const book = books.find(item=>{
      const temporal = item['book'];
      const isnb = temporal.ISBN;
      return isnb==id;
    })
    return book;
  }
  */
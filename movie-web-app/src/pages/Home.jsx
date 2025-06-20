import React from 'react'
import MovieCard from '../componenets/MovieCard'
import { useState,useEffect } from 'react'
import { searchMovies,getPapoularMovies } from '../services/api'
import '../css/Home.css'

function Home() {

    const [searchQuery ,setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const loadPapoularMovies = async () => {
            try {
                const papoularMovies = await getPapoularMovies()
                setMovies(papoularMovies)
            } catch(err){
                console.log(err);
                setError("Failed to Load Movies")
            }
            finally{
                setLoading(false)
            }
        }
        loadPapoularMovies()
    }, [])




    const handleSearch = (e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text"
                    placeholder='Search for movies.. ' 
                    className='search-input' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type='submit' className='search-button'>
                        Search
                    </button>
            </form>
            <div className='movies-grid'>
                {movies.map(movie => 
                        (
                        <MovieCard movie={movie} key={movie.id}/>
                        )
                    )}
            </div>
        </div>
    )
}

export default Home

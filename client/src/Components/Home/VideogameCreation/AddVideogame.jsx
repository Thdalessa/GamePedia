import React, {useState} from "react";
import {useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import styles from "./AddVideogame.module.css";
import { getPlatforms, getGenres, postGame } from "../../../Redux/actions";

export default function AddVideogame() {
  let genres = useSelector((state) => state.genres);
  let plataformas = useSelector((store) => store.platforms);
  let dispatch = useDispatch();

  const [form,setForm] = useState({
    name:'',
    description:'',
    background_image:'',
    released:'',
    rating:0,
    generos:[],
    platforms:[],
  })


  useEffect(() => {
    dispatch(getPlatforms())
    // console.log(genres)
    if(genres.length > 1){
      dispatch(getGenres())
    }
  },[]) 

  function handleChanges(e){
    const change = {...form};

    if(e.target.name === 'generos'){
      if(e.target.checked === true){
        let isit = change[e.target.name].find((element) => element === e.target.value)
        if(isit === undefined){
          change[e.target.name].push(e.target.value)
          setForm(change)
        } else {
          return;
        }
      } else {
        let theOneOut = change[e.target.name].findIndex((element) => element === e.target.value)
        if(theOneOut >= 0 && change[e.target.name].length > 0){
          // change[e.target.name][theOneOut] = '';
          change[e.target.name] = change[e.target.name].slice(0,theOneOut).concat(change[e.target.name].slice((theOneOut+1), change[e.target.name].length))
          setForm(change)
        } else {
          console.log('ya estaba eliminado')
        }
      }
    } else if(e.target.name === 'platforms'){
      if(e.target.checked === true){
        change[e.target.name].push(e.target.value)
        console.log('Entro en platforms')
        setForm(change)
      } else {
        let theOneOut = change[e.target.name].findIndex((element) => element === e.target.value)
        console.log('Salio en platforms ')
        console.log(theOneOut)
        change[e.target.name][theOneOut] = '';
        change[e.target.name] = change[e.target.name].slice(0,theOneOut).concat(change[e.target.name].slice((theOneOut+1), change[e.target.name].length))
        setForm(change)

      }
    } else {
      change[e.target.name] = e.target.value; 
      setForm(change)
    }

    console.log(change)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submiteado bro')
    console.log(form)
    dispatch(postGame(form))
    
  }

  return (
    <div className={styles.theContainer}>
        
        <form className={styles.form} onSubmit={handleSubmit}>      
            <h1 className={styles.title}>Add a videogame to the Database</h1>
            <input
                  type="text"
                  name="name"
                  className={styles.inputName}
                  placeholder="Name..."
                  value={form.name}
                  onChange={handleChanges}
                />
                <textarea
                  type="text"
                  name="description"
                  className={styles.inputText}
                  placeholder="Description..."
                  value={form.description}
                  onChange={handleChanges}
                />
                <input
                  type="text"
                  name="background_image"
                  className={styles.inputImg}
                  placeholder="Image url..."
                  value={form.background_image}
                  onChange={handleChanges}
                />
                <input
                  type="date"
                  name="released"
                  className={styles.inputDate}
                  placeholder="released..."
                  value={form.released}
                  onChange={handleChanges}
                />
                <div className={styles.rating}>
                  Rating:
                  <select name="rating" id="" className={styles.ratingSelect} onChange={handleChanges}>
                    <option value="1" defaultValue='1' >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className={styles.divGenres} onChange={handleChanges} >
                    {genres?.map((genre) => {
                        return (
                        <div className="check" key={genre.id}>
                            <input type="checkbox" name='generos'  value={genre.name} onChange={handleChanges}/>
                            <label >{genre.name}</label>
                        </div>
                        );
                    })}
                </div>
                <div className={styles.divPlatforms}>
                    {plataformas?.map((plataforma) => {
                        return (
                        <div className="check" >
                            <input type="checkbox" name="platforms" id={plataforma.id}  value={plataforma.name} onChange={handleChanges} />
                            <label >{plataforma.name}</label>
                        </div>
                        );
                    })}
                </div>
                <button className={styles.button}>
                    ADD VIDEOGAME
                </button>
        </form>
    </div>
    
  );
}

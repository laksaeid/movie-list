import axios from "axios";
import _ from 'lodash'
import {useMovie} from "@/context";
import {MovieType} from "@/interfaces";
import {useState} from "react";

const Header = () => {
    const {state, dispatch} = useMovie()
    const [filter, setFilter] = useState('')


    const handleSearch = function (value: string) {
        setFilter('همه')
        axios(`http://localhost:3000/posts?q=${value}`).then(res => {
            dispatch({
                type: 'search',
                payload: res.data
            })
        })
    }

    const handleFilter = function (e: string) {
        setFilter(e)
        if (e === "همه") {

            dispatch({
                type: 'newData',
                payload: !state.newData
            })
        } else {

            const copy = state.firstData.filter((movie: MovieType) => movie.genre === e)
            dispatch({
                type: 'search',
                payload: copy
            })

        }
    }

    return (
        <header className={'py-5 bg-amber-300 flex flex-col gap-3 md:flex-row items-center justify-evenly px-5'}>
            <input className={'outline-0 rounded-md pr-2 py-1 w-full text-black/60'} placeholder={'جستجو'} type="text" onChange={_.debounce((e)=>handleSearch(e.target.value),1000)}/>
            <p className={'pt-2.5 font-bold order-first text-xl w-full text-center'}>MOVIE APP</p>
            <select className={'outline-0 rounded-md pr-2 py-1 w-full text-black/60'} value={filter} onChange={(e) => handleFilter(e.target.value)}>
                <option>همه</option>
                <option>وحشت/هیجانی</option>
                <option>کمدی</option>
                <option>اکشن</option>
                <option>جنایی</option>
            </select>
        </header>
    );
};

export default Header;
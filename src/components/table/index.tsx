import {Modal, ModalDelete, MovieRow} from '@/components';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useMovie } from '@/context';
import { MovieType } from '@/interfaces';
import {toast} from "react-toastify";

const List = () => {
  const { state, dispatch } = useMovie();
  const [description , setDescription] = useState<string>()
  const [deleteItem,setDeleteItem] = useState<MovieType>()
  useEffect(() => {
    axios('http://localhost:3000/posts').then((res) => {
      dispatch({ type: 'initialData', payload: res.data });
    });
  }, [state.newData]);
  const showDescription = function (desc: string) {
  setDescription(desc)
  };
  const handleDelete = async function (movie: MovieType) {
    await axios
      .delete(`http://localhost:3000/posts/${movie.id}`)
      .then(() => toast.error('movie removed') );
    dispatch({ type: 'newData', payload: !state.newData });
    setDeleteItem(undefined)
  };
  const deleteModal = function(movie:MovieType){
  setDeleteItem(movie)
  }
  const handleEdit = function (movie: MovieType) {
    dispatch({
      type: 'editData',
      payload: {
        form: {
          title: movie.title,
          director: movie.director,
          year: movie.year,
          genre: movie.genre,
          description: movie.description,
        },
        editId: movie.id,
      },
    });

  };
  return (
      <>
    <table className={'w-full mt-5 text-xs sm:text-sm md:text-md lg:text-base '}>
      <thead>
        <tr className={'border-b'}>
          <th className={'font-medium pb-5 hidden md:block '}>ردیف</th>
          <th className={'font-medium pb-5'}>نام فیلم</th>
          <th className={'font-medium pb-5'}>کارگردان</th>
          <th className={'font-medium pb-5'}>ژانر فیلم</th>
          <th className={'font-medium pb-5'}>سال ساخت</th>
          <th className={'font-medium pb-5 hidden md:block '}>توضیحات</th>
          <th className={'font-medium pb-5'}>حذف و ویرایش</th>
        </tr>
      </thead>
      <tbody>
        {state.data.map((movie: MovieType) => {
          return (
            <MovieRow key={movie.id} movie={movie} deleteModal={deleteModal} handleEdit={handleEdit} showDescription={showDescription}/>
          );
        })}
      </tbody>
    </table>
        {description && <Modal setDesc={setDescription} desc={description} />}
        {deleteItem && <ModalDelete deleteItem={deleteItem} setDeleteItem={setDeleteItem} handleDelete={handleDelete} />}
      </>

  );
};

export default List;

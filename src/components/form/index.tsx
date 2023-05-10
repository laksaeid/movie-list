import {Button,  Input, Select, TextAria} from '@/components';
import { useMovie } from '@/context';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Errors } from '@/interfaces';
import {toast} from "react-toastify";

const Form = () => {
  const { state, dispatch } = useMovie();
  // console.log(state)
  const [errors, setErrors] = useState<Errors>({});
  const setFormValue = function (value: string, key: string) {
    setErrors((prev) => {
      const copy = structuredClone(prev);
      delete copy[key];
      return copy;
    });
    dispatch({ type: 'controlForm', payload: { key: key, value: value } });
  };
  const handleSubmit = async function () {
    const data = {
      title: state.form.title,
      year: state.form.year,
      genre: state.form.genre,
      description: state.form.description,
      director: state.form.director,
    };
    await axios
      .post('http://localhost:3000/posts', data)
      .then(() => toast.success('new movie added'));
    dispatch({ type: 'newData', payload: !state.newData });
  };
  const handleEdit = async function () {
    const data = {
      title: state.form.title,
      year: state.form.year,
      genre: state.form.genre,
      description: state.form.description,
      director: state.form.director,
    };
    // console.log(state)
    await axios
      .patch(`http://localhost:3000/posts/${state.editId}`, data)
      .then(() =>toast.success('movie edited') );
    dispatch({ type: 'newData', payload: !state.newData });

  };
  const yearValidation = (text:string) => {
    const Regex = /^\d{4}\/\d{4}$/;
    return Regex.test(text);
  };
  const validation = function (e: FormEvent) {
    e.preventDefault();
    const errors: Errors = {};
    if (!state.form.title) errors.title = 'please enter movie name';
    if (!yearValidation(state.form.year)) errors.year = 'please enter movie year';
    if (!state.form.director) errors.director = 'please enter movie director';
    if (!state.form.genre) errors.genre = 'please select movie genre';
    if (!state.form.description) errors.description = 'please enter description';
    setErrors(errors);
    Object.keys(errors).length === 0 && !state.isEdit && handleSubmit();
    Object.keys(errors).length === 0 && state.isEdit && handleEdit();
  };
  return (
    <form
      onSubmit={validation}
      className={'grid grid-cols-1 md:grid-cols-2 text-xs gap-5 bg-[#515050] px-5 md:px-20 py-14'}
    >
      <div className={'grid grid-cols-1 lg:grid-cols-2  gap-2 content-between gap-y-7'}>
        <Input
          error={errors.title}
          onChange={setFormValue}
          value={state.form.title}
          text={'نام فیلم'}
          id={'title'}
          placeholder={'نام فیلم را وارد کنید'}
        />
        {/*<DropDown/>*/}
        <Select
          error={errors.genre}
          onChange={setFormValue}
          value={state.form.genre}
        />
        <Input
          error={errors.director}
          onChange={setFormValue}
          value={state.form.director}
          text={'کارگردان'}
          id={'director'}
          placeholder={'نام کارگردان را وارد کنید'}
        />
        <Input
          error={errors.year}
          onChange={setFormValue}
          value={state.form.year}
          text={'سال تولید'}
          id={'year'}
          placeholder={'سال ساخت فیلم را وارد کنید'}
        />
      </div>
      <div className={'space-y-6 flex flex-col justify-center'}>
        <TextAria onChange={setFormValue} value={state.form.description} error={errors.description} />
        <div className={'w-full text-left'}>
          <Button
            type={'submit'}
            text={state.isEdit ? 'ویرایش' : 'ذخیره'}
            variants={'fill'}
          />
          <Button
            onClick={() => dispatch({ type: 'cancel' })}
            type={'button'}
            text={'انصراف'}
            variants={'outline'}
            moreStyles={'border-gray-300 mr-5'}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

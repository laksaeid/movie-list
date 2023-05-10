import {Button} from "@/components";
import {MovieType} from "@/interfaces";
interface Props{
    movie:MovieType
    showDescription:(x:string)=>void
    deleteModal:(x:MovieType)=>void
    handleEdit:(x:MovieType)=>void
}
const MovieRow = ({movie,showDescription,deleteModal,handleEdit}:Props) => {
    return (
        <tr  className={'text-center'}>
            <td className={'pt-8 hidden md:block'}>{movie.id}</td>
            <td className={'pt-8'}>{movie.title}</td>
            <td className={'pt-8'}>{movie.director}</td>
            <td className={'pt-8'}>{movie.genre}</td>
            <td className={'pt-8'}>{movie.year}</td>
            <td className={'pt-8 hidden md:block '}>
                <Button
                    onClick={() => {
                        showDescription(movie.description);
                    }}
                    type={'button'}
                    text={'توضیحات'}
                    variants={'outline'}
                    moreStyles={'border-blue-500 px-2 '}
                />
            </td>
            <td>
                <div className={'flex flex-col md:flex-row gap-2 justify-center items-center pt-8'}>
                    <Button
                        onClick={() => deleteModal(movie)}
                        type={'button'}
                        text={'حذف'}
                        variants={'outline'}
                        moreStyles={'border-red-500 w-5 justify-center text-xs md:text-base md:w-10 '}
                    />
                    <Button
                        onClick={() => handleEdit(movie)}
                        type={'button'}
                        text={'ویرایش'}
                        variants={'outline'}
                        moreStyles={'border-green-500 w-5 justify-center text-xs md:text-base md:w-10'}
                    />
                </div>
            </td>
        </tr>
    );
};

export default MovieRow;
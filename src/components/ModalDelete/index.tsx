import {MovieType} from "@/interfaces";

interface Props {
    deleteItem: MovieType
    setDeleteItem: (x: undefined) => void
    handleDelete: (x: MovieType) => void
}

const ModalDelete = ({deleteItem, setDeleteItem, handleDelete}: Props) => {
    return (

        <div>
            <div className={"w-screen h-screen fixed top-0 left-0 backdrop-blur-sm modal-animation"}>

            </div>

            <div className={"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] p-5 rounded-lg w-1/2 text-black/40 modal-animation w-96"}>
                <p className={"border-b pb-5"}>Are you sure to Delete <strong
                    className={"text-amber-500"}>{deleteItem.title}</strong>?</p>
                <div className={"flex justify-around mt-5"}>
                    <button onClick={() => handleDelete(deleteItem)} className={"bg-emerald-800 px-4 rounded-md"}>Yes
                    </button>
                    <button onClick={() => setDeleteItem(undefined)} className={"bg-red-800 px-4 rounded-md"}>No
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ModalDelete;
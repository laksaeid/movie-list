import {Table} from "@/components";


const List = () => {

    return (
        <div className={'bg-[#595959] flex-1 text-white p-8'}>
            <p className={'font-bold relative mr-5 before:content-[""] before:bottom-0 before:-right-4 before:w-3 before:h-7 before:absolute before:bg-amber-300'}>لیست فیــلـم</p>

            <Table />
        </div>
    );
};

export default List;


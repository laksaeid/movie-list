import './index.css'
interface Props{
    desc:string
    setDesc:(x:string)=>void
}
const Modal = ({desc ,setDesc}:Props) => {
    return (
        <div>

        <div onClick={()=>setDesc('')} className={'w-screen h-screen fixed top-0 left-0 backdrop-blur-sm modal-animation'}>

        </div>
            <div className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] p-5 rounded-lg w-1/2 text-black/40 modal-animation'}>
                <div className={'flex justify-between'}>
                    <p>توضیحات</p>
                    <button onClick={()=>setDesc('')} className={'flex items-center gap-5 pb-2'}><span className={'mb-1'}>بستن</span><span>x</span></button>
                </div>
                <div className={'border border-gray-400 rounded-md p-4 text-sm'}>
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default Modal;
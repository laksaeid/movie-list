interface Props{
    text:string
    variants:string
    moreStyles?:string
    type:'button'|'reset'|'submit'
    onClick?:()=>void
}
interface Variant{
    fill:string
    outline:string
}
const variant:Variant={
    fill:'inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-amber-300 hover:bg-gray-100 transition duration-200 focus:outline-none',
    outline:'inline-flex items-center px-8 py-2 border shadow-sm text-sm text-white font-medium rounded-md text-gray-700 bg-transparent hover:bg-transparent/50 transition duration-200 focus:outline-none'
}
type Variants = keyof Variant
const Button = ({text,variants,moreStyles='',type,onClick}:Props) => {
    return (
        <button
            onClick={()=>{
                onClick && onClick()
            }}
            type={type}
            className={variant[variants as Variants]+" "+moreStyles}
        >

            {text}
        </button>
    );
};

export default Button;
interface Props{
    value?:string
    onChange:(x:string,y:string)=>void
    error?:string | undefined
}
const Select = ({onChange,value,error}:Props) => {
    return (
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-white mr-3 relative before:content-[''] before:bottom-0.5 before:-right-3 before:w-2 before:absolute before:h-5 before:bg-amber-300">
                ژانر فیلم
            </label>
            <select
                onChange={(e)=>{onChange(e.target.value,'genre')}}
                value={value}
                id="genre"
                name="genre"
                className="mt-1 border rounded-md block w-full py-2 border-gray-300 bg-transparent focus:outline-none focus:border-yellow-500 sm:text-sm text-white/50 focus:bg-yellow-200/10 text-xs focus:text-black"
            >
                <option hidden>select</option>
                <option>وحشت/هیجانی</option>
                <option>کمدی</option>
                <option>اکشن</option>
                <option>جنایی</option>
            </select>
            {error && <p className={'text-red-500 text-xs tracking-wide'}>{error}</p>}
        </div>
    );
};

export default Select;
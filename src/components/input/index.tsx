interface Props {
  text?: string;
  id: string;
  placeholder: string;
  onChange: (x: string, y: string) => void;
  value?: string;
  error?: string | undefined;
}
// relative before:content-[""] before:bottom-0 before:-right-4 before:w-3 before:h-7 before:absolute before:bg-amber-300
const Input = ({ text, id, placeholder, onChange, value, error }: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mr-3 relative text-sm font-medium text-white before:content-[""] before:bottom-0.5 before:-right-3 before:w-2 before:absolute before:h-5 before:bg-amber-300'
      >
        {text}
      </label>
      <div className="mt-1 border rounded-md border-gray-300 focus-within:border-yellow-500 overflow-hidden">
        <input
          onChange={(e) => onChange(e.target.value, id)}
          type="text"
          value={value}
          name={id}
          id={id}
          className="block bg-transparent w-full p-2 border outline-0 border-transparent focus:bg-yellow-200/10 focus:ring-0 sm:text-sm placeholder:text-white/50 placeholder:text-xs"
          placeholder={placeholder}
        />
      </div>
      {error && <p className={'text-red-500 text-xs tracking-wide'}>{error}</p>}
    </div>
  );
};

export default Input;

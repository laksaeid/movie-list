interface Props {
  value: string;
  onChange: (x: string, y: string) => void;
  error:string|undefined
}
const TextArea = ({ onChange, value ,error}: Props) => {
  return (
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium text-white mr-3 relative before:content-[''] before:bottom-0.5 before:-right-3 before:w-2 before:absolute before:h-5 before:bg-amber-300"
      >
        توضیحات
      </label>
      <div className="mt-1">
        <textarea
          onChange={(e) => onChange(e.target.value, 'description')}
          value={value}
          rows={4}
          placeholder={'توضیحات درباره فیلم'}
          name="description"
          id="description"
          className="mt-1 p-2 bg-transparent outline-0 border rounded-md border-gray-300 focus:ring-amber-400 focus:bg-yellow-200/10 focus:border-yellow-500 block ring-0 w-full sm:text-sm placeholder:text-white/50 placeholder:text-xs"
        />
      </div>
        {error && <p className={'text-red-500 text-xs tracking-wide'}>{error}</p>}
    </div>
  );
};

export default TextArea;

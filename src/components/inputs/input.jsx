export default function Input(props) {
    return (
        <div className="flex flex-col gap-1 w-full h-fit font-poppins">
            <label className=" text-[0.75rem] font-bold text-gray-600">{props.label.toUpperCase()}</label>
            <input id={props.id} placeholder="--" className="focus:outline-2 focus:outline-[hsl(259,100%,65%)] w-full appearance-none font-bold border-2 border-gray-300 rounded-sm px-2 py-1.5 text-[1rem] hover:bg-gray-200 transition-all ease-in-out duration-300" min={props.min} max={props.max} typeof="number" onChange={props.onChange}/>
        </div>
    )
}
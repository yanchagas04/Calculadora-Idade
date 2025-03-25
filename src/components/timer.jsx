import React from "react"

export default function Timer(props) {
    return (
        <div className="flex flex-col gap-0 w-full">
            <span className="flex flex-row gap-1 font-poppins text-6xl font-bold italic h-fit w-full"><span className="text-purple-color h-fit">{props.years}</span>anos</span>
            <span className="flex flex-row gap-1 font-poppins text-6xl font-bold italic h-fit w-full"><span className="text-purple-color h-fit">{props.months}</span>meses</span>
            <span className="flex flex-row gap-1 font-poppins text-6xl font-bold italic h-fit w-full"><span className="text-purple-color h-fit">{props.days}</span>dias</span>
        </div>
    )
}
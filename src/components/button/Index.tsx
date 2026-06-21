import React from 'react'

interface IButtonComponent{
    content: string;
    desc?: string;
    className?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: IButtonComponent) => {
    return <button className={`bg-red text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-red-hover hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer ${props.className ?? ''}`} onClick={props.onClick}>{props.content}</button>
}

export default Button
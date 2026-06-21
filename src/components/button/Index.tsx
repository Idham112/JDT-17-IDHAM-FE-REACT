import React from 'react'

interface IButtonComponent{
    content: string;
    desc?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: IButtonComponent) => {
    return <button className='bg-amber-500 text-blue-800 px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-amber-400 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer' onClick={props.onClick}>{props.content}</button>
}

export default Button
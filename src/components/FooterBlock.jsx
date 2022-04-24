import React from 'react'

const FooterBlock = (props) => {
    return (
        <div>
            <h3 className='py-2 font-bold uppercase'>{props.head}</h3>
            <ul>
                <li className='py-[2px] text-gray-500 hover:underline cursor-pointer'>{props.li1}</li>
                <li className='py-[2px] text-gray-500 hover:underline cursor-pointer'>{props.li2}</li>
                <li className='py-[2px] text-gray-500 hover:underline cursor-pointer'>{props.li3}</li>
                <li className='py-[2px] text-gray-500 hover:underline cursor-pointer'>{props.li4}</li>
                <li className='py-[2px] text-gray-500 hover:underline cursor-pointer'>{props.li5}</li>
            </ul>
        </div>
    )
}

export default FooterBlock
import React from "react";
import { FaUserCircle } from "react-icons/fa";


const styles = ({
    boxMessage: {
        width: 'auto',
        minWith: '300px',
        maxWidth: '400px',
    }
})

const BoxMessage = ({message, receivers, time, object, bgColor}) => {

    return(

        bgColor == 'light' ?
            <div className="flex bg-gray-300 shadow-sm mr-auto text-purple-900 px-3 my-2 py-2 ml-3 rounded" style={styles.boxMessage}>
                <div>
                    <FaUserCircle size={35} className="fl-1 mr-3" />
                </div>
                <div className="grid">
                    <p className='mt-1 text-purple-900 mt-2'>{message}</p>
                    <small className='ml-auto text-gray-600'>{time}</small>
                </div>
            </div>
        :
            <div className="flex bg-purple-900 shadow-sm ml-auto text-white px-3 my-2 py-2 ms-3 rounded" style={styles.boxMessage}>
                <div>
                    <FaUserCircle size={35} className="fl-1 mr-3" />
                </div>
                <div className="grid">
                    <p className='mt-1 text-white mt-2'>{message}</p>
                    <small className='ml-auto text-gray-200'>{time}</small>
                </div>
            </div>

    )
}
export default BoxMessage;
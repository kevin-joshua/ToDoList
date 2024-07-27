import React from 'react';

function ToDoCard(props) {
  const { children , handleDelete , index , handleEdit } = props;

  return (
    <div>
     <ul className='w-full max-w-lg mx-auto mt-5'>
      <li key={index} className='flex items-center justify-between text-xl bg-gray-100 my-2 mx-3 font-fancy rounded-md px-5 py-3 shadow-sm'>
      <span className='flex-grow'>{children}</span>
      <div className='flex space-x-2'>
            <button onClick={()=> handleEdit(index)}>
              <i className="fa-solid fa-pen-to-square pl-4"></i>
            </button>
            <button className='pl-4' onClick={() => handleDelete(index)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ToDoCard;

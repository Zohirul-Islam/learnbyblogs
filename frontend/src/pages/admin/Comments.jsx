import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';

const Comments = () => {
  const [comments,setComments] = useState([]);
  const [filtered,setFiltered] = useState('Not Approved')
 
  console.log(comments_data)
  const fetchComments = async()=>{
    setComments(comments_data)
  }
  useEffect(()=>{
    fetchComments()
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1>Comments</h1>
        <div className='flex gap-4'>
          <button onClick={()=>setFiltered('Approved')} className={`shadow-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filtered === "Approved" ? 'text-gray-600':'text-blue-800'}`}>Approved</button>
          <button onClick={()=>setFiltered('Not Approved')} className={`shadow-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filtered === "Not Approved" ? 'text-gray-600':'text-blue-800'}`}>Not Approved</button>
        </div>
      </div>
      <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg overflow-y-hidden'>
          <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs uppercase text-left text-gray-700'>
                <tr>
                  <th scope='col' className='px-6 py-3'>Blog Title and Comments </th>
                  <th scope='col' className='px-6 py-3  max-sm:hidden'>Date</th>
                  <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  comments.filter((comment)=>{
                    if(filtered === 'Approved') return comment.isApproved === true;
                    return comment.isApproved === false;
                  }).map((comment,index)=><CommentTableItem key={comment._id} comment ={comment} index = {index + 1} fetchComments ={fetchComments}/>)
                }
                
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Comments
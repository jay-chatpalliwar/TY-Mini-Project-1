import React, { useEffect, useState } from 'react'
import Sideb from '../components/Sideb'
import Resourcecard from '../components/Resourcecard'
import Facultyresourcecard from '../components/Facultyresourcecard'
import Fileuploadc from '../components/Fileuploadc';
const BASE_URL = process.env.BASE_URL;


const Resource = () => {


const token = localStorage.getItem('token');
const dummytags = ['ALL','DAA' , 'CD' , 'AI' , 'IOT' , 'IP']
const role= "faculty";
const id = '';
const [resdata, setresdata] = useState([]);
const [formdata,setformdata] = useState([{
   type:'',
   difficulty:'basic', 
   desc:'',
   imgurl:'',
   title:'',
   tags:[],
   author:''
}])

const [links, setlinks] = useState([]);
const [li,setli] = useState('');


const LinkHandler = (link)=>{  
  
   setlinks([...links,link])
  // console.log(links)
  setli('')
}

const linkDeleter = (id)=>{
   console.log(id);
   const newlist = links.filter((link,index)=>{ return index !== id})
  // console.log(newlist)
  setlinks(newlist);
}
//useEffect(()=>{console.log(li)},[li])

const getResources = async()=>{
 try{
    const response = await fetch(`${BASE_URL}/fetchResources`, {
    method: 'GET', // HTTP request method
   headers: {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}` 
   },
    body: JSON.stringify({
      role: role,
      id:id
    })
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
      console.log(data);
     
     setresdata(data);
    
 } 
 catch(e)
 {  
   
    console.error('Fetch error at resource fetch:', e);
 }
}


const postResource = async()=>{
try
{  
   
   const response = await fetch(`${BASE_URL}/createResource` , {
    method: 'POST', // HTTP request method
   headers: {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}` 
   },
   
     body:JSON.stringify(
       {
    link:links,
   type:formdata.type,
   difficulty:formdata.difficulty,
   desc:formdata.desc,
   imgurl:formdata.imgurl,
   title:formdata.title,
   tags:formdata.tags,
   author:formdata.author
}
     )
   
   })
}
catch(e)
{
   console.log('error while posting resource : '+e)
}
}

const dummyData = [
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
},
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
},
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
},
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
},
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
},
{ 
  title : 'This is title',
  i:'https://picsum.photos/seed/picsum/200/300',
  desc:'By following these steps, you can handle click events on the buttons and define the logic you want to execute when a button is clicked.'
}
]

useEffect(()=>{getResources()},[]);

const [active,setactive] = useState(0);
const [ftab,setftab]=useState(2);

const handleInputChange = (event) => {
    setli(event.target.value); // Update the state with the input value
  };

const filterBytag = (tag)=>{
}

  return (
    <div className='flex min-h-screen'>
     <Sideb></Sideb>
     <div className='p-2 px-5 flex flex-col'> 
     {
       role==="student" &&
        <div> 
        <div className=' w-[100%] text-xl mt-2 font-bold  mb-4'>YOUR SAVED RESOURCES</div>
        <div className='flex flex-wrap gap-2 mb-2'>
        {
           dummytags.map((tag,ind)=>{return (
    <button
      className={`${
        active === ind ? "bg-blue-700 border-white" : "bg-blue-400"
      } text-white font-bold p-2 rounded-lg min-w-[50px]`}
      key={ind}
      onClick={() =>(setactive(ind),filterBytag(tag))} // Add an onClick event here
    >
      {tag}
    </button>
  );})
         }
    </div>
        <div className='flex flex-col gap-3'>
         {
           dummyData.map((resource,ind)=>{return <Resourcecard title={resource.title} i={resource.i} desc={resource.desc} key={ind} ></Resourcecard>})
          }
        </div>
         
        </div>
     }
     
     
     {
      role === "faculty" && 
      <div className=' md:w-[500px] lg:w-[1000px] '>
      
       <div>
      <div className='w-[100%] text-xl mt-2 font-bold  mb-4'>Your Resources</div>
      <div className='flex flex-wrap gap-3 bg-slate-800 items-center rounded-lg p-2 mb-5 w-full'>
      <button className={` ${ftab ===1 ?'bg-blue-800':'bg-transparent'} font-bold text-white p-2 rounded-lg`} onClick={()=>{setftab(1)}} >published</button>
      <button className={` ${ftab ===2 ?'bg-blue-800':'bg-transparent'} font-bold text-white p-2 rounded-lg`} onClick={()=> {setftab(2)}}>Create a new</button>      
      </div>
      </div>      
      </div>
     }
      {/**for list */}
     {
      role === "faculty" && ftab===1 && 
       <div>
       {
        dummyData.map((data,ind)=>{return <Facultyresourcecard key={ind} data={data}></Facultyresourcecard>})
       }
       </div>
       
      }
       {/**for resource form */}
     {
        role==="faculty" && ftab===2 && 
        <div>
        {
         
         <form className='flex flex-col rounded-lg drop-shadow-xl gap-4  p-3'>
         <div className='flex gap-5 w-full '>
         <div className='uppercase font-bold'>Title</div>
         <input  type='text' className='rounded-md outline-none w-full'></input>
         </div>
         <div className='flex gap-5 w-full flex-wrap justify-between'>
             <div className='uppercase font-bold'>Difficulty Rating</div>
              <div className='flex flex-wrap gap-3 bg-blue-100'>
              <div className={` rounded-lg px-1 cursor-pointer`}>Basic</div>
              <div className=' rounded-lg px-1 cursor-pointer' >Medium</div>
              <div className=' rounded-lg px-1 cursor-pointer' >Hard</div>
              </div>
         </div>
         <div className='flex justify-between gap-3' >
         <div className='uppercase font-bold'>Add the description</div>
         <textarea className='w-full'></textarea>
         </div>
         <div className='flex flex-wrap justify-between gap-3'>
          <div className='flex gap-5 flex-wrap justify-between items-center'>
         
         <div className='uppercase font-bold'>Select Semester</div>
         <select className='p-1 w-[100px]'>
         {
          [1,2,3,4,5,6,7,8].map((item,ind)=>{return <option key={ind}>{item}</option>})
         }
         </select>
         </div>
         <div className='flex gap-5 items-center flex-wrap justify-between'>
         <div className='uppercase font-bold' >Select tags</div>
         <select className='p-1 w-[100px]'>
         {
          dummytags.map((item,ind)=>{return <option key={ind}>{item}</option>})
         }
         </select>
         </div>
         </div>
        
            <div className='font-bold uppercase'>Add the links to references</div>
            
         <div className='flex justify-between gap-3'>
          <input type='text' className='w-full indent-2' value={li}  onChange={handleInputChange}  ></input>
          <div className='bg-green-500 text-white font-bold p-2 px-4 rounded-md cursor-pointer' onClick={()=>LinkHandler(li)}>Add</div>
         </div>   
          {links.length!==0 && <div className='flex flex-col gap-2'>{
              links.map((elem,index)=>{return <div className='flex justify-between '><div key={index} >{elem} </div><div className=' text-white bg-red-600 rounded-md p-1 cursor-pointer' onClick={()=>{linkDeleter(index)}}>delete</div></div>})
          }</div>}
          
          <div className='font-bold uppercase'>Upload the files</div>
          
          <div className='fileupload'> 
              <div class="flex items-center justify-center w-full">
                 <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-300">
                   <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                   </svg>
                 <p class="mb-2 text-sm text-gray-900 dark:text-gray-490"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-900 dark:text-gray-900">PNG, JPG or PDF or DOCX </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
               </label>
             </div> 
         </div>
          
          <button className='bg-green-600 translate-x-6 md:translate-x-36 lg:translate-x-96 font-bold text-white p-2 rounded-md w-[200px]'>Create</button>
         </form>
         
           
        }
        </div>
     }
     
     </div>
     
    </div>
  )
}

export default Resource

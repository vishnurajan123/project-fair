import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectsAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext,editProjectResponseContext } from '../Contexts/ContextShare';
import EditProject from './EditProject';
function MyProject() {
    const {addProjectResponse,setAddprojectResponse}=useContext(addProjectResponseContext)
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

    const [userprojects,setUserprojects]=useState([])
    const getUserUserprojects=async ()=>{
        if(sessionStorage.getItem("token")){
            const token=sessionStorage.getItem("token")
            const reqHeader={
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }
            const result=await userProjectsAPI(reqHeader)
            if(result.status===200){
                setUserprojects(result.data)
            }
            else{
                console.log(result);
                toast.warning(result.response.data)
            }
        
        
        }
    }
    useEffect(()=>{
        getUserUserprojects()
    },[addProjectResponse,editProjectResponse])
    // console.log(userprojects);

    const handleDelete=async (id)=>{
        const token=sessionStorage.getItem("token")
        const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          const result=await deleteProjectAPI(id,reqHeader)
          if(result.status===200){
            // page reload
            getUserUserprojects()
          }else{
            toast.error(result.response.data);
        }
    }


  return (
    <div className='card shadow mt-3 p-3'>
        <div className='d-flex'>
            <h2>My Projects</h2>
            <div className='ms-auto'><AddProject/></div>
        </div>
        <div className='mt-4'>
            {/* collection of user projects */}

{         userprojects?.length>0?userprojects.map(project=>(
    <div className='d-flex align-items-center border rounded p-2 mt-2'>
                <h3>{project.title} </h3>
                <div className='ms-auto'>
                    <EditProject project={project} />
                    <a href={`${project.github}`} target='_blank' className='btn'> <i class="fa-brands fa-github fa-2x"></i></a>
                    <button onClick={()=>handleDelete(project._id)} className='btn'> <i class="fa-solid fa-trash fa-2x"></i></button>

                </div>

            </div>
)): <p>No projects Added</p>
            
}

        </div>


        <ToastContainer/>

    </div>
  )
}

export default MyProject
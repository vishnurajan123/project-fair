import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI=async (user)=>{

    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login

export const loginAPI=async (user)=>{

    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}
// addproject
export const addProjectAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

// homeproject
export const homeProjectAPI=async ()=>{
    return await commonAPI("GET",`${BASE_URL}/project/home-projects`,"","")
}

// allprojects
export const allProjectsAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/project/all?search=${searchKey}`,"",reqHeader)

}
// user projects
export const userProjectsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)
}

// edit project
export const editProjectsAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
}

export const deleteProjectAPI=async (projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
}

// edit user
export const editUserAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit-user`,reqBody,reqHeader)
}


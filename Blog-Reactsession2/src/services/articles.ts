import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
const api = useApi();

 export async function getAllArticles(){
    try{
        const response = await api.get('/posts');
        return response.data;
    }
    catch(error){
        return error
    }
 }

 export async function getLastArticle(){
    try{
        const response = await api.get('/posts/100');
        return response.data;
    }
    catch(error){
        return error
    }
 }

 export async function getOneArticle(id) {
    try{
        const response =  await api.get(`posts/${id}`);
        return response.data;
    }
    catch(error){
        return error
    }
 }

 export async function updateOneArticle(id){
    try{
        const response = await api.put(`posts/${id}`);
        return response.data;
    }
    catch(error){
        return error
    }
 }
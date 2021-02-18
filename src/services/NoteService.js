import axios from 'axios'
import userApi from '../apiConstants/userApiContants.js'

let addNote = (data ) => {
    console.log("This is Service : ",data)
    console.log("Token : ",localStorage.getItem('token'));
    const response = axios.post('https://localhost:44379/api/Note/addNote',data,
        {
         headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
        }
      );
      console.log("Note response: ",response)
        return response;
 }

 let getAllNote = (noteId) => {

    //console.log("Token : ",localStorage.getItem('token'));
    const response = axios.get('https://localhost:44379/api/Note/getAllNotes'+noteId,
      {
         headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    
      return response;
}

let getArchiveNote = (userId) => {

  console.log("Token : ",localStorage.getItem('token'));
  const response = axios.get('https://localhost:44379/api/Note/archive?userId='+userId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}

let DeletNote = (noteId) => {

  console.log("Token : ",localStorage.getItem('token'));
  console.log("SErvice value of Note : ",noteId);
  const response = axios.delete('https://localhost:44379/api/Note/delete?noteId='+noteId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}


let getTrahsNote = (userId) => {

  console.log("Token : ",localStorage.getItem('token'));
  const response = axios.get('https://localhost:44379/api/Note/trash?userId='+userId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}

 export default{addNote, getAllNote, getArchiveNote,DeletNote,getTrahsNote }
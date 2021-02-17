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

 let getAllNote = () => {

    //console.log("Token : ",localStorage.getItem('token'));
    const response = axios.get('https://localhost:44379/api/Note/getAllNotes',
      {
         headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    
      return response;
}

let getArchiveNote = () => {

  console.log("Token : ",localStorage.getItem('token'));
  const response = axios.get('https://localhost:44379/api/Note/archive',
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}

let TrashNote = (noteId) => {

  console.log("Token : ",localStorage.getItem('token'));
  const response = axios.get('https://localhost:44379/api/Note?noteId='+noteId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}

 export default{addNote, getAllNote, getArchiveNote,TrashNote}
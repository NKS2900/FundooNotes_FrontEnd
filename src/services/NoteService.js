import axios from 'axios'
import userApi from '../apiConstants/userApiContants.js'

let addNote = (data) => {

    const response = axios.post('https://localhost:44379/api/Note/addNote', data,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem('token'), },
      }
    );
    console.log("Note response: ", response)
    return response;
  }

 let getAllNote = (noteId) => {

    const response = axios.get('https://localhost:44379/api/Note/getAllNotes'+noteId,
      {
         headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
      return response;
}

let getArchiveNote = (userId) => {

  const response = axios.get('https://localhost:44379/api/Note/archive?userId='+userId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  
    return response;
}

let getTrahsNote = (userId) => {

  const response = axios.get('https://localhost:44379/api/Note/trash?userId='+userId,
    {
      headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  return response;
}

let DeletNote = (noteId) => {

  const response = axios.delete('https://localhost:44379/api/Note/delete?noteId='+noteId,
    {
      headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
  return response;
}

let getReminder = (userId) => {

  const response = axios.get('https://localhost:44379/api/Note/reminder?userId='+userId,
    {
       headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
    }
  );
    return response;
}

let UnArchive = (noteId) => {

  const response = axios.put('https://localhost:44379/api/Note/archive?noteId='+noteId,null,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let UnSetReminder = (noteId) => {

  const response = axios.put('https://localhost:44379/api/Note/unsetReminder?noteId='+noteId,null,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let ChangeColor = (data) => {

  console.log("NoteService CCc: ",data.noteId," ",data.color);
  const response = axios.put('https://localhost:44379/api/Note/color',data ,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let RestoreTrashed = (noteId) => {

  const response = axios.put('https://localhost:44379/api/Note/restore?noteId='+noteId,null,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let DeleteForever = (noteId) => {

  const response = axios.delete('https://localhost:44379/api/Note/deletNoteForever?noteId='+noteId,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let UpdateReminder = (data) => {

  console.log("NoteService SetRe: ",data.noteId," ",data.color);
  const response = axios.put('https://localhost:44379/api/Note/setReminder',data ,
      {
        headers: { Authorization: "Bearer "+localStorage.getItem('token'), },
      }
    );
    return response;
}

let UpdateNoteService = (data) => {

  const response = axios.put('https://localhost:44379/api/Note/updateNotes', data,
    {
      headers: { Authorization: "Bearer " + localStorage.getItem('token'), },
    }
  );
  console.log("Note response: ", response)
  return response;
}

 export default{
                  addNote, 
                  getAllNote, 
                  getArchiveNote,
                  DeletNote,
                  UnArchive,
                  getTrahsNote,
                  getReminder,
                  UnSetReminder,
                  ChangeColor,
                  RestoreTrashed,
                  DeleteForever,
                  UpdateReminder,
                  UpdateNoteService,
                }
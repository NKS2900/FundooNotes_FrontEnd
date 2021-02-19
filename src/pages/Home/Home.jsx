import React, { useState } from "react";
import AppBar from '../../components/AppBar/Appbar.jsx'
import AddNote from '../../components/Note/Note.jsx'
import DisplayNote from '../../components/Display/DisplayNote.jsx'
import '../Home/home.css'

export default function Home() {
  return (
    <div className="parent">
      <AppBar />
      <div className="card-body text-center" id="body">
        <div className="main">
          <AddNote />
        </div>
      </div>
      <div className="displayNotes"><DisplayNote /></div>
    </div>
  )
}
const fs = require('fs');
const express = require('express');
const util = require('util');
const json = require('db.json');

/* Page Elements */
var saveBtn = document.querySelector('.save-note');
var newBtn = document.querySelector('.new-note');
var noteBody = document.querySelector('.note-textarea');
var noteTitle = document.querySelector('.note-title');
var sidebarList = document.querySelector("ul.list-group");
var sidebarListItems = document.querySelectorAll("ul.list-group li");
var navBarLink = document.querySelector('.navbar-brand');
var notes = [];

// Set left nav click actions
var i = 0;
while(i < sidebarListItems.length){
    sidebarListItems[i].addEventListener("click",getNote);
   i++;
}
//Onclick of left sidebar menu, open note/note title in center divs

//On clicking button get notes and send to saveNote()
/*const getNotes = e =>{
    if(e.target.previousSibling.value !== ''){
        saveNote(e.target.previousSibling.id, e.target.previousSibling.value);
    }else{
    }
    loadAllNotes();
}*/

// Save day's events
function saveNote(sentId, sentValue){
/*  when note saved, grab center title and note content 
    and save note to package.json and add note to left sidebar
*/
    /* Save to left nav */
    const newNoteListItem = document.createElement('li');
    newNoteListItem.textContent = noteTitle.value;
    sidebarList.prepend(newNoteListItem);

    /* Save to JSON */
    let noteToSave = JSON.stringify({'Title': noteTitle.value, 'Text': noteBody.value});
    fs.writeFile(`../db/db.json`, `noteToSave`);
    //sidebarList.prepend(newNoteTitle);
  /*  var saveNoteObj = {
        day: sentId,
        eventName: sentValue
    }

    // get saved scores from localstorage, or if not any, set to empty array
    notes = JSON.parse(window.localStorage.getItem("notes")) || [];
    for(k = 0; k < notes.length; k++){
        //console.log(notes[k]);

        // remove prior events for day
        if(notes[k].day == saveNoteObj.day){ //|| notes[k].eventName == ""
            //saveNoteObj.eventName = notes[k].eventName;
           
            notes.splice(k, 1); // How can I remove the prior value?
        }
    }
    //console.log(notes.length);
    notes.push(saveNoteObj);
    window.localStorage.setItem("notes", JSON.stringify(notes));*/
}
newBtn.addEventListener('click', saveNote);

// Load at startup
function loadAllNotes(){

    // load saved
    notes = JSON.parse(window.localStorage.getItem("notes")) || [];

    //load notes
    if(notes.length > 0){
    
        // loop notes
        for(var i = 0; i < notes.length; i++){

            // loop hours
            for(var j = 0; j < hours.length; j++){

                // Does hour id match notes id
                if(notes[i].day == hours[j][0]){
                    var day = document.getElementById(notes[i].day);
                    day.value = notes[i].eventName;

                    // Row bkgd colors
                    // now red
                    if(hours[j][1] == currentHour){
                        
                        document.getElementById(hours[j][0]).style.backgroundColor = "#f00";

                    // past grey
                    }else if(hours[j][1] < currentHour){

                        document.getElementById(hours[j][0]).style.backgroundColor = "#ddd";
                
                    // future green
                    }else if (hours[j][1] > currentHour){

                        document.getElementById(hours[j][0]).style.backgroundColor = "#0f0";

                    }else{
                        // time travel
                    }
                }
            }
        }
    }
}

/*fs.writeFile(`index.html`, `<!DOCTYPE html></html>`, (err) =>
            err ? console.error(err) : console.log('Team members saved!'));*/

//loadAllNotes();

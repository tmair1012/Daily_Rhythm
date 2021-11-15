

async function deleteTask(event) {
    event.preventDefault();

    
    
    

    await fetch(`/api/tasks/1`, {
        method: 'DELETE',


    });
    document.location.replace('/dashboard')
}


document.querySelector('#deletepost-btn')
  .addEventListener('click', deleteTask);


//window to each id
//http://localhost:3001/api/tasks/1
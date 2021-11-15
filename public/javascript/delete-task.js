async function deleteTask() {
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1]
      console.log(id);
await fetch(`/dashboard/edit/${id}`, {
    method: 'DELETE',


    });
    document.location.replace('/dashboard/')
}


document.querySelector('#deletepost-btn')
  .addEventListener('click', deleteTask);


//window to each id
//http://localhost:3001/api/tasks/1
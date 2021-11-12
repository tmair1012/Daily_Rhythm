async function newtask(event) {
    event.preventDefault();

    const title = document.querySelector('#taskName').value.trim();
    const description = document.querySelector('#TaskDescription').value.trim();
    const time = document.querySelector('#takeTime').value.trim();
    console.log('hi');
    console.log(title, description, time);
    const response = await fetch(`/api/tasks/`, {
        method: 'POST',
        body: JSON.stringify(
            {
            title,
            description,
            time
            
        }),
        headers: { 'Content-Type': 'application/json'}
    });
    console.log(response);
    //if (response.ok) {
        document.location.replace('/dashboard')
   // }
    // else{
    //     console.log('no work');
    // }
}



document.querySelector('#addTaskBtn')
  .addEventListener('click', newtask);
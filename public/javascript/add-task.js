async function newtask(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="taskTitle"').value;

    const response = await fetch(`/api/task-routes`, {
        method: 'POST',
        body: JSON.stringify(
            {
            title,
            
        })
    } )
}
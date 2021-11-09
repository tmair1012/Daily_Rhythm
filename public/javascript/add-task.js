async function newtask(event) {
    event.preventDefault();

    const title = document.querySelector('#taskName').value.trim();
    const description = document.querySelector('#TaskDescription').value.trim();
    console.log('hi');
    console.log(title, description);
    const response = await fetch(`/api/tasks/add`, {
        method: 'POST',
        body: JSON.stringify(
            {
            title,
            description,
        }),
        headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/taskView/')
    }
}

document.querySelector('#addTaskBtn')
.addEventListener('click', newtask)
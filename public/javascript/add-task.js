async function newtask(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="taskTitle"').value;
    const description = document.querySelector('input[name="taskDescription"]').value

    const response = await fetch(`/api/task-routes`, {
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
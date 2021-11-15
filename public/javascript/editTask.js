async function editTask(event) {
    event.preventDefault();
    
    const edittitle = document.querySelector('#editTitle').value.trim();
    const editdescription = document.querySelector('#editDesc').value.trim();
    const edittime = document.querySelector('#editTime').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1]
    console.log(id);
    const response = await fetch(`api/tasks/${id}` , {
        method: "PUT",
        body: JSON.stringify({
            edittitle,
            editdescription,
            edittime
        }),
        headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
    }

    document.querySelector('#edit-post').addEventListener('click', editTask)
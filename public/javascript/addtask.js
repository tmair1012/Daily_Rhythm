async function newtask(event) {
    event.preventDefault();

    const title = document.querySelector('#taskName').value.trim();
    const description = document.querySelector('#TaskDescription').value.trim();
    const phoneNumber = document.querySelector('#PhoneNumber').value.trim();
    const time = document.querySelector('#takeTime').value.trim();


    console.log(title, description, phoneNumber, time);
    const response = await fetch(`/`, {
        method: 'POST',
        body: JSON.stringify(
            {
            title,
            description,
        }),
        headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/taskView')

        document.getElementsByClassName("dashboardSection");
    }
}



document.querySelector('#addTaskBtn')
  .addEventListener('click', newtask);
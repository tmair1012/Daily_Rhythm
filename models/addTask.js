

// this is where we write the code for users to add a task
function addTask(){
    const addTask = [
        {
        name: 'taskName',
        type: 'text',
        message: 'Please enter the name of the task you would like to add: ',
        },
        {
        name: 'taskDescription',
        type: 'text',
        message: 'Please enter a description of the task you wish to complete'
        }]
    inquierer.prompt(addTask)
    .then(function(data){
        db.query('INSERT INTO addTask (name) VALUES (?)', data.taskName, function(err, data){
            if (err)
            throw err
            nextTask();
        })
    })
}
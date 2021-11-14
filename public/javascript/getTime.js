const getDate = moment();
    dateEl = getDate.format('MMMM Do YYYY, h:mm:ss a');
    document.querySelector('#currentday').append(dateEl);
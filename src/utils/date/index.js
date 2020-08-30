

export const getChatTime = (date) => {
    
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM' }` ;

}

export const setDateChat = (allDate) => {

    const year = allDate.getFullYear();
    const month = allDate.getMonth() + 1;
    const date = allDate.getDate();

    return `${year}-${month}-${date}` ;

}
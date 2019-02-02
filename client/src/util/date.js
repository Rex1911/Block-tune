const formatDate = date => {
    let month = date.getMonth()+1;
    if(month < 10){
        month = '0' + month;
    }
    return date.getDate()+'-'+ month +'-'+date.getFullYear();
}

export default formatDate;

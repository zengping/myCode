    function timeStampbegindate(){  
        var datetime = new Date();
        var year = datetime.getFullYear();  
        var month = datetime.getMonth() < 10 ? "0" + (datetime.getMonth()) : datetime.getMonth();  
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate(); 
        return year + "-" + month + "-" + date;  
    }

    function timeStampenddate(){  
        var datetime = new Date();
        var year = datetime.getFullYear();  
        var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;  
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate(); 
        return year + "-" + month + "-" + date;  
    }  

    $("#begindate").val(timeStampbegindate());
    $("#enddate").val(timeStampenddate());

    var begindate = new Kalendae.Input('begindate', {
        months:1,
        direction:'past'
    });
    var enddate = new Kalendae.Input('enddate', {
        months:1,
        direction:'past'
    });
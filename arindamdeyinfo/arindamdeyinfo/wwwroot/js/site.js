$(function () {
    //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    $.ajax({
        url: 'https://testwebapibiplabhome.azurewebsites.net/api/values/1',
        //crossDomain: true,
        method: 'GET',
        dataType: 'text'
    })
        .done(function (data) {
            alert(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            alert(jqXHR.statusText);
        });
});
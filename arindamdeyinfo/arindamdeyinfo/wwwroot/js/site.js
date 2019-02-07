$(function () {
    $.ajax({
        url: 'https://testwebapibiplabhome.azurewebsites.net/api/values/1',
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
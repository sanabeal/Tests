$(document).ready(function () {
    var apiBaseUrl = "http://localhost:50380/";
    $.ajax({
        url: apiBaseUrl + 'api/Post',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
            var $header = $('<thead/>').html('<tr><th>Post</th><th>Comment</th><th>Date</th><th>Like</th><th>Unlike</th></tr>');
            $table.append($header);
            $.each(data, function (i, val) {



                var $row = $('<tr/>');
                $row.append($('<td/>').html(val.Post));
                $row.append($('<td/>').html(val.Comment));
                $row.append($('<td/>').html(val.Date));
                $row.append($('<td/>').html(val.Like));
                $row.append($('<td/>').html(val.Unlike));
                $table.append($row);
            });
            $('#dataLoadedPanel').html($table);
        },
        error: function () {
            alert('Error!');
        }
    });
});


$(document).on('click', '#btnGetData', function () {

    var posts = $('#txtPost').val();

    var apiBaseUrl = "http://localhost:50380/";
    $.ajax({
        url: apiBaseUrl + 'api/Post' + posts,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
            var $header = $('<thead/>').html('<tr><th>Post</th><th>Comment</th><th>Date</th><th>Like</th><th>Unlike</th></tr>');
            $table.append($header);
            $.each(data, function (i, val) {
                var $row = $('<tr/>');
                $row.append($('<td/>').html(val.Post));
                $row.append($('<td/>').html(val.Comment));
                $row.append($('<td/>').html(val.Date));
                $row.append($('<td/>').html(val.Like));
                $row.append($('<td/>').html(val.Unlike));
                $table.append($row);
            });
            $('#dataLoadedPanel').html($table);
        },
        error: function () {
            alert('Error!');
        }
    });

});
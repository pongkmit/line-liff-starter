window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    document.getElementById('useridfield').textContent = data.context.userId;


    // openWindow call
    document.getElementById('btnLogin').addEventListener('click', function () {
        var opt = {
            url: 'https://eb7e9f50.ngrok.io/api/linebot/LineLogIn',
            type: 'POST',
            contentType: "application/x-www-form-urlencoded",
            data: {
				'EMAIL_ADDRESS': $('#txtusername').val(),
				'PASSWORD': $('#txtpassword').val(),
				'LINE_ID': data.context.userId
			},
            dataType: "json",
            success: function(response) {
                if (response.didError) {
                    swal("An error has occurred!", response.message, "warning");
                } else {
					liff.closeWindow();
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                swal("Application Error", xhr.responseText, "warning");
            },
            failure: function(response) {
                swal("Application Error", response, "warning");
            }
        };
        $.ajax(opt);
    });

    // closeWindow call
    document.getElementById('btnBack').addEventListener('click', function () {
        liff.closeWindow();
    });

}
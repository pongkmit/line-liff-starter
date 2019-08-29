function initializeApp(data) {
    let urlParams = new URLSearchParams(window.location.search);
    $('#name').val(urlParams.toString());
    $('#LINE_ID').val(data.context.userId);
    }
    //ready
window.onload = function (e) {
//init LIFF
    liff.init(function (data) {
        initializeApp(data);
    });
    //RegiterButton
    $('#registerBtn').click(function (e) {
        e.preventDefault();
        var $form = $(this).closest('form');
        var data = $form.serialize();
        var res;
        var err;
        var opt = {
            type: 'post',
            url: 'https://b97f76aa.ngrok.io/api/LineBot/LineLogIn',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            //dataType: 'json',
            data: data,
            success: function (result) {
                //window.alert("Register success.");
                liff.sendMessages([{
                    type: 'text',
                    text: "Register to IoTFMS Successfully."
                }]).then(function () {
                    window.alert("Register success.");
                    liff.closeWindow();
                }).catch(function (error) {
                    window.alert("Error sending message: " + error);
                });               
            },
            error: function (xhr, status, error) {
                window.alert("Error : " + xhr.responseText );
            }
            };
        $.ajax(opt);
    });
};
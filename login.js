$(function(){
    $('#loginForm').on('submit', function(e){
        e.preventDefault();
        $('#errorMsg').text('');
        $.ajax({
            type: 'POST',
            url: '/api/login',
            contentType: 'application/json',
            data: JSON.stringify({
                username: $('#username').val(),
                password: $('#password').val()
            }),
            success: function(res){
                if(res && res.success){
                    window.location.href = 'index.html';
                }else{
                    $('#errorMsg').text(res && res.error ? res.error : 'Login failed');
                }
            },
            error: function(){
                $('#errorMsg').text('Login failed');
            }
        });
    });
});

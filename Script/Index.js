$(document).ready(function () {
    $("#divDialog").dialog({
        resizable: false,
        autoOpen: false,
        modal: true,
        width: 400,
        height: 200,
        //buttons: {
        //    'Continue': function () {
        //        $(this).dialog('close');
        //        alert('You clicked continue');
        //    }, // end continue button
        //    Cancel: function () {
        //        $(this).dialog('close');
        //    } //end cancel button
        //}//end buttons

    });//end dialog

    $('.btnCencel').click(function () {
        $('#divDialog').dialog('close');
    });

    $('#btnOpen').click(function () {

        $('#divDialog').dialog('open');

    });


    $(document).ready(function () {
        $('.username').focus(function () {
            $('.ShowErrorUserName').text(' ');
            $('.username').css({
                'border-color': 'none',
                'border': '1px solid'
            });
        });
        $('.password').focus(function () {
            $('.ShowErrorPassword').text(' ');
            $('.password').css({
                'border-color': 'none',
                'border': '1px solid'
            });
        });
        $(function () {
            $('.btnSubmit').on('click', function () {
                var username = $('.username').val();
                var password = $('.password').val();
                if (username == "" && password == "") {
                    $('.ShowErrorUserName').text('*');
                    $('.username').css('border-color', 'red');
                    $('.ShowErrorPassword').text('*');
                    $('.password').css('border-color', 'red');
                    return false;
                }
                if (username == "") {
                    $('.ShowErrorUserName').text('*');
                    $('.username').css('border-color', 'red');
                    return false;
                }
                if (password == "") {
                    $('.ShowErrorPassword').text('*');
                    $('.password').css('border-color', 'red');
                    return false;
                }
                //if (username != "" && password != "") {
                //    if (username.length > 15) {
                //        $('.ShowErrorUserName').text('User Name is more than 15 character');
                //        $('.username').css('border-color', 'red');
                //    }
                //    if (password.length > 15) {
                //        $('.ShowErrorPassword').text('Password is more than 15 character');
                //        $('.password').css('border-color', 'red');
                //    }
                //}

            });
        });
    });

}); //end ready event
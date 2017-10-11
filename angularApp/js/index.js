 $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function() {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

//loader

 $({
                property: 0
            }).animate({
                property: 105
            }, {
                duration: 2000,
                step: function() {
                    var _percent = Math.round(this.property);
                    $('#progress').css('width', _percent + "%");
                    if (_percent == 105) {
                        $("#progress").addClass("done");
                    }
                }
            });


   $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });

            $('#back-to-top').tooltip('show');

        });
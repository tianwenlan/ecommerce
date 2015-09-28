/*------------------------
functions for login/register
*/

// Lean modal Plugin
// http://leanmodal.finelysliced.com.au/
(function($) {
        $.fn.extend({
                leanModal: function(options) {

                        var defaults = {
                                top: 100,
                                overlay: 0.5,
                                closeButton: null
                        }

                        var overlay = $("<div id='lean_overlay'></div>");

                        $("body").append(overlay);

                        options = $.extend(defaults, options);

                        return this.each(function() {

                                var o = options;

                                $(this).click(function(e) {

                                        var modal_id = $(this).attr("href");

                                        $("#lean_overlay").click(function() {
                                                close_modal(modal_id);
                                        });

                                        $(o.closeButton).click(function() {
                                                close_modal(modal_id);
                                        });

                                        var modal_height = $(modal_id).outerHeight();
                                        var modal_width = $(modal_id).outerWidth();

                                        $('#lean_overlay').css({
                                                'display': 'block',
                                                opacity: 0
                                        });

                                        $('#lean_overlay').fadeTo(200, o.overlay);

                                        $(modal_id).css({

                                                'display': 'block',
                                                'position': 'fixed',
                                                'opacity': 0,
                                                'z-index': 11000,
                                                'left': 50 + '%',
                                                'margin-left': -(modal_width / 2) + "px",
                                                'top': o.top + "px"

                                        });

                                        $(modal_id).fadeTo(200, 1);

                                        e.preventDefault();

                                });

                        });

                        function close_modal(modal_id) {

                                $("#lean_overlay").fadeOut(200);

                                $(modal_id).css({
                                        'display': 'none'
                                });

                        }

                }
        });

})(jQuery);

// Plugin options and our code
$("#modal_trigger").leanModal({
        top: 100,
        overlay: 0.6,
        closeButton: ".modal_close"
});

$(function() {
        // Calling Login Form
        $("#login_form").click(function() {
                $(".user_login").show();
                return false;
        });

        // Calling Register Form
        $("#register_form").click(function() {
                $(".user_login").hide();
                $(".user_register").show();
                $(".header_title").text('Register');
                return false;
        });

        // Going back to Social Forms
        $(".back_btn").click(function() {
                $(".user_login").show();
                $(".user_register").hide();
                $(".header_title").text('Login');
                return false;
        });
});

/*------------------------
functions for 
*/
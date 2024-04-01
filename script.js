$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });
    
    //scroll-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // toggle menu/navbar script
    $('.menu-btn ').click(function(){
        $('.navbar .menu ').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

//Typing animation script
var typed = new Typed(".typing", {
    strings: ["Systems Developer", "Front End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true

});

var typed = new Typed(".typing-2", {
    strings: ["Systems Developer", "Front End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true

});

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevent the form from submitting and reloading the page
        event.preventDefault();

        // Display the pop-up message
        document.getElementById('thankYouMessage').classList.remove('hidden');

        // Submit the form asynchronously
        var form = this;
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // Form submitted successfully, reload the page after 2 seconds
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            }
        };
        xhr.send(new URLSearchParams(formData).toString());
    });

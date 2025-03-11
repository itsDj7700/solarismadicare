function asd(d1){
    let valu=document.getElementById(d1).value;
    if( valu=="X-ray"){
        document.getElementById('p1').innerHTML ="1 Consult your doctor before the procedure.<br> 2 Ask if you need to be fasting. <br>3 Wear comfortable clothes and shoes. <br>4 Remove all jewelry, glasses, and metal objects."
    }
    else if(valu=="Mammography"){
        document.getElementById('p1').innerHTML ="1 Wear a two-piece outfit and comfortable shoes You will only need to remove your top and bra for a mammogram. <br> 2 Don’t wear any neck jewelry  <br> 3 Take your daily medications <br> Share important information with your mammogram technician "
    }
    else if(valu=="Bone-Densitometry"){
        document.getElementById('p1').innerHTML ="1 Dont take calcium supplements for 24 hours before the exam.<br> 2 If you’ve had an injection of barium or contrast dye for a CT scan or MRI, wait 7 days before having a central DXA.<br> 3  The contrast dye could interfere with your bone density test. <br> 4 Avoid wearing clothes with metal zippers, belts, or buttons."
    }
    else if(valu=="Ultrasound"){
        document.getElementById('p1').innerHTML ="1 Preparing for your ultrasound can help you get the most out of the procedure.  <br> 2 Knowing what to expect and how to get ready beforehand can make the process easier and more comfortable. <br>3  It is also important to make sure you have all the information you need about the procedure and the results."
    }
    else if(valu=="CT-Scan"){
        document.getElementById('p1').innerHTML ="1 Don’t eat for four hours before your CT scan.<br> 2 Drink only clear liquids (like water, juice or tea) in the two hours leading up to your appointment. <br> 3 Wear comfortable clothes and remove any metal jewelry or clothing."
    }
    else if(valu=="Vacuum-Assisted-Biopsy"){
        document.getElementById('p1').innerHTML ="1 no special preparation needed and you can eat and drink as usual. <br> 2 Please bring a list of your medication with you and make sure you take any regular medication as normal. <br> 3 It is helpful to wear a separate top, and skirt or trousers."
    }
    else if(valu=="Vacuum-Assisted-Excision"){
        document.getElementById('p1').innerHTML ="1 no special preparation required. You can eat and drink normally. <br> 2 Please bring a list of your medication with you and make sure you take any regular medication as usual.<br> 3 You will find it helpful to wear a separate top and skirt or trousers."
    }
    else if(valu=="CT-Guided-Biopsy"){
        document.getElementById('p1').innerHTML ="1 no special preparation required."
    }
    else if(valu=="Ultrasound-Guided"){
        document.getElementById('p1').innerHTML ="1 Preparing for your ultrasound can help you get the most out of the procedure.  <br> 2 Knowing what to expect and how to get ready beforehand can make the process easier and more comfortable. <br>3  It is also important to make sure you have all the information you need about the procedure and the results."
    }
    else if(valu=="Radiofrequency-Ablation"){
        document.getElementById('p1').innerHTML ="1 Ask about your medicines You may need to stop taking some of your usual medicines before your procedure. <br> 2 Take devices off your skin  <br> 3 Note the time of your appointment "
    }
    else if(valu=="Varicose-Vein-Ablation"){
        document.getElementById('p1').innerHTML ="1 Your symptoms, including any that may not seem linked to varicose veins, and when they began. <br> 2 Important personal information, including a family history of varicose veins or spider veins. "
    }
    else if(valu=="Guided-Blocks"){
        document.getElementById('p1').innerHTML ="1 Fasting: Follow your doctors instructions regarding eating and drinking. You may need to fast for a certain period before the procedure <br> 2 Personal Care: Take a bath or shower before the appointment. Avoid applying lotions, perfumes, deodorants, or nail polish"
    }
    else if(valu=="PET-Guide"){
        document.getElementById('p1').innerHTML ="1 Do not eat or drink anything, except water, for 6 hours <br> 2 You may drink water, as much water as you can would be helpful, until arrival."
    }
    else if(valu=="Nuclear-Medicine"){
        document.getElementById('p1').innerHTML ="1 No food or drink six hours prior to appointment. No pain medications or narcotics of any kind six hours before procedure."
    }
   
    }
    function s2(){
        let valu=document.getElementById('s1').value;
        if( valu=="Radiology"){
            document.getElementById('s3').style.display="block";
            document.getElementById('s4').style.display="none";
            document.getElementById('s5').style.display="none";
        }
        else if(valu=='Biopsies'){
    
            document.getElementById('s3').style.display="none";
            document.getElementById('s4').style.display="block"
            document.getElementById('s5').style.display="none";
        }
        else if(valu=='Facility'){
            document.getElementById('s3').style.display="none";
            document.getElementById('s4').style.display="none"
            document.getElementById('s5').style.display="block";   
        }
        }
    
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);


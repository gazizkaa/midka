
$(document).ready(function () {


  $("main, section, .products, .gallery, .contact")
    .hide()
    .fadeIn(1000);




  $("#featuredCarousel").hover(
    function () {
      $(this).carousel("pause"); // Pause when hovered
    },
    function () {
      $(this).carousel("cycle"); // Resume when mouse leaves
    }
  );



  $("form").on("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all required fields 🌸");
    } else {
      alert(`Thank you, ${name}! Your message has been sent 💌`);
      $(this).trigger("reset");
    }
  });



  $(".gallery img").hover(
    function () {
      $(this).stop().animate({ opacity: 0.7 }, 200);
    },
    function () {
      $(this).stop().animate({ opacity: 1 }, 200);
    }
  );



  $("nav a").on("click", function () {
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });

});

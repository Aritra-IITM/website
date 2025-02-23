/**
* Template Name: Multi - v2.1.0
* Template URL: https://bootstrapmade.com/multi-responsive-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Set a delay of 3 seconds before hiding the preloader
  setTimeout(() => {
      preloader.style.display = "none"; // Hide preloader
      mainContent.style.display = "block"; // Show main content
  }, 500); // 3000 milliseconds = 3 seconds
    });


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-menu");

  navLinks.forEach(link => {
  link.addEventListener("click", event => {
  // Remove 'active' class from all list items
  document.querySelectorAll(".nav-menu").forEach(li => li.classList.remove("active"));
    
  // Add 'active' class to the clicked list item
  event.target.parentElement.classList.add("active");
    });
  });
});

// script.js

// Optional: Dynamically adjust animation duration or add interactivity
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.image-container');

  // Example: Change animation duration on hover
  container.addEventListener('mouseover', () => {
      container.style.animationDuration = '5s';
  });

  container.addEventListener('mouseout', () => {
      container.style.animationDuration = '10s';
  });
});

document.querySelector('.img-box').addEventListener('click', function() {
  alert('Box clicked!');
});


document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.section-title');

  // Function to check if the container is in view
  function checkVisibility() {
    const rect = container.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      container.classList.add('visible');
    }
  }

  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);
  // Initial check when the page loads
  checkVisibility();
});

// animation enlarge
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".img-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        } 
        //else {
        //  entry.target.classList.remove("animate"); // Optional: Reset if you want to reanimate
        //}
      });
    },
    {
      threshold: 0.75, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation right
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll("#right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 0.75, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation left
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll("#left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 0.75, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation center
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll("#center");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 0.75, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation fade
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".section-main");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 0.4, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation fade
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".section-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 1.0, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation slide
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".title-bg");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        }
      });
    },
    {
      threshold: 0.4, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// animation rotate
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".title-main");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add the animation class
        } else {
          entry.target.classList.remove("animate"); // Optional: Reset if you want to reanimate
        }
      });
    },
    {
      threshold: 0.25, // Trigger when 50% of the element is visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

// 3D background

  // Select the container
  const container = document.getElementById('3d-background');

  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Add a rotating object (e.g., a cube)
  const geometry = new THREE.BoxGeometry(); // Cube geometry
  const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Add lighting
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the object
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

/*

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });



  
})(jQuery);

*/



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
  let toggleButton = document.getElementById('mobile-nav-toggle');
  let nav = document.querySelector('.mobile-nav');

  if (toggleButton && nav) { // Ensure elements exist
      let toggleIcon = toggleButton.querySelector('i');

      toggleButton.addEventListener('click', function () {
          if (nav.style.display === 'none' || nav.style.display === '') {
              nav.style.display = 'block';
              if (toggleIcon) toggleIcon.classList.replace('fa-bars', 'fa-times');
          } else {
              nav.style.display = 'none';
              if (toggleIcon) toggleIcon.classList.replace('fa-times', 'fa-bars');
          }
      });
  }
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
 
  

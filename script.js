// Theme Toggle
function toggleTheme() {
  // Toggle class on both body and html so CSS rules targeting
  // `html, body` with `.light` will take effect.
  document.body.classList.toggle('light');
  document.documentElement.classList.toggle('light');
}

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(wrap.clientWidth, wrap.clientHeight);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
renderer.domElement.style.zIndex = "0";
wrap.appendChild(renderer.domElement);

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 3;
controls.maxDistance = 10;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.4;

// Lights
const dir = new THREE.DirectionalLight(0xffffff, 1.0);
dir.position.set(5, 10, 7);
scene.add(dir);
scene.add(new THREE.AmbientLight(0x404050, 0.6));

// Scroll helper function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const html = document.documentElement;
  
  // Toggle the light class on both elements so CSS rules for
  // `html, body` apply consistently.
  body.classList.toggle('light');
  html.classList.toggle('light');
  
}

// Make functions globally available
window.scrollToSection = scrollToSection;
window.toggleTheme = toggleTheme;
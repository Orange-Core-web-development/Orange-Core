import * as THREE from "three";

export function mountVehicleScene(host) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x090a0b, 10, 26);

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(7.5, 3.3, 9.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  host.querySelector(".scene-loading")?.remove();
  host.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xdce9ff, 0x24150f, 2.1));
  const key = new THREE.DirectionalLight(0xffe1ca, 3.8);
  key.position.set(4, 7, 5);
  scene.add(key);
  const rim = new THREE.PointLight(0xf05b2a, 34, 18);
  rim.position.set(-5, 2, -3);
  scene.add(rim);
  const fill = new THREE.PointLight(0x8eb5d0, 18, 16);
  fill.position.set(2, 1, 5);
  scene.add(fill);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(7, 64),
    new THREE.MeshBasicMaterial({ color: 0x151311, transparent: true, opacity: 0.72 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.86;
  scene.add(floor);

  const car = new THREE.Group();
  scene.add(car);
  const paint = new THREE.MeshPhysicalMaterial({ color: 0xe85a2a, metalness: 0.78, roughness: 0.23, clearcoat: 1, clearcoatRoughness: 0.12 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111315, metalness: 0.68, roughness: 0.34 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x17212a, metalness: 0.3, roughness: 0.12, transparent: true, opacity: 0.88 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x08090a, roughness: 0.86 });
  const alloy = new THREE.MeshStandardMaterial({ color: 0xa7a9a8, metalness: 0.92, roughness: 0.2 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xffd7c4 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(4.15, 0.48, 1.78), paint);
  body.position.y = -0.16;
  car.add(body);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.25, 1.68), paint);
  nose.position.set(1.68, -0.23, 0);
  nose.rotation.z = -0.08;
  car.add(nose);
  const rear = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.32, 1.72), paint);
  rear.position.set(-1.75, -0.08, 0);
  car.add(rear);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.66, 1.38), glass);
  cabin.position.set(-0.1, 0.34, 0);
  cabin.rotation.z = -0.12;
  car.add(cabin);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.08, 1.34), dark);
  roof.position.set(-0.18, 0.7, 0);
  roof.rotation.z = -0.12;
  car.add(roof);

  for (const x of [-1.35, 1.35]) {
    for (const z of [-0.91, 0.91]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.24, 32), rubber);
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(x, -0.46, z);
      car.add(wheel);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.255, 24), alloy);
      hub.rotation.x = Math.PI / 2;
      hub.position.set(x, -0.46, z * 1.015);
      car.add(hub);
      const center = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.27, 16), dark);
      center.rotation.x = Math.PI / 2;
      center.position.set(x, -0.46, z * 1.02);
      car.add(center);
    }
  }

  const frontLight = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.055, 1.12), glow);
  frontLight.position.set(2.1, -0.1, 0);
  car.add(frontLight);
  const rearLight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.045, 1.2), new THREE.MeshBasicMaterial({ color: 0xff3e27 }));
  rearLight.position.set(-2.1, -0.04, 0);
  car.add(rearLight);
  const splitter = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.06, 1.85), dark);
  splitter.position.set(2.13, -0.42, 0);
  car.add(splitter);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.07, 1.95), dark);
  wing.position.set(-2.03, 0.3, 0);
  car.add(wing);

  car.rotation.y = -0.28;
  car.scale.setScalar(host.clientWidth < 520 ? 0.82 : 1);
  const pointer = { down: false, x: 0, rotation: -0.28 };
  const onDown = (event) => { pointer.down = true; pointer.x = event.clientX; };
  const onMove = (event) => {
    if (!pointer.down) return;
    pointer.rotation += (event.clientX - pointer.x) * 0.009;
    pointer.x = event.clientX;
  };
  const onUp = () => { pointer.down = false; };
  renderer.domElement.addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);

  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    camera.aspect = width / height;
    camera.position.x = width < 520 ? 6.8 : 7.5;
    camera.position.z = width < 520 ? 10.5 : 9.5;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    car.scale.setScalar(width < 520 ? 0.76 : width < 850 ? 0.9 : 1);
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  const paintMaterial = paint;
  window.addEventListener("apex:paint", (event) => paintMaterial.color.set(event.detail));

  let frame = 0;
  let animationId = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const render = () => {
    animationId = requestAnimationFrame(render);
    if (!pointer.down && !reduced) pointer.rotation += 0.0018;
    car.rotation.y += (pointer.rotation - car.rotation.y) * 0.06;
    if (!reduced) car.position.y = Math.sin(frame * 0.012) * 0.035;
    frame += 1;
    renderer.render(scene, camera);
  };
  render();

  const visibility = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!animationId) render();
    } else {
      cancelAnimationFrame(animationId);
      animationId = 0;
    }
  }, { threshold: 0.05 });
  visibility.observe(host);

  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(animationId);
    observer.disconnect();
    visibility.disconnect();
    renderer.dispose();
  }, { once: true });
}

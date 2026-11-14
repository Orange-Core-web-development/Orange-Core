import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MODEL_URL="https://files.innerscene.com/library/generic-mid-engine-supercar-73f252c5/b41b620d8a8890b1b70a/generic-mid-engine-supercar.glb";

export function mountVehicleScene(host){
 const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x090a0b,13,34);
 const camera=new THREE.PerspectiveCamera(32,1,.1,100);camera.position.set(7.2,3,8.2);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:"high-performance"});
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;host.appendChild(renderer.domElement);
 scene.add(new THREE.HemisphereLight(0xdce9ff,0x21120d,2.2));
 const key=new THREE.DirectionalLight(0xffe3d2,4.2);key.position.set(4,8,5);scene.add(key);
 const rim=new THREE.PointLight(0xf05b2a,38,24);rim.position.set(-5,2,-4);scene.add(rim);
 const fill=new THREE.PointLight(0x8eb5d0,20,20);fill.position.set(3,1,7);scene.add(fill);
 const floor=new THREE.Mesh(new THREE.CircleGeometry(8,80),new THREE.MeshBasicMaterial({color:0x171310,transparent:true,opacity:.8}));floor.rotation.x=-Math.PI/2;floor.position.y=-.04;scene.add(floor);
 const grid=new THREE.GridHelper(24,48,0x44352d,0x292321);grid.position.y=-.035;grid.material.transparent=true;grid.material.opacity=.22;scene.add(grid);
 const pivot=new THREE.Group();scene.add(pivot);let paintTargets=[];
 const status=host.querySelector(".scene-loading");const loader=new GLTFLoader();
 loader.load(MODEL_URL,(gltf)=>{
  const model=gltf.scene;const bounds=new THREE.Box3().setFromObject(model);const size=bounds.getSize(new THREE.Vector3());const center=bounds.getCenter(new THREE.Vector3());model.position.sub(center);model.scale.setScalar(5.5/Math.max(size.x,size.y,size.z));
  model.traverse(node=>{if(!node.isMesh)return;node.castShadow=true;node.receiveShadow=true;const mats=Array.isArray(node.material)?node.material:[node.material];mats.forEach(mat=>{const label=(mat.name+" "+node.name).toLowerCase();if(mat.color&&/(body|paint|car.?paint|exterior|shell)/.test(label)){const clone=mat.clone();clone.color.set("#e85a2a");clone.metalness=Math.max(clone.metalness??0,.48);clone.roughness=Math.min(clone.roughness??.5,.3);if(Array.isArray(node.material))node.material=node.material.map(m=>m===mat?clone:m);else node.material=clone;paintTargets.push(clone);}});});
  pivot.add(model);if(!paintTargets.length){model.traverse(node=>{if(!node.isMesh)return;const mats=Array.isArray(node.material)?node.material:[node.material];mats.forEach(mat=>{if(mat.color&&mat.metalness!==undefined&&mat.roughness<.65){const clone=mat.clone();clone.color.lerp(new THREE.Color("#e85a2a"),.24);paintTargets.push(clone);if(Array.isArray(node.material))node.material=node.material.map(m=>m===mat?clone:m);else node.material=clone;}});});}
  const b=new THREE.Box3().setFromObject(pivot);const s=b.getSize(new THREE.Vector3());const d=Math.max(s.x,s.z)*1.65;camera.position.set(d*.9,Math.max(s.y*2.6,2.4),d*1.12);camera.lookAt(0,0,0);
  if(status)status.textContent="3D MODEL LOADED · DRAG TO ROTATE";
 },e=>{if(status&&e.total)status.textContent="LOADING 3D MODEL · "+Math.round(e.loaded/e.total*100)+"%";},()=>{if(status)status.innerHTML='3D MODEL UNAVAILABLE · <a href="'+MODEL_URL+'" target="_blank" rel="noreferrer">OPEN SOURCE MODEL</a>';});
 const pointer={down:false,x:0,rotation:-.28};renderer.domElement.addEventListener("pointerdown",e=>{pointer.down=true;pointer.x=e.clientX;renderer.domElement.setPointerCapture?.(e.pointerId);});
 renderer.domElement.addEventListener("pointermove",e=>{if(!pointer.down)return;pointer.rotation+=(e.clientX-pointer.x)*.009;pointer.x=e.clientX;});
 const release=()=>pointer.down=false;renderer.domElement.addEventListener("pointerup",release);renderer.domElement.addEventListener("pointercancel",release);
 const resize=()=>{const w=Math.max(host.clientWidth,1),h=Math.max(host.clientHeight,1);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);};const observer=new ResizeObserver(resize);observer.observe(host);resize();
 const paint=e=>paintTargets.forEach(m=>m.color.set(e.detail));window.addEventListener("apex:paint",paint);
 let raf=0,frame=0;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
 const visibility=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!raf)animate();else if(!entry.isIntersecting){cancelAnimationFrame(raf);raf=0;}},{threshold:.02});
 function animate(){raf=requestAnimationFrame(animate);if(!pointer.down&&!reduced)pointer.rotation+=.0015;pivot.rotation.y+=(pointer.rotation-pivot.rotation.y)*.055;if(!reduced)pivot.position.y=Math.sin(frame*.012)*.025;frame++;renderer.render(scene,camera);}
 visibility.observe(host);window.addEventListener("pagehide",()=>{cancelAnimationFrame(raf);observer.disconnect();visibility.disconnect();window.removeEventListener("apex:paint",paint);renderer.dispose();},{once:true});
}

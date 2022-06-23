import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer();
controls = new OrbitControls(camera, renderer.domElement);
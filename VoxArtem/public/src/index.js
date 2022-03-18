var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth -17, window.innerHeight );
document.body.appendChild( renderer.domElement );

const color = new THREE.Color("rgb(0, 255, 0)");

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: color} );
var cube = new THREE.Mesh( boxGeometry, boxMaterial );

const lineMaterial = new THREE.LineBasicMaterial( {
	color: color,
} );

const points = [];
points.push( new THREE.Vector3( -3, -2, 0 ));
points.push( new THREE.Vector3( 3, -2, 0 ));

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add( line );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth -17, window.innerHeight );

}
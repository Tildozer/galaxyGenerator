import * as THREE from "three";

export const generateGalaxy = (count, size) => {
  /**
   * Geometry
   */
  const galaxyGeometry = new THREE.BufferGeometry();

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // fill three at a time to reduce amount of times we loop.
    positions[i3] = (Math.random() - 0.5) * 3;
    positions[i3 + 1] = (Math.random() - 0.5) * 3;
    positions[i3 + 2] = (Math.random() - 0.5) * 3;
  }
  galaxyGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  /**
   * Material
   */
  const material = new THREE.PointsMaterial({
    size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,

  })

  /**
   * Points
   */
  const points = new THREE.Points(galaxyGeometry, material);

  return points
};

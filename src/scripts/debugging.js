import * as dat from "lil-gui";

export const makeGUI = (parameters, callbacks) => {
  const gui = new dat.GUI();
  gui
    .add(parameters, "count")
    .min(100)
    .max(800000)
    .step(100)
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "radius")
    .min(3)
    .max(25)
    .step(0.01)
    .name("Galaxy size")
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "size")
    .min(0)
    .max(0.03)
    .step(0.001)
    .name("Star size")
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "branches")
    .min(2)
    .max(20)
    .step(1)
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "spin")
    .min(-5)
    .max(5)
    .step(0.001)
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "randomness")
    .min(0)
    .max(5)
    .step(0.001)
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .add(parameters, "randomnessPower")
    .min(1)
    .max(10)
    .step(0.001)
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .addColor(parameters, "insideColor")
    .onFinishChange(callbacks.generateGalaxy);
  gui
    .addColor(parameters, "outsideColor")
    .onFinishChange(callbacks.generateGalaxy);
};

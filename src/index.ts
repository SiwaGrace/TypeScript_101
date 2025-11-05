// **********************
// ----------------------
// Enums & Type Narrowing
// ----------------------
// **********************

// ***** Traffic Light Simulator *****//
// Change colors every few seconds using an enum.
enum TrafficColors {
  Wait = "yellow",
  Stop = "red",
  Go = "green",
}

const trafficLightTimer = [
  { color: TrafficColors.Wait, delay: 2000 },
  { color: TrafficColors.Stop, delay: 3000 },
  { color: TrafficColors.Go, delay: 4000 },
];

function trafficLight() {
  let currentColor = TrafficColors.Wait;
  let totalTime = 0;

  trafficLightTimer.forEach((light) => {
    setTimeout(() => {
      if (currentColor === TrafficColors.Wait) {
        console.log(`You have to wait, it's the ${light.color} light.`);
        currentColor = TrafficColors.Stop;
      } else if (currentColor === TrafficColors.Stop) {
        console.log(`You need to stop, it's the ${light.color} light.`);
        currentColor = TrafficColors.Go;
      } else if (currentColor === TrafficColors.Go) {
        console.log(`You can go now, it's the ${light.color} light.`);
        currentColor = TrafficColors.Wait;
      }
    }, totalTime);

    totalTime += light.delay;
  });
}

trafficLight();

//***** Task Priority Manager *****//
// Assign and filter tasks by enum priorities (Low, Medium, High).

//***** User Role Access System *****//
// Use enums for roles (Admin, Editor, Viewer) and log permissions
// there is a problem with the remote

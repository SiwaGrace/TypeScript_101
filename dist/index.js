"use strict";
// **********************
// ----------------------
// Enums & Type Narrowing
// ----------------------
// **********************
Object.defineProperty(exports, "__esModule", { value: true });
// ***** Traffic Light Simulator *****//
// Change colors every few seconds using an enum.
var TrafficColors;
(function (TrafficColors) {
    TrafficColors["Wait"] = "yellow";
    TrafficColors["Stop"] = "red";
    TrafficColors["Go"] = "green";
})(TrafficColors || (TrafficColors = {}));
const trafficLightTimer = [
    { color: TrafficColors.Wait, delay: 2000 },
    { color: TrafficColors.Stop, delay: 3000 },
    { color: TrafficColors.Go, delay: 4000 },
];
function trafficLight() {
    let initialVal = TrafficColors.Wait;
    let consVal;
    let totalTime = 0;
    trafficLightTimer.forEach((light) => {
        setTimeout(() => {
            if (initialVal === TrafficColors.Wait) {
                console.log(`You have to wait, it's the ${light.color} light.`);
                consVal = TrafficColors.Stop;
            }
            else if (initialVal === TrafficColors.Stop) {
                console.log(`You have to stop, it's the ${light.color} light.`);
                consVal = TrafficColors.Go;
            }
            else if (initialVal === TrafficColors.Go) {
                console.log(`You have to go, it's the ${light.color} light.`);
                consVal = TrafficColors.Wait;
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
//# sourceMappingURL=index.js.map
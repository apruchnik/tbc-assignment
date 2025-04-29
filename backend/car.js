/**
 * The CarSimulator class starts off the simulation with a base set of values,
 * then has the simulatorStep() method to do the math on each dt step of the simulator.
 * @author Ania Pruchnik
 */
class CarSimulator {
    constructor(wheelbase, v0, theta0) {
        this.wheelbase = wheelbase;
        this.x = 0;
        this.y = 0;
        this.v = 0;
        this.ax = 0;
        this.ay = 0;
        this.theta = theta0;
    }

    simulatorStep(a, wheel_angle, dt) { // Use discrete time step
        //Update v first to ensure acceleration change takes place
        this.v += a * dt; // v = v_0 + a(t)
        this.v = Math.round(this.v * 100) / 100 // round v to 2 decimal places

        //Break up v and a into x and y components for calculations
        let vx = this.v * Math.cos(this.theta);
        let vy = this.v * Math.sin(this.theta);
        this.ax = a * Math.cos(this.theta);
        this.ay = a * Math.sin(this.theta);

        this.x += (vx * dt) + (1 / 2) * this.ax * Math.pow(dt, 2); // x = x_0 + vx_0(t) + 1/2axt^2
        this.y += (vy * dt) + (1 / 2) * this.ay * Math.pow(dt, 2); // y = y_0 + vy_0(t) + 1/2axt^2

        let turnR = this.wheelbase / Math.tan(wheel_angle);
        // Calculating centripetal acceleration
        if (wheel_angle !== 0) {
            this.ay += Math.pow(this.v, 2) / turnR;
        } else {
            this.ay = 0;
        }
        // mod to ensure angle stays between 0 and 2pi
        this.theta = (this.theta + ((this.v / turnR) * dt) % (2 * Math.PI));
    }
}

export function car() {
    let simulator = new CarSimulator(4, 0, 0)
    let time = 0;
    let results = [];
    while (simulator.v < 10) { //time should be 25s
        simulator.simulatorStep(0.4, 0, 0.1);
        time = Math.round((time + 0.1) * 100) / 100;
        results.push({x: simulator.x, y: simulator.y, t: time, ax: simulator.ax, ay: simulator.ay});
        console.log("v: " + simulator.v);
    }
    console.log("Time: " + time + "s");
    while (time < 100) {
        simulator.simulatorStep(0, -0.04, 0.1); // 100m radius = 4 / tan(wheel_angle)
        time = Math.round((time + 0.1) * 100) / 100;
        results.push({x: simulator.x, y: simulator.y, t: time, ax: simulator.ax, ay: simulator.ay});
    }
    return results;
    // Testing purposes
    // console.log("\nFinal x: " + simulator.x);
    // console.log("Final y: " + simulator.y);
    // console.log("Final v: " + simulator.v);
    // console.log("Final theta: " + simulator.theta);
    // console.log("Final time: " + time + "s");
}


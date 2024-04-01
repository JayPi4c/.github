class Countdown {

    static MAX_VEHICLES = 800;
    constructor(targetDate) {
        this.targetDate = targetDate;

        this.interval = setInterval((this.countdown).bind(this), 1000);
        this.hidden = false;


        let timeAttr = this.getTimeAttributes();
        let upperText = `${timeAttr.days}d ${timeAttr.hours}h`;
        let lowerText = `${timeAttr.minutes}m ${timeAttr.seconds}s`;

        this.upperVehicles = this.getVehicles(upperText, 50);
        this.lowerVehicles = this.getVehicles(lowerText, 100);


    }


    updateVehicles(vehs, pts) {
        let i;
        for (i = 0; i < vehs.length; i++) {
            if (pts.length <= i) {
                break;
            }
            vehs[i].updateTarget(createVector(pts[i].x, pts[i].y));
            vehs[i].updateColor(255);
        }
        if (i < vehs.length) {
            for (i; i < vehs.length; i++) {
                // hide vehicle
                vehs[i].randomPosition();
                vehs[i].updateColor(color(0, 0));
            }
        }
    }



    update() {
        if (this.isDone())
            clearInterval(this.interval);
    }

    show() {
        if (this.isDone()) {
            if (!this.hidden)
                this.hide();
        } else {
            for (let v of this.upperVehicles) {
                if (v.hidden) {
                    continue;
                }
                v.arrive(v.target);
                v.update();
                v.show();
            }
            for (let v of this.lowerVehicles) {
                if (v.hidden) {
                    continue;
                }
                v.arrive(v.target);
                v.update();
                v.show();
            }
        }
    }

    hide() {
        console.log("hide");
        this.hidden = true;
    }




    getVehicles(text, yPos) {
        let points = this.getPoints(text, yPos);
        let vehicles = [];
        for (let point of points) {
            let vehicle = new Vehicle(point.x, point.y);
            vehicles.push(vehicle);
        }
        if (vehicles.length < Countdown.MAX_VEHICLES) {
            for (let i = vehicles.length; i < Countdown.MAX_VEHICLES; i++) {
                let vehicle = new Vehicle(random(width), random(height));
                vehicle.updateColor(0);
                vehicles.push(vehicle);
            }
        }
        return vehicles;
    }

    getPoints(text, yPos) {
        console.log(text);
        let bounds = font.textBounds(text, 0, yPos, fontSize);
        return font.textToPoints(
            text,
            (width - bounds.w) / 2,
            0.5 * fontSize + fontSize,
            fontSize,
            {
                sampleFactor: factor,
            }
        );
    }

    getTimeAttributes() {
        let result = {};
        let distance = this.getMillisLeft();
        result.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        result.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        result.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        result.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return result;
    }

    countdown() {
        let timeAttr = this.getTimeAttributes();
        let upperText = `${timeAttr.days}d ${timeAttr.hours}h`;
        let lowerText = `${timeAttr.minutes}m ${timeAttr.seconds}s`;
        this.updateVehicles(this.upperVehicles, this.getPoints(upperText, 50));
        this.updateVehicles(this.lowerVehicles, this.getPoints(lowerText, 100));
    }




    /**
     * 
     * @returns {boolean} True if the target date has already passed, false otherwise.
     */
    isDone() {
        let now = new Date();
        return now > this.targetDate;
    }

    /**
     * 
     * @returns {number} The number of milliseconds left until the target date.
     * If the target date has already passed, the return value will be negative.
     */
    getMillisLeft() {
        let now = new Date();
        return this.targetDate.getTime() - now.getTime();
    }

}
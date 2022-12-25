
class FreeCar{
    private _doors: number = 0;
    private _wheels: number = 0;

    public get Doors() {
        return this._doors;
    }
    public set Doors(doors: number) {
        this._doors = doors;
    }

    public get Wheels() {
        return this._wheels;
    }
    public set Wheels(wheels: number) {
        this._wheels = wheels;
    }

}

interface CarBuilder {
    reset(): void;
    addWheels(): void;
    addDoors(): void;
    build(): void;
}

class FreeCarBuilder implements CarBuilder {
    private car: FreeCar;

    constructor() {
        this.reset()
    }

    addDoors(): void {
        this.car.Doors = 1;
    }

    addWheels(): void {
        this.car.Wheels = 4;
    }

    reset(): void {
        this.car = new FreeCar();
    }

    build(): FreeCar {
        const result = this.car;
        this.reset();
        return result;
    }
}
/** ----------------------------------------------------------- */
class CarBuilderDirector {
    constructCarWithoutDoors(builder: CarBuilder) {
        builder.addWheels()
    }

    constructCarWithoutWheels(builder: CarBuilder) {
        builder.addDoors()
    }
}
/** ----------------------------------------------------------- */
const director = new CarBuilderDirector()
const freeCarBuilder = new FreeCarBuilder();
director.constructCarWithoutDoors(freeCarBuilder);
const carWithoutDoors = freeCarBuilder.build();

director.constructCarWithoutWheels(freeCarBuilder);
const carWithoutWheels = freeCarBuilder.build();

console.log(carWithoutDoors, carWithoutWheels);
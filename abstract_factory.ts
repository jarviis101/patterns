
interface Car {
    isWorked(): boolean;
}

class ExpensiveCar implements Car {
    isWorked(): boolean {
        return true;
    }
}

class FreeCar implements Car {
    isWorked(): boolean {
        return false;
    }
}

interface Boat {
    canTravel(): boolean;
}

class ExpensiveBoat implements Boat {
    canTravel(): boolean {
        return true;
    }
}

class FreeBoat implements Boat {
    canTravel(): boolean {
        return false;
    }
}

abstract class AbstractTransportFactory {
    abstract createCar(): Car;
    abstract createBoat(): Boat;
}

class ExpensiveTransportFactory extends AbstractTransportFactory {
    createBoat(): Boat {
        return new ExpensiveBoat();
    }

    createCar(): Car {
        return new ExpensiveCar();
    }
}

class FreeTransportFactory extends AbstractTransportFactory {
    createBoat(): Boat {
        return new FreeBoat();
    }

    createCar(): Car {
        return new FreeCar();
    }
}
/** ----------------------------------------------------------- */

function getTransportsByFactory(factory: AbstractTransportFactory) {
    const boat = factory.createBoat();
    const car = factory.createCar();

    return {boat, car};
}

const {boat, car} = getTransportsByFactory(new FreeTransportFactory());
console.log(boat.canTravel());
console.log(car.isWorked());
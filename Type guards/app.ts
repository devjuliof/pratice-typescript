class Car {
    drive() {
        console.log('driving...')
    }
}

class Truck {
    drive() {
        console.log('driving a truck...')
    }

    loadCargo() {
        console.log('loading cargo...')
    }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(v: Vehicle) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo();
    }
}

useVehicle(v2)
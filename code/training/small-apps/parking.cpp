#include <iostream>

using namespace std;

int main() {

    const char CAR = 'c';
    const char BUS = 'b';
    const char TRUCK = 't';

    double charge;

    double car_per_hour = 2;
    double bus_per_hour = 3;
    double truck_per_hour = 4;

    char type_vehicle;
    double hours;

    cout << "*** ESTACIONAMIENTO ***" << endl;

    cout << "Car: c" << endl;
    cout << "Bus: b" << endl;
    cout << "Truck: t" << endl;
    cout << "Ingrese el tipo de vehículo: ";
    cin >> type_vehicle;

    cout << "Ingrese las horas de estacionamiento: " << endl;
    cin >> hours;

    if (type_vehicle == 'c') {
        charge = car_per_hour * hours;
    } else if (type_vehicle == 'b') {
        charge = bus_per_hour * hours;
    } else if (type_vehicle == 't') {
        charge = truck_per_hour * hours;
    } else {
        cout << "El tipo de vehículo ingresado no es valido." << endl;
        return 0;
    }

    if (charge > 0) {
        cout << endl << "El cargo por estacionamiento es " <<
            charge << " soles." << endl;
    }

    return 0;
}


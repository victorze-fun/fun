#include <iostream>

using namespace std;

struct Point { int x; int y; };
enum class Quadrant { I, II, III, IV };

Quadrant get_quadrant(const Point &p) {
    if ((p.x > 0) && (p.y > 0)) {
        return Quadrant::I;
    } else if ((p.x < 0) && (p.y > 0)) {
        return Quadrant::II;
    } else if ((p.x < 0) && (p.y < 0)) {
        return Quadrant::III;
    } else {
        return Quadrant::IV;
    }
}

int main() {

    cout << endl << "*** DETERMINAR EL CUADRANTE DE UN PUNTO *** " << endl;
    Point p;
    cout << "Ingrese el valor de x: ";
    cin >> p.x;
    cout << "Ingrese el valor de y: ";
    cin >> p.y;

    switch (get_quadrant(p)) {
        case Quadrant::I:
            cout << "El punto se encuentra en el primer cuadrante." << endl;
            break;
        case Quadrant::II:
            cout << "El punto se encuentra en el segundo cuadrante." << endl;
            break;
        case Quadrant::III:
            cout << "El punto se encuentra en el tercer cuadrante." << endl;
            break;
        case Quadrant::IV:
            cout << "El punto se encuentra en el cuarto cuadrante." << endl;
            break;
    }

    return 0;
}

#include <iostream>

using namespace std;

int main() {
    double discount_rate1 = 0.03, discount_rate2 = 0.05, discount_rate3 = 0.10;
    double quantity;
    double unit_price;
    double total_price;
    double discount;

    cout << endl << "*** DESCUENTO POR CANTIDAD DE ARTÍCULOS COMPRADOS ***" << endl;

    cout << "Ingrese el precio unitario del producto: ";
    cin >> unit_price;

    cout << "Ingrese la cantidad de productos: ";
    cin >> quantity;

    if ((unit_price < 0) || (quantity < 0)) {
        cout << "Debe ingresar números positivos." << endl;
        return 0;
    }

    if (quantity <= 9) {
        discount = 0;
    } else if (quantity <= 49) {
        discount = unit_price * quantity * discount_rate1;
    } else if (quantity <= 99) {
        discount = unit_price * quantity * discount_rate2;
    } else if (quantity >= 100) {
        discount = unit_price * quantity * discount_rate3;
    }

    total_price = unit_price * quantity - discount;

    cout << "Importe: " << unit_price * quantity << endl;
    cout << "Descuento: " << discount << endl;
    cout << "Total a pagar: " << total_price << endl;
}

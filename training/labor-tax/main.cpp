#include <iostream>

using namespace std;

int main() {

    const double UIT = 4'200; // UIT para el año 2019
    double limit1 = UIT*5, limit2 = UIT*20, limit3 = UIT*35, limit4 = UIT*45;
    double rate1 = 0.08, rate2 = 0.14, rate3 = 0.17, rate4 = 0.20, rate5 = 0.30;
    double tax;

    cout << "*** Impuesto al trabajo - Perú *** " << endl;

    double gross_annual_income;
    cout << "Remuneración anual en soles: ";
    cin >> gross_annual_income;
    if (gross_annual_income < 0) {
        cout << "Debe ingresar un monto positivo." << endl;
        return 0;
    }

    double net_income = gross_annual_income - UIT*7;
    if (net_income < 0) {
        cout << "No se encuentra afecto al impuesto a la renta." << endl;
        net_income = 0;
        tax = 0;
    }

    bool bracket1 = (net_income <= limit1) && (net_income > 0);
    bool bracket2 = (net_income > limit1) && (net_income <= limit2);
    bool bracket3 = (net_income > limit2) && (net_income <= limit3);
    bool bracket4 = (net_income > limit3) && (net_income <= limit4);
    bool bracket5 = (net_income > limit4);

    if (bracket1) {
        tax = net_income * rate1;
    } else if (bracket2) {
        tax = limit1 * rate1 + (net_income - limit1) * rate2;
    } else if (bracket3) {
        tax = limit1 * rate1 + (limit2 - limit1) * rate2 +
            (net_income - limit2) * rate3;
    } else if (bracket4) {
        tax = limit1 * rate1 + (limit2 - limit1) * rate2 +
            (limit3 - limit2) * rate3 + (net_income - limit3) * rate4;
    } else if (bracket5) {
        tax = limit1 * rate1 + (limit2 - limit1) * rate2 +
            (limit3 - limit2) * rate3 + (limit4 - limit3) * rate4 +
            (net_income - limit4) * rate5;
    }

    cout << "Ingreso neto: " << net_income << endl;
    cout << "Impuesto adeudato: " << tax << endl;
    return 0;
}


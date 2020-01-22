#include <iostream>

using namespace std;

int main() {

    cout << "Tipo 1     " << "Tipo 2     " << "Tipo 3     " << "Tipo 4     " << endl;
    cout << "*          " << "*****      " << "*****      " << "    *      " << endl;
    cout << "**         " << "****       " << " ****      " << "   **      " << endl;
    cout << "***        " << "***        " << "  ***      " << "  ***      " << endl;
    cout << "****       " << "**         " << "   **      " << " ****      " << endl;
    cout << "*****      " << "*          " << "    *      " << "*****      " << endl;

    int type;
    int size;

    cout << "Elija un tipo de patrón (1 a 4): ";
    cin >> type;

    cout << "Elija el tamaño del patrón (1 a 9): ";
    cin >> size;

    int count = 0;
    char symbol;
    cout << endl;

    while (count < size) {
        if (type == 1) {
            symbol = '*';
            for (int i = 0; i < size; i++) {
                if (i == count + 1) symbol = ' ';
                cout << symbol;
            }
        } else if (type == 2) {
            symbol = '*';
            for (int i = 0; i < size; i++) {
                if (i == size - count) symbol = ' ';
                cout << symbol;
            }
        } else if (type == 3) {
            symbol = ' ';
            for (int i = 0; i < size; i++) {
                if (i == count) symbol = '*';
                cout << symbol;
            }
        } else if (type == 4) {
            symbol = ' ';
            for (int i = 0; i < size; i++) {
                if (i == size - count - 1) symbol = '*';
                cout << symbol;
            }
        }

        count ++;
        cout << endl;
    }
}


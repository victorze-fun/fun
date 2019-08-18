#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>

void draw_board();
bool three_online();
bool occupied_box(const char *board, int position);
bool invalid_position(int position);
int get_int();

int main() {
    char board[] = {'1', '2', '3', '4', '5', '6', '7', '8', '9'};
    char symbol = 'X';
    int position;
    int turn = 0;

    printf("\n\n*** Tic Tac Toe ***\n\n");
    draw_board(board);

    while (true) {
        symbol = (turn % 2 == 0)? 'X' : 'O';

        printf("Turno de %c: ", symbol);
        position = get_position();
        printf("\n");

        if (invalid_position(position)) continue;
        if (occupied_box(board, position)) continue;

        turn++;
        board[position-1] = symbol;
        draw_board(board);

        if (three_online(&board)) {
            printf("\n%c ¡Ganador!\n", symbol);
            return 0;
        }
    }

    printf("La juego quedó en empate\n");
    return 0;
}

void draw_board(const char *board) {
    printf("\t| %c | %c | %c |\n", board[0], board[1], board[2]);
    printf("\t+---+---+---+\n");
    printf("\t| %c | %c | %c |\n", board[3], board[4], board[5]);
    printf("\t+---+---+---+\n");
    printf("\t| %c | %c | %c |\n", board[6], board[7], board[8]);
}

bool three_online(const char *board) {
    int lines[8][3] = {
        {0, 1, 2},
        {3, 4, 5},
        {6, 7, 8},
        {0, 3, 6},
        {1, 4, 7},
        {2, 5, 8},
        {0, 4, 8},
        {2, 4, 6},
    };

    for (int i = 0; i < 8; i++)
        if ((board[lines[i][0]] == board[lines[i][1]])
                && (board[lines[i][1]] == board[lines[i][2]]))
            return true;

    return false;
}

bool occupied_box(const char *board, int position) {
    if ((board[position-1] == 'X') || (board[position-1] == 'O')) {
        printf("La casilla se encuentra ocupada.\n");
        printf("Ingrese una posición válida.\n");
        return true;
    }
    return false;
}

bool invalid_position(int position) {
    if ((position < 1) || (position > 9)) {
        printf("Fuera de rango.\n");
        printf("Ingrese una posición entre 1 y 9.\n");
        return true;
    }
    return false;
}

int get_position() {
    int input;
    char ch;

    while (scanf("%d", &input) != 1) {
        while ((ch = getchar()) != '\n')
            putchar(ch);
        printf(" no es un número.\n");
        printf("Ingrese un número entre 1 y 9: ");
    }
    return input;
}

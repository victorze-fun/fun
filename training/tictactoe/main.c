#include <stdio.h>
#include <stdbool.h>
#include "game.h"

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


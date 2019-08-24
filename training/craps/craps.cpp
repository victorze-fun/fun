#include <iostream>
#include <random>

#include "craps.h"

using namespace std;

namespace craps {

int dice_random() {
    std::random_device rd;
    std::mt19937 eng(rd());
    std::uniform_int_distribution<> distr(1, 6);

    return distr(eng);
}

int dice_roll() {
    int sum_dice = dice_random() + dice_random();
    cout << "El jugador tiró: " << sum_dice << endl;
    return sum_dice;
}

void Game::start() {
    State game_state;
    int point;
    int sum_dice = dice_roll();

    switch (sum_dice) {
        case SEVEN:
        case ELEVEN:
            game_state = State::WIN;
            break;
        case TWO:
        case THREE:
        case TWELVE:
            game_state = State::LOSE;
        default:
            game_state = State::CONTINUE;
            point = sum_dice;
            cout << "El punto es " << point << endl;
    }

    while (game_state == State::CONTINUE) {
        sum_dice = dice_roll();

        if (sum_dice == SEVEN) {
            game_state = State::LOSE;
        } else if (sum_dice == point) {
            game_state = State:: WIN;
        }
    }

    if (game_state == State::WIN) {
        cout << "El jugador ganó" << endl;
    } else {
        cout << "El jugador perdió" << endl;
    }

}

}


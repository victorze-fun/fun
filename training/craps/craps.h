#pragma once

namespace craps {

class Game {

private:
    enum class State { WIN, LOSE, CONTINUE };

    static const int SEVEN = 7;
    static const int ELEVEN = 11;
    static const int TWO = 2;
    static const int THREE = 3;
    static const int TWELVE = 12;

public:
    static void start();
};

}


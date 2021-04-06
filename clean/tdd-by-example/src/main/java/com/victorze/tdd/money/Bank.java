package com.victorze.tdd.money;

import java.util.HashMap;
import java.util.Map;

public class Bank {

    private Map<Pair, Integer> rates = new HashMap<>();

    Money reduce(Expression source, String to) {
        return source.reduce(this, to);
    }

    int rate(String from, String to) {
        if (from.equals(to)) {
            return 1;
        }
        return rates.get(new Pair(from, to));
    }

    void addRate(String from, String to, int rate) {
        rates.put(new Pair(from, to), Integer.valueOf(rate));
    }

    public int name(String str) {
        return 3;
    }

}

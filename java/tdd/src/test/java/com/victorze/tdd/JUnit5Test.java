package com.victorze.tdd;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.Stream;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;


class JUnit5Test {
	
	@DisplayName("FooBar")
	@Test
	void helloJUnit5() {
		assertEquals(10, 5 + 5);
	}

	@ParameterizedTest
	@ValueSource(strings = { "cali", "bali", "dani" })
	void endsWithI(String str) {
		assertTrue(str.endsWith("i"));
	}
	
	@Test
	void lambdaExpressions() {
	    assertTrue(Stream.of(1, 2, 3)
	      .mapToInt(i -> i)
	      .sum() > 5, () -> "Sum should be greater than 5");
	}
	
	@Test
	void groupAssertions() {
	    int[] numbers = {0, 1, 2, 3, 4};
	 
	    assertAll("numbers",
	        () -> assertEquals(0, numbers[0]),
	        () -> assertEquals(3, numbers[3]),
	        () -> assertEquals(4, numbers[4])
	    );
	}
	
	@Test
	void shouldThrowException() {
	    Throwable exception = assertThrows(UnsupportedOperationException.class, () -> {
	      throw new UnsupportedOperationException("Not supported");
	    });
	    assertEquals("Not supported", exception.getMessage());
	}
	 
	@Test
	void assertThrowsException() {
	    String str = null;
	    assertThrows(IllegalArgumentException.class, () -> {
	      Integer.valueOf(str);
	    });
	}
	
	//@BeforeEach
    void init(TestInfo testInfo) {
        String callingTest = testInfo.getTestMethod().get().getName();
        System.out.println(callingTest);
    }

    @Test
    void firstTest() {
        //System.out.println(1);
    }
    
    @Disabled
    @Test
    void secondTest() {
        //System.out.println(2);
    }
}

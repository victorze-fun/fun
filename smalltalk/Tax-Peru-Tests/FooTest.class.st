"
A FooTest is a test class for testing the behavior of Foo
"
Class {
	#name : #FooTest,
	#superclass : #TestCase,
	#category : #'Tax-Peru-Tests'
}

{ #category : #test }
FooTest >> testBar [
	self assert: false
]

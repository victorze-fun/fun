"
Counter is a simple concrete class which supports incrementing and
decrementing a counter.

Its API is
- decrement, increment
- count

Its creation API is message withValue:
"
Class {
	#name : #Counter,
	#superclass : #Object,
	#instVars : [
		'count'
	],
	#category : #Fun
}

{ #category : #accessing }
Counter >> count [
	"return the current value of the value instance variable"
	^ count
]

{ #category : #accessing }
Counter >> count: aValue [
	count := aValue
]

{ #category : #operation }
Counter >> decrement [
	count := count - 1.
]

{ #category : #operation }
Counter >> increment [
	count := count + 1.
]

{ #category : #initialization }
Counter >> initialize [
	"set the initial value of the value to 0"
	count := 0
]

{ #category : #printing }
Counter >> printOn: aStream [
	super printOn: aStream.
	aStream
		nextPutAll: ' with value: ';
		nextPutAll: self count printString.
]

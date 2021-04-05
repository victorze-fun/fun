Class {
	#name : #BaselineOfFun,
	#superclass : #BaselineOf,
	#category : #BaselineOfFun
}

{ #category : #baselines }
BaselineOfFun >> baseline: spec [
	<baseline>
	spec
		for: #common
		do: [ 
			spec
				package: 'Fun'
		].

]

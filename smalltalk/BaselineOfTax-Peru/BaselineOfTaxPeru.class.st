Class {
	#name : #BaselineOfTaxPeru,
	#superclass : #BaselineOf,
	#category : #'BaselineOfTax-Peru'
}

{ #category : #baselines }
BaselineOfTaxPeru >> baseline: spec [
	<baseline>
	spec
		for: #common
		do: [ 
			spec
				package: 'Tax-Peru';
				package: 'Tax-Peru-Tests'; with: [ spec requires: #('Tax-Peru') ]
		].

]

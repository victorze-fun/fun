# Strategy

> El Patrón de estrategia define una familia de algoritmos, encapsula cada
uno y los hace intercambiables. La estrategia permite que el algoritmo
varíe independientemente de los clientes que lo usan.

> La única constante en el desarrollo de software es el **CAMBIO**.

Los patrones de diseño le brindan un vocabulario compartido con otros
desarrolladores. Una vez que tenga el vocabulario, puede comunicarse más
fácilmente con otros desarrolladores e inspirar a aquellos que no conocen los
patrones para comenzar a aprenderlos. También eleva su pensamiento sobre las
arquitecturas al permitirle pensar en el nivel de patrón, no en el nivel de
objeto esencial.

Conocer conceptos como la abstracción, la herencia y el polimorfismo no lo
convierten en un buen diseñador orientado a objetos. Un gurú del diseño
piensa en cómo crear diseños flexibles que se puedan mantener y que puedan
hacer frente al cambio.

## Principios de diseño

- Identifique los aspectos de su aplicación que varían y sepárelos de lo que
permanece igual.

  Tome las partes que varían y encapsúlelas, para que luego
pueda alterar o extender las partes que varían sin afectar las que no.

- Programa para una interfaz, no para una implementación.

  "Programar a una interfaz" realmente significa "Programar a un supertipo".

```java
// Programación para una implementación
Dog d = new Dog();
d.bark()

// Programación para una interfaz/supertipo
Animal animal = new Dog();
animal.makeSound();

// Aun mejor, asigne el objeto de implementación concreto en tiempo de ejecución
a = getAnimal();
a.makeSound();
```

- Favorecer la composición sobre la herencia.


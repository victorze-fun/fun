# Design Patterns

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

- Inversión de dependencia. Depende de abstracciones. No dependas de
clases concretas.

  Sugiere que nuestros componentes de alto nivel no deberían depender de nuestros
  componentes de bajo nivel; más bien, ambos deberían depender de abstracciones.

  Un componente de "alto nivel" es una clase con comportamiento definido en
  términos de otros componentes de "bajo nivel".

  Pautas:

  - Ninguna variable debe contener una referencia a una clase concreta.

  - Ninguna clase debe derivar de una clase concreta. Derivar de una abstracción,
  interface o clase abstracta.

  - Ningún método debe anular un método implementado de ninguna de sus clases base.

- Favorecer la composición sobre la herencia.

- Esfuércese por diseños debilmente acoplados entre objetos que interactúen.

  Los diseños poco acoplados nos permiten construir sistemas OO flexibles que
  pueden manejar el cambio porque minimizan la interdependencia entre los objetos.

- Open-Closed. Las clases deben estar abiertas para la extensión, pero
cerradas para la modificación.

## Patterns

### 1. Strategy

> El Patrón de estrategia define una familia de algoritmos, encapsula cada
uno y los hace intercambiables. La estrategia permite que el algoritmo
varíe independientemente de los clientes que lo usan.

### 2. Observer

> El patrón de observador define una dependencia de uno a muchos entre
objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes
son notificados y actualizados automáticamente.

### 3. Decorator

> El patrón Decorador asigna responsabilidades adicionales a un objeto de
forma dinámica. Los decoradores proporcionan una alternativa flexible a las
subclases para ampliar la funcionalidad.

### 4. Factory

> Factory Method define una interfaz (clase abstracta) para crear un objeto,
pero permite que las subclases decidan qué clase instanciar. Factory Method
permite que una clase difiera la creación de instancias en subclases.

> Abstract Factory proporciona una interfaz para crear familias de objetos
relacionados o dependientes sin especificar sus clases concretas.

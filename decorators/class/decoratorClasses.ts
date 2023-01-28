// Тип на основе миксина-конструктора
type constructorMixin = { new (...args: any[]): {} };

/*

  Фун. декоратор

  function <T extends constructorMixin> (target: T) {
    Реализация...
  }

*/

class Greater {
  constructor(public name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

// Создадим декоратор 'useSalutation' для приветствия
function useSalutation(salutation: string) {
  return function <T extends constructorMixin>(target: T) { // Декоратор
    // Повторно объявляем класс, который будем декорировать (декорируемый класс)
    // Также нужно помнить, что если мы хотим изменить [оригинальный класс/декорируемый класс/ target],
    // то всегда нужно возвращать измененный класс, как ниже:
    return class extends target {
      name!: string;
      // Добавляем ориг. классу свойство message
      private message = `Hello ${salutation + this.name}`;

      sayHello() {
        console.log(this.message);
      }
    }    
  }
}

@useSalutation('Mr.')
class DecorGreater {
  constructor(public name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

new Greater('John').sayHello();       // Hello John
new DecorGreater('Smith').sayHello(); // Hello Mr.Smith

/*
  Добавление декоратором новых методов к примеру sayGoodbye
  приведет к тому, что при вызове его на инстансе IDE будет
  утверждать, что существует только один метод, который был
  изначально в классе "sayHello", без метода "sayGoodbye".
  Но даже не смотря на такое поведение, sayGoodbye все равно
  будет работать.

  ...

  Сигнатура декоратора класса и метода будут отличатся.
  
  <T>(someParam: T) => T | void
  <TFunction extends Function>(target: TFunction) => TFunction | void

*/
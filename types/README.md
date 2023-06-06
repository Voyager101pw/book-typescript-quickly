# Создание собственных файлов определений типов



## Директивы с тройной косой чертой 
https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
Использование reference схож по смыслу с оператором import в модуле.

### [paths](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-)

```/// <reference path="path/to/some/file.d.ts" />```
Эта ссылка с тройной косой чертой предписывают компилятору включить дополнительный файл в процесс компиляции.
Ссылочный путь с тройной косой чертой разрешается относительно содержащего файла, если используется относительный путь.

### [types](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-)

Если файл определений типов для библиотеки, установленной с помощью npm, вы можете вместо path использовать types:

```/// <reference types="node" />```

Файл объявлений сообщает о том, что этот файл использует имена, объявленные в `@types/node/index.d.ts` и, таким образом, этот пакет необходимо включить в компиляцию вместе с файлом объявления.

### [libs](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-lib-)

```/// <reference lib="..." />```

Эта директива позволяет файлу явно включать существующий встроенный файл библиотеки .

На встроенные файлы lib ссылаются так же, как на lib параметр компилятора в tsconfig.json (например, использовать , lib="es2015" а не lib="lib.es2015.d.ts"и т. д.).
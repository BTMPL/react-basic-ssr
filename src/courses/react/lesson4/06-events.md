Dodawanie listenerów dla zdarzeń w React działa bardzo podobnie do tego, jak wykonywane jest to w czystym HTML, należy mieć na uwadze jedynie:

*   nazwy listenerów używają notacji camelCase
*   do listenera musimy przekazać wskazanie na funkcję, a nie nową funkcję lub wywołanie funkcji

Ostatni warunek jest częstym powodem błędów wśród początkujących developerów - nasz kod powinien przekazywać wskazanie na funkcję - np. `onClick={this.handleClick}` a nie jej wywołanie - `onClick={this.handleClick()}`

### Przekazywanie danych do handlerów

Każdy z handlerów wywoływany jest z odpowiednią wartością - dla handlerów dodanych do elementów HTML będzie to zwyczajowo obiekt reprezentujący dany typ zdarzenia (nie jest to do końca prawda, o czym dowiesz się w dalszej części tej sekcji). Dla komponentów będzie to wartość, którą zadeklarowali twórcy danego komponentu.

Jeżeli chcemy przekazać do wywołania zdarzenia własne parametry, możemy utworzyć i przekazać anonimową funkcję, lub użyć bind:

```
1
2

```

### this

Musimy pamiętać, że JS jako język późnego wiązania (ang. late-bound langage) może zmienić wartość `this` w wywołanej funkcji, jeżeli nie jest ona wywoływana np. jako callback lub po określonym czasie (`setTimeout`, `setInterval`). Aby zapobiec temu "problemowi" możemy wykorzystać jedno z 3 rozwiązań:

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25

```

### SyntheticEvent

W celu ujednolicenia API zdarzeń pomiędzy różnymi przeglądarkami, React zmienia typ zdarzeń, które przekazywane są w odpowiedzi na interakcję z DOM na swój natywny typ - `SyntheticEvent`. Wszystkie takie zdarzenia mają dokładnie to sami API, co zdarzenia DOM wg. WHATWG.

Jedną różnicą, wartą uwagi jest handler `onChange` który dla pól tekstowych formularza wywoływany jest za każdym razem, kiedy wartość pola ulegnie zmianie, podczas gdy w zwykłym HTML+JS wywołany on będzie w momencie, w którym użytkownik opuści modyfikowane pole.

W danym momencie istnieje tylko jedna instancja zdarzenia i jest ona przekazywana do kolejnych elementów. Za każdym razem gdy wywołany zostanie handler jakiegoś zdarzenia, obiekt SyntheticEvent jest zerowany i jego wartości zapełniane są wartościami natywnego zdarzenia. Oznacza to, że jeżeli zamierzamy pracować ze zdarzeniem w trybie asynchronicznym przekonamy się, że wartości zostały usunięte lub uległy zmianie.

W większości wypadków wystarczy skopiować interesujące nas wartości zdarzenia do zmiennych lokalnych, np. `const value = event.target.value` lub jeżeli potrzebujemy wykorzystać więcej wartości i kopiowanie ich nie jest nam na rękę, możemy wywołać `event.persist()` co wyłączy daną instancję SyntheticEvent "z obiegu" i utworzy nową na potrzeby kolejnych zdarzeń.
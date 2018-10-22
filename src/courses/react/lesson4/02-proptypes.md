#### propTypes

React pozwala na określanie tego jakie poperty jest w stanie obsłużyć nasz komponent - możemy określić zarówno ich nazwy jak i typy. Wyczerpujące informacje na temat wszystkich możliwych wspieranych typów znajdziesz na stronie projektu [prop-types](https://github.com/facebook/prop-types).

Zdefiniujmy domyślne props dla naszych komponentów.

Nasz komponent `TweetTime` będzie od teraz wymagał przekazania instancji `Date`, `TweetUser` będzie oczekiwał przekazania nicku (handle), ale imię (name) jest już opcjonalne, zaś `Tweet` będzie oczekiwał obiektu o określonej strukturze.

Warto mieć na uwadze, że mechanizm PropTypes jest tylko sugestią - jest on jedynie używany jeżeli aplikacja działa w trybie developerskim, a nawet jeżeli przekażemy złe wartości nie spowoduje to zatrzymania aplikacji a jedynie komunikat w konsoli. PropTypes powinny być używane jako rodzaj dokumentacji komponentu, ale są także używane przez auto-podpowiadanie składni w wielu popularnych edytorach kodu.

#### defaultProps

Dodatkowo, dla komponentu `TweetUser` zdefiniowaliśmy wartość domyślną propsu `name` na "Anonim". Jeżeli nie przekażemy żadnej wartości (lub przekażemy jawnie `undefined`) zostanie użyta właśnie wartość domyślna.

Definiowanie wartości domyślnych ma sens głównie dla propsów, których nie oznaczyliśmy jako `isRequired`, ale warto zdefiniować je też dla pozostałych, ponieważ mimo iż developer upewnił się, że dane te są przekazywane, czasem może ich po prostu brakować z powodu błędu w API etc.

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
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45

```


### Alternatywna notacja

Jeżeli używasz CRA lub dodałeś do projektu preset[babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) możesz używać alternatywnego, krótszego zapisu PropTypes dla komponentów stanowych.

Opiera on się o nowy typ pola danych - `static` ale w praktyce wciąż transpilowany jest na poprzednią notację.

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
26

```
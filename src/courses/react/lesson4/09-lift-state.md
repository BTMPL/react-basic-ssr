Wiemy już jak przekazywać dane od rodzica do dziecka - używamy w tym celu props. Mechanizm ten przyda nam się także do przekazywania danych w drugą stronę - od dziecka do rodzica. Zanim poznamy sposób, spójrzmy na problem, jaki pozwoli nam to rozwiązać w naszej aplikacji.

Aktualnie aplikacja składa się z 2 głównych komponentów - `TweetForm` oraz `TweetList`. Komponenty te nie są ze sobą w relacji rodzic-dziecko, więc w jaki sposób mogą się ze sobą komunikować? Standardowym sposobem jest **podniesienie stanu wyżej (ang. lift the state up).**

Naszym rozwiązaniem jest stworzenie jednego wspólnego rodzica, który przetrzymywał będzie stan dla swoich dzieci oraz pomagał im w komunikacji.

Utwórzmy komponent `TweetApp`, który stanowił będzie trzon naszej aplikacji - będzie on przetrzymywał informację o Tweetach oraz renderował wszystkie podległe elementy.

Komponent ten otrzyma jako props listę utworzonych na sztywno Tweetów i w konstruktorze przepisze ją sobie do swojego wewnętrznego stanu. Rozwiązanie takie pozwoli nam w kolejnym kroku zmodyfikować stan (np. dodając nowy tweet) i odświeżyć listę.

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

```

Kolejnym krokiem jest przekazanie danych w drugą stronę - z formularza `TweetForm` do rodzica - `TweetApp`. W tym celu rodzic musi przekazać do swojego dziecka wywołanie zwrotne (ang. callback) jako props, zaś dziecko powinno wywołać ów callback przekazując do niego dane.

Nasz komponent `TweetForm` posiada guzik, który oznacza, że zakończyliśmy tworzenie wiadomości, więc dodajmy do niego obsługę zdarzenia `onClick`, które pośrednio wywoła przekazany handler `this.props.onSubmit`.

Po wpisaniu treści i przyciśnięciu klawisza dane z komponentu zostaną przekazane w górę - do rodzica - a następnie wyświetlone w oknie alertu.

Dodatkowo, ponieważ używamy kontrolowanego formularza zmieniając `this.state.text` na pusty string po przesłaniu danych usuwamy tekst wpisany w pole.

#### Częste błędy

Programiści, który dużo pracowali z HTML i JS mogą z rozpędu użyć zapisu:

```
1

```

jednak przekonają się, że kod ten wywołany jest od razu, a co gorsze, wywoływany jest za każdym razem, kiedy komponent ponownie się wyrenderuje. Do handlerów zdarzeń powinniśmy przekazywać zawsze wskaźnik na funkcję (lub samo wyrażenie funkcji), powyższy przykład wpierw wywoła funkcję `this.handleSubmit` a wartość, którą zwróci przekaże do handlera `onClick`.

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
46
47
48
49
50
51
52
53
54
55
56

```

Ostatnie, co musimy zrobić to zaktualizować stan rodzica, dodając do niego nowy tweet. W tym celu używamy oczywiście metody`this.setState`. Upewnijmy się od razu, że dodawany przez nas Tweet ma odpowiednie - unikalne - `id` oraz, że umieszczony został na początku listy Tweetów.

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

```
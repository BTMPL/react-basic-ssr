## Podstawowe pojęcia <a name="section-1"></a>

Przed rozpoczęciem pracy omówmy kilka podstawowych pojęć, którymi będziemy posługiwać się w kursie lub z którymi zetkniesz się pracując z React.

**SPA, single page application** - aplikacje zbudowane z dużym naciskiem na frontend, w którym całość lub większość interakcji odbywa się tylko i wyłącznie po stronie klienta, a dane wymieniane są z serwerem poprzez komunikację API. Strony tego typu nie korzystają ze standardowego modelu zapytanie-odpowiedź w celu pobierania interfejsu użytkownika.

**ECMAScript, ES** - specyfikacja języka skryptowego, którego jedną z implementacji jest JavaScript. Obecnie używa się określeń typu **ES6** lub **ES2015** w celu określeni wersji ECMAScript, której używamy w tworzonym kodzie JavaScript.

**node, nodejs** - środowisko, w którym możliwe jest wykonywanie aplikacji napisanych w języku JavaScript. Pozwala na uruchamianie aplikacji w odseparowaniu od systemu operacyjnego dzięki czemu aplikacje stworzone dla systemów Unixowych działają bez problemu lub z drobnymi modyfikacjami np. na platformie Windows.

**npm, yarn** - ang. *node package manager* menadżery pakietów instalowany wraz z Node. yarn sanowi alternatywę stworzoną przez Facebook. Oba projekty korzystają ze wspólnego repozytorium więc można je stosować naprzemiennie.

**moduł** - aplikacja udostępniona poprzez platformę npm, którą możemy dodać do naszego programu w celu zapewnienia składowej funkcjonalności; jako moduły npm dystrybuowane są także całe niezależne aplikacje, uruchamiane z linii poleceń.

**biblioteka** - kod rozszerzający aplikacje o dodatkową funkcjonalność, nie stanowiący oddzielnej aplikacji i zwykle nie wystarczający do zaspokojenia skomplikowanych założeń biznesowych.

**framework** - samowystarczalny i kompletny zestaw bibliotek, narzędzi i standardów pozwalający na tworzenie aplikacji.

### Pojęcia związane z React

**VDOM** - "wirtualna" reprezentacja DOM, czyli modelu obiektowego strony. W celu optymalizacji ilości operacji zmiany HTML React przeprowadza wszystkie operacja na wirtualnym modelu - aktualizuje go w oparciu o przetworzone dane i porównuje z poprzednią wersją, po czym oblicza jakie elementy HTML należy dodać, usunąć lub zmienić.

**JSX** - język znaczników, który pozwala na opisanie wyglądu i funkcjonalności elementów za pomocą składni przypominającej HTML

**boilerplate** - zaopiniowany zestaw bibliotek, skryptów konfiguracyjnych i wytycznych co do standardów pozwalający na szybkie przystąpienie do realizowania funkcji biznesowych.

## Środowisko NodeJS <a name="section-2"></a>

Kurs przygotowany jest z myślą o użytkownikach systemów Unixowych oraz Windows. Większość poleceń wykonywanych będzie w powłoce, dlatego zaleca się, by czytelnik znał podstawy obsługi odpowiedniej powłoki, zaś użytkownicy Windows używali powłoki bash (np. git-bash.exe)

Pierwszym krokiem powinno być upewnieni się, że w naszym systemie znajduje się środowisko NodeJS. Jeżeli nie, odpowiednie paczki można [pobrać ze strony nodejs.org](https://nodejs.org/en/) lub zainstalować za pomocą managera odpowiedniego dla naszegosystemu.


W następnej kolejności, upewnijmy się, że dysponujemy odpowiednimi wersjami node oraz npm. Najnowsze wersje nie są wymagane, ale na pewno pomagają.

Upewnijmy się więc, że node posiadamy w wersji minimum 7.x, a npm 5.x. Aby uaktualnić npm wystarczy najczęściej wydać 
polecenie `npm install -g npm`

```bash
λ node --version
v7.10.0

λ npm --version
5.4.1
```

## Edytor kodu

React nie posiada dedykowanego środowiska IDE (istnieje co prawda projekt [Nuclide](https://nuclide.io/) dedykowany dla React Native) więc wybór edytora pozostaje preferencją developera. Ze swojej strony polecam świetny i darmowy
edytor [Visual Studio Code](https://code.visualstudio.com/) lub [Atom](https://atom.io/) - 
głównie ze względu na bogate środowisko dodatków i rozszerzeń. Warto upewnić się, że wybrany przez nas edytor posiada wsparcie dla podświetlania nowej składni ES6 oraz JSX.

## Folder projektu

Może wydawać się to oczywiste, jednak wybierając lokację naszego projektu powinniśmy pamiętać o kilku rzeczach, które pozwolą nam uniknąć problemów:

*   nazwa folderu nie powinna zawierać spacji ani znaków specjalnych
*   nazwa folderu nie powinna pokrywać się z nazwami modułów, które będziemy dodawać do projektu
*   na systemach Windows, pamiętaj, by ścieżka folderu nie była zbyt długa - npm potrafi generować głęboką strukturę, a starsze wersje Windowsa posiadają ograniczenie co do długości ścieżki

## Narzędzia wspomagające <a name="section-3"></a>

W ostatnich latach JavaScript rozwija się bardzo dynamicznie - pojawia się wiele rozwiązań, które stopniowo wdrażane są przez producentów przeglądarek. 
Niestety, tworząc aplikacje webowe musimy liczyć się z tym, że nasi użytkownicy nie zawsze będą posiadali najnowsze wersje przeglądarek, wspierające wszelkie rozwiązania, które chcemy zastosować. Może okazać się też, że chcemy skorzystać z dobrodziejstwa ECMAScript, które nie są jeszcze obsługiwane przez żadną z dostępnych przeglądarek. W tym celu korzystać będziemy z 2 popularnych narzędzi. Nie musisz być biegły w ich konfiguracji, ale chciałbym byś wiedział do czego służą oraz znał ich ograniczenia.

### babel

[Babel](http://babeljs.io/) to tak zwany transpilator (lub kompilator), czyli narzędzie pozwalające na przekształcanie 
kodu źródłowego napisanego w jednym języku na inny. Dzięki odpowiednim "presetom" oraz "pluginom" możemy już dziś pisać aplikacje wykorzystując standard ECMAScript 2017 i transpilować go do wersji ECMAScript 5, którą obsługuje nawet Internet Explorer 8. To również dzięki Babel jesteśmy w stanie używać składni JSX.

Należy pamiętać, iż o ile babel pozwala nam na dodanie funkcjonalności, która nie jest jeszcze oficjalnym standardem ECMAScript, o tyle musimy liczyć się z tym, że używana w tym wypadku przez nas funkcjonalność (lub jej składnia) może ulec zmianie lub zostać ostatecznie odrzucona.

```html
// .babelrc
{
  presets: ["env", "react"],
  plugins: ["babel-plugin-transform-class-properties"]
}
```

<small>Przykładowy plik konfiguracyjny Babel dodający wsparcie dla starszych przeglądarek, składni JSX oraz wsparcie dla class fields.</small>

### webpack

[Webpack](https://webpack.js.org/) pełni wiele funkcji, ale jego podstawową jest przetwarzanie wszelkich zasobów naszej aplikacji, takich jak plik JS, grafiki, arkusze CSS w celu przygotowania tzw. "bundli" czyli pakietów, które mogą odczytywać przeglądarki. Moduły npm w dużej większości składają się z dziesiątek plików, setek zależności, różnych wersji etc. - przeglądarki nie są jeszcze gotowe na obsłużenie tak dostarczanych aplikacji. Dzięki odpowiedniej konfiguracji Webpack jest w stanie zebrać cały kod naszej aplikacji i zapisać go do jednego (lub więcej) plików wynikowych, dzięki czemu możemy bez problemu dostarczyć go przeglądarce (a przy okazji, używając Babel zmienić na kod, który będzie ona w stanie rozpoznać).

Zastępuje on rozwiązania takie jak gulp, grunt czy browserify - jest w stanie przetworzyć na bieżąco nasz kod LESS/SASS do CSS, skompresować pliki graficzne i skopiować je do odpowiedniego katalogu tak, by były dostępne dla aplikacji niezależnie od tego gdzie ją uruchamiamy. Webpack monitoruje nasze zmiany w czasie rzeczywistym dzięki czemu po zapisaniu kodu nasza strona natychmiast aktualizuje się bez konieczności odświeżania przeglądarki.

Webpack uruchamiany jest w środowisku developerskim, lub w celu stworzenia produkcyjnej wersji aplikacji, dlatego też musi on mieć dostęp do wszystkich materiałów, które chcemy na stałe zapisać w publicznych plikach aplikacji. Tak wygenerowane pliki następnie umieszczamy na dowolnym serwerze HTTP w celu udostępnienia w Internecie.

```html
// webpack.config.js
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: ["babel-loader"]
      },
      {
        test: /\.less/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"]
  }
}              
```

<small>Przykładowy plik konfiguracyjny Webpack, zapewniający transpilację kodu JS oraz LESS.</small>

### eslint

[ESLint](https://eslint.org/) pozwala na narzucenie standardów dotyczących tworzonego kodu a następnie skanowanie naszej aplikacji w celu wykrycia fragmentów nie spełniających tych założeń. Pozwala on zarówno na wychwycenie błędów (t.j. użycie nie zadeklarowanych zmiennych), dbanie o spójny kod (średniki lub ich brak, pojedyncze lub podwójne cudzysłowie ... spacje czy tabulatory?) ale także na wychwytywanie błędów w użytkowaniu konkretnych bibliotek (np. React!).

```bash
  /projects/react/src/index.js
  34:44  error  'match' is missing in props validation          react/prop-types
  34:50  error  'match.params' is missing in props validation   react/prop-types
  47:7   error  Do not use setState in componentDidUpdate       react/no-did-update-set-state
```

<small>Przykładowe podsumowanie znalezionych błędów</small>

### React Developer Tools

Oficjalny dodatek do narzędzi przeglądarki, wspomagający pracę z Reactem - podobnie jak domyślne narzędzia pozwalają na pracę z HTML, tak React Developer Tools pokazuje (i pozwala nam modyfikować) w przeglądarce strukturę aplikacji Reactowej.

* [Pobierz dla Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Pobierz dla Firefox](https://addons.mozilla.org/pl/firefox/addon/react-devtools/)
* [Pobierz wersję Standalone](https://www.npmjs.com/package/react-devtools) 

## create react app <a name="section-4"></a>

Jednym z najczęstszych zarzutów, z jakimi początkowo borykał się React była znacząca ilość pracy, jaką developerzy musieli poświęcić na przygotowanie środowiska pracy - dobór pakietów, konfiguracja babel, webpack etc. Odpowiedzią na to był wysyp nieoficjalnych boilerplate udostępnianych jako pakiety npm lub repozytoria git.

**create react app** to oficjalny boilerplate przygotowany przez zespół Facebook do tworzenia aplikacji React. Od typowych boilerplate odróżnia go:

* sposób instalacji - <acronym title="create-react-app">CRA</acronym> instaluje się globalnie w naszym systemie i pozwala na tworzenie nowych projektów za pomocą jednej komendy

* ukrycie konfiguracji - pliki konfiguracyjne przechowywane są w katalogu <acronym title="create-react-app">CRA</acronym>, nie katalogu aplikacji, przez co mamy pewność, że nie wprowadzimy w nich przypadkowych zmian i projekt stworzony u jednego developera zadziała bez problemów u innego developera

* mniej dependencji - w teorii nasz projekt potrzebuje tylko <acronym title="create-react-app">CRA</acronym> jako zależność, dzięki czemu aktualizując naszą globalną instalację <acronym title="create-react-app">CRA</acronym> możemy też zaktualizować nasz projekt

Ukrycie konfiguracji pozwala nam na zapobieganie przypadkowym zmianom w plikach konfiguracyjnych, ale jednocześnie uniemożliwia celowe zmiany. Jeżeli musimy dodać jakąś brakującą funkcjonalność - do dyspozycji pozostaję nam mechanizm ejectowania (**npm run eject**) który "wypakuje" nam wszystkie pliki do katalogu naszego projektu, jednak tracimy możliwość aktualizowania projektu wraz z <acronym title="create-react-app">CRA</acronym>.

### instalacja

Aby rozpocząć, zainstalujmy <acronym title="create-react-app">CRA</acronym> globalnie wywołując komendę:  

`npm install create-react-app --global`

Kiedy proces zakończy się, powinniśmy mieć możliwość uruchomienia nowej komendy - `create-react-app`. Jeżeli po wywołaniu w/w komendy otrzymasz komunikat informujący o braku programu, uruchom nowe okno powłoki.

Możemy teraz utworzyć nasz nowy projekt za pomocą komendy:  

`create-react-app nazwa-katalogu`  

> #### Uwaga
> Należy pamiętać, że nazwa katalogu nie może pokrywać się z nazwą instalowanych w nim pakietów npm, dlatego nie używajmy nazw typu "react" etc.

```bash
λ npm install create-react-app --global
+ create-react-app@1.4.3
```

<small>Instalacja <acronym title="create-react-app">CRA</acronym> jako pakiet globalny</small>

```
λ create-react-app react-tweetorial

Creating a new React app in D:\Praca\Projekty\react-tweetorial.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...            
// ...
Success! Created react-tweetorial at D:\Praca\Projekty\react-tweetorial          
Inside that directory, you can run several commands:                             

  yarn start                                                                     
    Starts the development server.                                               

  yarn build                                                                     
    Bundles the app into static files for production.                            

  yarn test                                                                      
    Starts the test runner.                                                      

  yarn eject                                                                     
    Removes this tool and copies build dependencies, configuration files         
    and scripts into the app directory. If you do this, you can’t go back!       

We suggest that you begin by typing:                                             

  cd react-tweetorial                                                            
  yarn start                                                                     

Happy hacking!                                                                                 
```

<small>Przygotowanie nowego projektu</small>

### uruchomienie

Po utworzeniu nowego projektu możemy od razu uruchomić go przechodząc do katalogu projektu i wywołując komendę `npm start`

W terminalu pojawi się informacja o uruchomionym serwerze a strona projektu otworzy się automatycznie w domyślnej przeglądarce systemowej. Jeżeli tak się nie stało, ręcznie otwórzmy domyślny adres [http://localhost:3000](http://localhost:3000)

```bash
λ cd react-tweetorial
λ npm start
Compiled successfully!

You can now view react-tweetorial in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.27:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.              
```

<small>Przykładowy plik konfiguracyjny Webpack, zapewniający transpilację kodu JS oraz LESS.</small>

### struktura projektu

W katalogu projektu utworzone zostało kilka plików i folderów, są to:

* node_modules - wszystkie używane przez projekt moduły
* package.json - plik zawierające podstawowe informacje o naszym projekcie jak jego nazwa, lista pakietów etc.
* yarn.lock (lub package-lock.json) - pliki określające dokładne wersje pobranych pakietów, dzięki czemu ponowna instalacja nie pobierze "przypadkiem" nowszych
* public - katalog zawierający "statyczne" zasoby projektu (jak ikona, manifest i plik index.html)
* src - katalog ze źródłem naszej aplikacji

```bash
λ ls -la
total 729
-rw-r--r-- 1 btm 197610    285 Nov  8 22:26 .gitignore
-rw-r--r-- 1 btm 197610 108987 Nov  8 22:26 README.md
drwxr-xr-x 1 btm 197610      0 Nov  8 22:30 node_modules
-rw-r--r-- 1 btm 197610    353 Nov  8 22:26 package.json
drwxr-xr-x 1 btm 197610      0 Nov  8 22:26 public
drwxr-xr-x 1 btm 197610      0 Nov  8 22:26 src
-rw-r--r-- 1 btm 197610 234792 Nov  8 22:26 yarn.lock
```

<small>Przykładowe podsumowanie znalezionych błędów</small>
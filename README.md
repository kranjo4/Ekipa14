# Ekipa 14 - Fitnes sledilnik

Študijski projekt pri predmetu RIS. Aplikacija uporabniku omogoča beleženje telesnih mer in treningov ter osnovno upravljanje uporabniškega profila.

## Funkcionalnosti

- registracija in prijava uporabnika,
- urejanje in brisanje uporabnikov,
- dodajanje, pregled, urejanje in brisanje telesnih mer,
- dodajanje, pregled, urejanje in brisanje treningov,
- filtriranje mer po uporabniku, teži in datumu,
- pošiljanje e-pošte s tekstovno priponko.

## Tehnologije

### Backend

- Java 17,
- Spring Boot 3.2,
- Spring Web in Spring Data JPA,
- MySQL,
- Maven Wrapper.

### Frontend

- React 18,
- React Router,
- Axios in Fetch API,
- Material UI in Bootstrap.

## Struktura projekta

```text
Ekipa14/
├── README.md
├── ER_diagram.mwb
├── docker-compose.yml     # lokalni MySQL
└── Ekipa14Projetkna/
    ├── pom.xml
    ├── mvnw.cmd
    ├── src/main/java/.../
    │   ├── controller/     # REST endpointi
    │   ├── dto/            # objekti za prenos podatkov
    │   ├── exception/      # izjeme in obravnava napak
    │   ├── model/          # JPA entitete
    │   ├── repository/     # dostop do podatkovne baze
    │   └── service/        # poslovna logika
    ├── src/main/resources/
    │   └── application.properties
    └── ekpia14frontend/
        ├── package.json
        └── src/
            ├── components/
            └── pages/
```

Backend uporablja razdelitev `controller -> service -> repository`, frontend pa je organiziran po straneh.

## Predpogoji

Nameščeno mora biti:

- JDK 17,
- Node.js in npm,
- Docker Desktop z Docker Compose,
- IntelliJ IDEA za zagon backenda.

MySQL za lokalni razvoj teče v Dockerju, zato XAMPP oziroma ločena namestitev MySQL nista potrebna.

## Nastavitve baze

Backend uporablja naslednje nastavitve v `Ekipa14Projetkna/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ekipa14
spring.datasource.username=root
spring.datasource.password=root
```

Te vrednosti se ujemajo z nastavitvami v `docker-compose.yml`. Baza `ekipa14` se ustvari ob prvem zagonu MySQL vsebnika. Hibernate zaradi `spring.jpa.hibernate.ddl-auto=update` sam ustvari oziroma posodobi tabele.

## Zagon MySQL v Dockerju

Zaženi Docker Desktop. Če uporabljaš XAMPP, mora biti njegov MySQL izklopljen, ker Docker uporablja port `3306`.

V korenu repozitorija, kjer je `docker-compose.yml`, zaženi:

```powershell
docker compose up -d mysql
```

Preveri stanje:

```powershell
docker compose ps
docker compose logs mysql
```

Vsebnik `ekipa14-mysql` mora biti v stanju `running`, v logih pa mora biti MySQL pripravljen na povezave.

## Zagon backenda v IntelliJ IDEA

1. V IntelliJ odpri mapo `Ekipa14Projetkna`, kjer sta `pom.xml` in `mvnw.cmd`. Ne odpiraj samo mape `src`.
2. Izberi `File > Project Structure > Project` in nastavi JDK 17.
3. V `File > Settings > Build, Execution, Deployment > Build Tools > Maven` pri `JDK for importer` izberi JDK 17.
4. V `File > Settings > Plugins` preveri oziroma namesti plugin `Lombok`.
5. V `File > Settings > Build, Execution, Deployment > Compiler > Annotation Processors` vključi `Enable annotation processing`.
6. Odpri Maven panel in klikni `Reload All Maven Projects`.


Odpri `Ekipa14ProjetknaApplication.java` in klikni zeleno puščico ob metodi `main`. Izberi `Run 'Ekipa14Projetkna'`. Backend teče na:

```text
http://localhost:8080
```

Alternativa:

```powershell
cd .\Ekipa14Projetkna
.\mvnw.cmd spring-boot:run
```

Ločena namestitev Maven-a ni potrebna, ker projekt vsebuje Maven Wrapper.

## Zagon frontenda

V drugem terminalu:

```powershell
cd .\Ekipa14Projetkna\ekpia14frontend
npm install
npm start
```

Frontend teče na:

```text
http://localhost:3000
```

Za produkcijski build:

```powershell
npm run build
```

## E-poštni strežnik

Pošiljanje e-pošte uporablja ločen Express strežnik v `ekpia14frontend/src/server.js` na portu `3001`. Pred zagonom nastavi:

```powershell
$env:MAIL_USER="tvoj@gmail.com"
$env:MAIL_PASS="gmail-app-password"
node .\src\server.js
```

Za Gmail uporabi geslo aplikacije, ne običajnega gesla računa.

## REST endpointi

| Področje | Osnovna pot |
|---|---|
| Uporabniki | `/uporabnik` |
| Mere | `/mera` |
| Treningi | `/trening` |

Podrobne poti so definirane v controllerjih v `Ekipa14Projetkna/src/main/java/.../controller`.

## Zaustavitev in ponovni zagon

Za začasno ustavitev MySQL vsebnika:

```powershell
docker compose stop mysql
```

Za ponovni zagon:

```powershell
docker compose start mysql
```

Za odstranitev vsebnika ob ohranitvi podatkov:

```powershell
docker compose down
```

Za odstranitev vsebnika in vseh lokalnih podatkov:

```powershell
docker compose down -v
```

Ukaz `down -v` uporabljaj previdno, ker izbriše lokalno bazo.

## Odpravljanje težav

### `Communications link failure`

Preveri:

```powershell
docker compose ps
docker compose logs mysql
```

Preveri tudi, da MySQL v XAMPP-u ni zagnan.

### `Access denied for user 'root'`

Geslo v `application.properties` mora biti enako vrednosti `MYSQL_ROOT_PASSWORD` v `docker-compose.yml`. Če je bil Docker volume ustvarjen s starim geslom, ga lahko ponastaviš:

```powershell
docker compose down -v
docker compose up -d mysql
```

To izbriše vse podatke v lokalni Docker bazi.

### `Port 3306 is already allocated`

Ustavi MySQL v XAMPP-u ali preveri proces, ki uporablja port:

```powershell
netstat -ano | findstr :3306
```

### `Cannot resolve symbol lombok`

Preveri Lombok plugin, vključen annotation processing in ponovno naloži Maven projekt.

### `No SDK specified`

Nastavi JDK 17 v `File > Project Structure > Project > SDK`.

## Vrstni red

```text
1. Zaženi Docker Desktop.
2. V korenu repozitorija zaženi: docker compose up -d mysql
3. Preveri: docker compose ps
4. Zaženi Ekipa14ProjetknaApplication v IntelliJ.
5. V frontend mapi zaženi: npm start
6. Odpri http://localhost:3000
```

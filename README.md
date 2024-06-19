# MoZ Evaluatie PWA - README

<img src="src/images/moz-mascot.svg" alt="MoZ Mascot" height="96" width="96">

## Introductie

Dit project maakt deel uit van mijn afstudeeronderzoek en heeft als doel mentoren te ondersteunen tijdens het traject als studentmentor bij het programma MoZ (Mentoren op Zuid). Tegelijkertijd zorgt het project ervoor dat MoZ betere monitoring krijgt over haar deelnemers (mentoren en mentees) door middel van evaluaties.

De evaluaties worden fysiek ingevuld tijdens een MoZ bijeenkomst door mentee en mentor samen in een evaluatieboek. Het is daarna de verantwoordelijkheid van de mentor om foto's te maken van de evaluatiepagina's en deze te uploaden in de app bij het bijbehorende thema. De foto's worden niet opgeslagen, maar enkel geanalyseerd om de juiste antwoorden bij de vragen te extraheren.

Het analyseren van de evaluaties gebeurt in een Node.js backend die via Azure App Service in de cloud draait. Hierbij wordt een API-call gedaan naar de Microsoft Azure Vision API om de data van de afbeelding op te vragen. Deze data wordt vervolgens in een JSON-bestand geplaatst en geanalyseerd op specifieke datapunten zoals de x- en y-waarden van de zinnen "antwoord op vraag X". Op basis van deze waarden wordt gezocht naar emoji's voor vragen 1 en 2 en naar handgeschreven tekst voor vraag 3, die middels OCR wordt herkend.

Dit proces gebeurt in een fractie van een seconde, waarna de gebruiker de data kan bekijken en bewerken. Bij het versturen wordt de data samen met de `userData.json` naar de Firebase-database gestuurd. `userData.json` bevat hardcoded gebruikersgegevens. In de toekomst zouden dit echte gegevens moeten zijn, verkregen via Hogeschool Rotterdam SSO, waarbij de mentor een mentee aan zijn/haar (graag genderneutraal) account kan toevoegen.

## Vereisten

- Node.js
- React.js
- Microsoft Azure Vision API
- Microsoft Azure App Service
- Firebase
- Ngrok (voor lokale ontwikkeling)

## Installatie

1. **Installeer de benodigde dependencies:**

   ```bash
   npm install
   ```

2. **Configureer Firebase:**

   - Maak een Firebase-project aan in de [Firebase Console](https://console.firebase.google.com/).
   - Voeg je Firebase-configuratie toe in een `.env` bestand:
     ```
     REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
     REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
     REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
     REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
     REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
     ```

3. **Azure Vision API configuratie:**

   - Maak een Microsoft Azure account aan en verkrijg de Vision API key en endpoint.
   - Voeg deze toe aan je `.env` bestand:
     ```
     REACT_APP_AZURE_VISION_API_KEY=YOUR_VISION_API_KEY
     REACT_APP_AZURE_VISION_ENDPOINT=YOUR_VISION_ENDPOINT
     ```

4. **Backend configuratie:**

- Maak een `backend` directory aan met de volgende bestanden:

        ```
        /backend
        ├── index.js (kopieer de inhoud van backend-template.js)
        ├── package.json
        └── .env
        ```

  - **Voorbeeld `.env`:**
    ```
    AZURE_VISION_API_KEY=YOUR_AZURE_VISION_API_KEY
    AZURE_VISION_ENDPOINT=YOUR_AZURE_VISION_ENDPOINT
    ```

5. **Deploy de backend naar Azure App Service:**

   - Volg de instructies op de [Azure App Service documentatie](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs) om je Node.js backend te deployen.

6. **Deploy de backend naar Azure App Service:**

- In 'FileUploadModal.js' component, zet bij de 'handleAnalyze' functie de juiste backend variable bij axios.

  - **Voorbeeld `backend_url`:**
    ```
    REACT_APP_BACKEND_URL=your_backend_url_here
    ```

## Gebruik

1. **Start de frontend:**

   ```bash
   npm start
   ```

2. **Start de backend:**

   ```bash
   cd backend
   node index.js
   ```

3. **Gebruik Ngrok voor lokale ontwikkeling:**

   - Installeer Ngrok via de [Ngrok website](https://ngrok.com/).
   - Start Ngrok om je lokale server publiek toegankelijk te maken:
     ```bash
     ngrok http 3000
     ```
   - Gebruik de gegenereerde Ngrok URL om toegang te krijgen tot je app.

4. **Gebruik de app:**
   - Maak foto's van de evaluatiepagina's en upload deze in de app.
   - De foto's worden geanalyseerd door de Azure Vision API en de resultaten worden getoond in de app.
   - Bewerk indien nodig de resultaten en verstuur de data naar de Firebase-database.

## Structuur

```bash
/backend - Bevat de Node.js backend code
```

```bash
/src - Bevat de React.js frontend code
```

```bash
.env - Bevat de configuratie variabelen voor Firebase en Azure Vision API
```

```bash
/backend-template.js - De code die nodig is om de analyses uit te voeren, hernoemen naar index.js
```

## Toekomstige verbeteringen

- Integratie met SSO van alle deelnemende mentor scholen voor het verkrijgen van echte gebruikersgegevens.
- Mogelijkheid voor mentoren om mentees toe te voegen aan hun account.

## Licentie

Dit project is gelicentieerd onder de MIT-licentie. Zie het [LICENSE](LICENSE) bestand voor meer informatie.

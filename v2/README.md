# Leuchtfeuer – neue Website

## Sofort auf GitHub Pages

Den kompletten Inhalt dieses Ordners in dein Repository hochladen. `index.html` ist die Startseite.

### Struktur

```text
/
├── index.html
├── ueber-uns.html
├── speisekarte.html
├── veranstaltungen.html
├── kontakt.html
├── impressum.html
├── datenschutz.html
├── admin/
│   ├── index.html
│   └── admin.js
├── css/
│   └── style.css
├── js/
│   ├── default-data.js
│   └── main.js
└── pic/
    ├── logo.png
    ├── bild1.png
    ├── bild2.png
    └── bild3.png
```

## Admin

Öffne `/admin/`.

Standard-Passwort im statischen Demo-Modus:

`leuchtfeuer123`

**Unbedingt ändern**, bevor die Seite produktiv genutzt wird.

### Was das Admin-Panel kann

- Öffnungszeiten ändern
- Speisekarte / Preise ändern
- Angebote erstellen, bearbeiten, aktivieren/deaktivieren
- Veranstaltungen erstellen, bearbeiten, aktivieren/deaktivieren
- Instagram/Facebook-Links ändern
- jeweils neuesten Instagram-/Facebook-Post als URL hinterlegen
- Basisdaten der Website ändern
- Daten als JSON exportieren/importieren

Die öffentliche Website liest dieselben Daten aus `localStorage`.

## Wichtige technische Grenze von GitHub Pages

GitHub Pages ist ein statischer Host. Eine reine HTML/CSS/JS-Seite kann **keine gemeinsame Datenbank** auf dem GitHub-Server verändern. Deshalb arbeitet das mitgelieferte Admin-Panel im sofort lauffähigen GitHub-Modus browserlokal.

Das bedeutet:

- Auf demselben Browser/Gerät: Änderungen erscheinen direkt auf der Website.
- Ein anderer Rechner sieht diese Änderungen nicht.
- Ein echter, sicherer Geschäftsführer-Login mit zentral gespeicherten Preisen/Öffnungszeiten braucht ein Backend.

### Empfohlene nächste Ausbaustufe

Die Oberfläche ist bereits so gebaut, dass die Datenstruktur später auf Supabase/Firebase umgestellt werden kann. Dann wären möglich:

- echter Login
- zentrale Datenbank
- Änderungen von Handy/PC
- Bild-Uploads
- Rollen (Geschäftsführer / Mitarbeiter)
- echte automatische Meta-/Instagram-Feeds
- Audit-Log

## Bilder

Die Website verwendet bewusst feste Dateinamen:

- `pic/logo.png`
- `pic/bild1.png`
- `pic/bild2.png`
- `pic/bild3.png`

Du kannst diese Dateien im GitHub-Repository austauschen. Dateinamen beibehalten.

## Google Maps

Die Startseite und Kontaktseite verwenden eine interaktive Google-Maps-Einbettung für:

Leuchtfeuer, Mühlenstraße 75, 26931 Elsfleth

Für die finale Datenschutzerklärung sollte die konkrete Maps-Einbindung berücksichtigt werden.

## Social Media

Instagram:
https://www.instagram.com/leuchtfeuer_elsfleth/

Facebook:
https://www.facebook.com/LeuchtfeuerElsfleth/?locale=de_DE

Der statische GitHub-Modus kann keine „immer automatisch neuesten“ Meta-Posts ohne API/Backend sicher abrufen. Im Admin-Panel kann deshalb der aktuelle Post verlinkt werden. Für den echten automatischen Feed ist ein Meta-API-Backend der richtige nächste Schritt.

## Rechtliches

`impressum.html` und `datenschutz.html` enthalten Platzhalter. Vor Veröffentlichung müssen die tatsächlichen Betreiber-/Anbieterangaben und die verwendeten Dienste eingetragen und rechtlich geprüft werden.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    
    server-->>browser: status code 302. URL redirected


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes

    server-->>browser: notes


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

    server-->>browser: the stylesheet

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js

    server-->>browser: the JavaScript

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json

    server-->>browser: the JSON raw data

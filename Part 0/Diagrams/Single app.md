```mermaid
sequenceDiagram
    participant Browser
    participant Server
    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa

    Server -->> Browser: page html file

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

    Server -->> Browser: CSS stylesheet

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

    Server -->> Browser: JavaScricpt code

    Browser ->> Server: https://studies.cs.helsinki.fi/exampleapp/data.json

    Server -->> Browser: JSON raw data 
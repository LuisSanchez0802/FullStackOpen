```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Server -->> Browser: status code 201, and json raw data
    Note right of Browser: The page doesn't get redirected and no more HTTP requests are sent
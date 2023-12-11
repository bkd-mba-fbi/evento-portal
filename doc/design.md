[back](../README.md)

# Design

## Responsive Design

Mobile breakpoints:

- bigger than 1920px: content centered
- smaller than 1200px: hamburger menu
- smaller than 767px: mobile compact

## CI/CD Canton of Bern

- The base layout is implemented according to the CI/CD of the Canton of Berne:<br>https://www.be.ch/cd (see section "Web-Applikationen")
- There is a "Web-Styleguide" with implementations of the relevant components (HTML/CSS):<br>https://www.be.ch/web-styleguide (username "guest", password "kantonbern")
- Since the _Evento Portal_ only uses a few components, we did not use any CSS framework, but implemented the layout and the components based on the above design system as Web Components with plain CSS.

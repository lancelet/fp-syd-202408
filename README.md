# FP-Syd Presentation - 2024-08-28

This is a lightning talk presentation for the Sydney Functional Programming
group, entitled "Interactive Diagrams in Elm".

View the generated presentation on
[GitHub Pages](https://lancelet.github.io/fp-syd-202408/index.html).

## Quick Guide

This repository uses NPM for packaging, with the
[Parcel](https://parceljs.org/) build tool. It uses the
[techdraw](https://github.com/lancelet/techdraw) library in Elm (as a
submodule for now, since it has not yet been released) to create a
couple of diagrams which are included directly in the presentation.

To compile this presentation:

```
git clone --recurse-submodules git@github.com:lancelet/fp-syd-202408.git
npm install
npm run start    # Run the development server
npm run build    # Build the deployable project
```

To view the minified version:

```
cd dist
npx live-server  # Run the deployable version of the site
```

To clean:

```
npm run clean
```

To re-install everything:

```
npm run reinstall
```
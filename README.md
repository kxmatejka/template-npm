# Šablona ts knihovny

## Jak distribuovat kód

Zdrojový kód knihovny může být napsán v jakékoliv mutaci (ts, flow, coffee script...), ale aby uživatel nemusel
nastavovat build pro každou knihovnu, je knihovna distribuována se spustitelným buildem, což přináší dva problémy.

První jednodušší případ nastává, pokud je build sestaven pro vyšší specifikaci es než v jaké bude spuštěn.
V tom případě si ho musí uživatel sám transpilovat pro nižší verzi.

Opačný případ je složitější, pokud je build sestaven pro nižší specifikaci a uživatel potřebuje efektivnější modernější
build, tak si ho musí sám sestavit ze zdrojových kódů.

## Modulový systém

Build je typicky distribuován pro commonjs, aby šel použít out of box v nodejs prostředí. S tím si hravě poradí i webpack,
takže není problém ani s použitím na webu.

Ovšem pokud je knihovna zamýšlena pro web, je dobré distribuovat i build pro es6 modulový systém, jelikož podporuje
tree shaking. Cestu k es6 buildu je možno zadat v `package.json` do atributu `module`.

## Typescript

Typy jsou ze zdrojových souborů extrahováný do samostatných `{filename}.d.ts` souborů pomocí přepínače `"declaration": true`
v typescript konfiguraci.

## Build

### Sestavení buildu

```shell script
npm run build
```

### Výstup

```
- dist
  - commonjs
    - src/
    - main-commonjs.js
    - main-commonjs.d.ts
  - es6
    - src/
    - main-es6.js
    - main-es6.d.ts
```

## Todo

- Prebuild (lint, test)
- Publikování v npm
- Verzování
- CD integrace
- Co když je potřeba polyfill

## Zdroje

- [Publishing an NPM package - Best practices](https://betterstack.dev/blog/npm-package-best-practices/)
- [What is your output target for publishing npm modules?](https://dev.to/joelnet/what-is-your-output-target-for-publishing-npm-modules-5h4b)
- [Typescript modules handbook](https://www.typescriptlang.org/docs/handbook/modules.html)

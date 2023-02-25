const fs = require('fs');
const path = require('path');

const icoMoonConfig = require('../assets/icons/selection.json');

const filePath = path.join(__dirname, '../src/components/Icon/IconName.ts');

const iconNames = icoMoonConfig.icons.map(icon => icon.properties.name).sort();

const names = iconNames.map(name => `    '${name}' = '${name}',`);

fs.writeFile(filePath, `export enum IconName {\n${names.join('\n')}\n}\n`, error =>
    error ? console.error(error) : console.log('Icon names successfully extracted! 🎉')
);

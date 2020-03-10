/* eslint-disable security/detect-non-literal-fs-filename */

import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, dirname, basename } from 'path';

/** internal code to help transform react syntax to xml
* @param { string } svg
* @param { boolean } full
*/
function port(svg, full)
{
  const parse = require('html-react-parser');
  const ReactDOMServer = require('react-dom/server');

  // match everything between the first and last occurrence of (<) and (>)
  if (full)
    svg = svg.match(/<.*>/s)[0];

  // replaces <example/> with <example></example>
  svg = svg.replace(/(<)((\s|\S)+?)(>)/g, (match, _0, _1, _2) =>
  {
    if (_2 !== '/')
      return match;
    
    const v = _1.substring(0, _1.length - 1);

    const name = _1.split(' ').shift().trim();
    
    return `${_0}${v.trim()}></${name}>`;
  });

  // removes ${}
  svg = svg.replace(/(\${)(.+?)(})/g, (match, _0, _1) =>
  {
    return _1;
  });
  
  // replaces {} with '{{}}'
  svg = svg.replace(/({)(.+?)(})/g, (match, _0, _1) =>
  {
    /**
      * @type { string }
      */
    let s = _1;
  
    // removes white-space
    s = s.replace(/ /g, '');
  
    // removes template quotes
    s = s.replace(/`/g, '');
  
    // removes single quotes
    s = s.replace(/'/g, '');
  
    // removes double quotes
    s = s.replace(/"/g, '');
  
    // removes add sign
    s = s.replace(/\+/g, '');
      
    // remove react class props prefix
    s = s.replace('this.props.', '');
  
    return `'{{${s}}}'`;
  });

  // transform JSX to HTML
  svg = ReactDOMServer.renderToStaticMarkup(parse(svg));

  return svg;
}

function decamelize(str)
{
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

const path = process.argv[2];

const input = readFileSync(path).toString();

const output = port(input, path.endsWith('.tsx'));

if (!path.endsWith('.tsx'))
{
  writeFileSync(path, output);
}
else
{
  const name = decamelize(basename(path)).replace('.tsx', '');
  const newPath = join(dirname(path), `${name}.svg`);
  
  // eslint-disable-next-line no-console
  console.log(name);
  
  // write new file
  writeFileSync(newPath, output);
  
  // delete old .tsx file
  unlinkSync(path);
}
  
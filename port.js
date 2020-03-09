/* eslint-disable security/detect-non-literal-fs-filename */

import { readFileSync, writeFileSync } from 'fs';

/** internal code to help transform react syntax to xml
* @param { string } svg
*/
function port(svg)
{
  const parse = require('html-react-parser');
  const ReactDOMServer = require('react-dom/server');

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

const path = process.argv[2];

const input = readFileSync(path).toString();

const output = port(input);

writeFileSync(path, output);
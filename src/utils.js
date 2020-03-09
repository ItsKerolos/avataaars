let i = 0;

export function uniqueId()
{
  return `avataaars-${i++}`;
}

/**
* @param { string } svg
* @param { string } match
* @param { string } replace
*/
export function template(svg, match, replace)
{
  return svg.replace(/({{)(.+?)(}})/g, (m, _0, _1) =>
  {
    const v = _1.replace(match, replace);
    if (v !== _1)
      return v;
    else
      return m;
  });
}
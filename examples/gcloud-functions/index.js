const svg2img = require('svg2img');
const avatar = require('re-avataaars').default;

/** Responds to a GET request with a image/png of a avatar
*
* @example
* gcloud functions call avatars
*
* @param { import('express').Request } req Cloud Function request context
* @param { import('express').Response } res Cloud Function response context
*/
exports.main = (req, res) =>
{
  if (req.method === 'GET')
  {
    svg2img(
      avatar(),
      (error, buffer) =>
      {
        if (error)
        {
          res.status(405).send({ error: 'Internal Server Error' });
        }
        else
        {
          res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': buffer.length
          });

          res.end(buffer);
        }
      });
  }
  else if (req.method === 'PUT')
  {
    res.status(403).send('Forbidden');
  }
  else
  {
    res.status(405).send({ error: 'Internal Server Error' });
  }
};

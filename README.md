<img src='avataaars-example.png' style='width: 128px; height: 136px;'/>

Original React library was developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on a [Sketch library](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).

This is a rewrite of Fang-Pen Lin's work but as a API, this allow it to be used for things like: 
  - [Serverless function](/examples/gcloud-functions).
  - Generating an avatar from your terminal.
  - Use it inside any web framework.

Being a rewrite we removed, added and renamed stuff so this is not compatible with things like [https://getavataaars.com](https://getavataaars.com)

## Usage

```
npm install re-avataaars --save
```

```js
import avatar, { clotheColors } from 're-avataaars'

// this outputs a svg xml string
const svg = avatar({
  topType: 'long-hair-curly',
  clothType: 'shirt-v-neck',
  clotheColor: clotheColors.pastelOrange
});

// you can add it directly to DOM (browser)
document.getElementById('foo').innerHTML = svg;

// save it to a file (nodejs)
require('fs').writeFileSync('avatar.svg', svg);
```

You can use the piece function to show individual pieces of an avatar.

```js
import { piece, clotheColors } from 're-avataaars'

const svg = piece('clothe', {
  clothType: 'graphics',
  clotheColor: '#000000',
  clotheGraphic: 'pizza'
}, { size: '268' });
```

Check the examples folder if you want to see more ways to use this module.

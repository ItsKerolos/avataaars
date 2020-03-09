import { piece } from '../src/index';

describe('Testing Piece', () =>
{
  test('Test', () =>
  {
    expect(1).toEqual(1);

    const svg = piece('clothe', { clothType: 'hoodie' });

    require('fs').writeFileSync('./piece.preview.svg', svg);
  });
});
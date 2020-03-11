import avatar, { clotheColors } from '../src/index';

describe('Testing Avatar', () =>
{
  test('Test', () =>
  {
    expect(1).toEqual(1);

    const svg = avatar({
      topType: 'long-hair-curly',
      clothType: 'shirt-v-neck',
      clotheColor: clotheColors.pastelOrange
    });

    require('fs').writeFileSync('./avatar.preview.svg', svg);
  });
});
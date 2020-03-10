import avatar from '../src/index';

describe('Testing Avatar', () =>
{
  test('Test', () =>
  {
    expect(1).toEqual(1);

    const svg = avatar({
    });

    require('fs').writeFileSync('./avatar.preview.svg', svg);
  });
});
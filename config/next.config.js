const production = process.env.NODE_ENV === 'production';

export const url = production
  ? 'https://emirandaweb.com'
  : 'http://localhost:1337';

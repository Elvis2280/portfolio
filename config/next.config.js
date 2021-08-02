const production = process.env.NODE_ENV === 'production';

export const url = production
  ? 'https://elvisdev-portfolio.netlify.app'
  : 'http://localhost:1337';

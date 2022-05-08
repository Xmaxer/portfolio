module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^[./]',
    '^@src(.*)$',
    '^@component(.*)$',
    '^@hook(.*)$',
    '^@constant(.*)$',
    '^@context(.*)$',
    '^@asset(.*)$',
    '^@util(.*)$',
  ],
  importOrderSeparation: true,
};

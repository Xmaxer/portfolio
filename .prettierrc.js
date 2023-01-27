module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
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

module.exports = {
    parser: '@typescript-eslint/parser', //ESlint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Recommended rules for typescript @typescript-eslint
        'prettier/@typescript-eslint', //Disabled ESlint errors that are equals to prettier errors.
        'plugin:prettier/recommended', //Prettier rules will be turned into ESlint errors. This should be the last config always.
    ],
    parserOptions: {
        ecmaVersion: 2018, //Modern ECMAS script.
        sourceType: 'module', //Allow import usage.
    },
    rules: {
        //Add eslint project rules here.
    },
}
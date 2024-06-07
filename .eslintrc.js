module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        'plugin:@stylistic/disable-legacy',
    ],
    plugins: [
        '@stylistic',
        '@stylistic/migrate'
    ],
    rules: {
        '@babel/new-cap': 'off',
        '@stylistic/semi': ['error', 'never'],
    },
}

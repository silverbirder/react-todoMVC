require('ts-node').register({
    extends: __dirname + '/../../tsconfig.json',
    transpileOnly: true,
    compilerOptions: {
        module: "commonjs",
        target: "es6",
    },
})

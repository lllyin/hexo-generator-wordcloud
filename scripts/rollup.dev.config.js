const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

module.exports = config => {
  const { input, fileName, name } = config;
  return {
    input: {
      input,
      plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        // uglify()
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || 'YOUR-LIB-NAME',
      globals: {
        "YOUR-LIB-NAME": 'YOUR-LIB-NAME',
      }
    },
    plugins: [
    ]
  };
};

const { defineConfig } = require('tsup')
const execSync = require('child_process').execSync
const glob = require('tiny-glob')

module.exports = async () => {
  const entries = await glob('*.{js,ts,tsx}', { cwd: './src', absolute: true })
  return defineConfig({
    entry: entries,
    format: ['cjs', 'esm'],
    clean: true,
    loader: {
      '.js': 'jsx',
    },
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    dts: true,
    target: 'node12.22',
    onSuccess() {
      const out = execSync('node scripts/generate-package.js')
      console.log(out.toString())
      const outSize = execSync('npm run size')
      console.log(outSize.toString())
    },
  })
}

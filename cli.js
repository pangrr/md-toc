#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');
const toc = require('markdown-toc');

const argv = yargs
  .demandCommand(1)
  .usage('Usage: $0 <markdown file path>')
  .argv;

const mdFilePath = argv._[0];

fs.watchFile(mdFilePath, () => {
  let mdFileContent = fs.readFileSync(mdFilePath, 'utf8');
  mdFileContent = toc.insert(mdFileContent);
  fs.writeFileSync(mdFilePath, mdFileContent);
});

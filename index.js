var fs = require("fs-extra")
var path = require("path")

var dest = path.resolve(process.cwd(), ".gitignore")
var libDir = require.resolve("./.gitignore")

const { Command } = require("commander")

const program = new Command()
program.version("0.0.1")




program.helpOption(
  "-h, --help",
  "run `gitignore-cli` will generate a .gitignore file"
)

function gen() {
  if (fs.existsSync(dest)) {
    console.log(".gitignore existed")
    return
  }

  fs.copyFile(libDir, dest, function () {
    console.log(".gitignore created")
  })
}

program
  .action(function () {
    gen()
  });

program.parse(process.argv);
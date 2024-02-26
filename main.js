import { sort } from "./sort.js";

function main() {
  const [_nodePath, _script, widthStr, heightStr, lengthStr, massStr] =
    process.argv;
  console.log(sort(+widthStr, +heightStr, +lengthStr, +massStr));
}

main();

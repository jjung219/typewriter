let sentence = "hello from the other side";

let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

  }, time);
  time += 100;
}
setTimeout(() => console.log("\n"), 2800);

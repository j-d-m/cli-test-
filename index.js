#! /usr/bin/env node
const { exec, execSync } = require("child_process");
// const { stdout, stderr } = require("process");
const [message, branchname] = process.argv.slice(2);
if (message && branchname) {
  let { err, stdout, stderr } = execSync("git add .");
  if (!err) {
    let { error, stdout, stderr } = execSync(`git commit -m "${message}"`);

    if (!error) {
      let { errormessage, stdout, stderr } = execSync(
        `git push origin "${branchname}"`
      );
      if (!errormessage) {
        console.log("successfully pushed your code to Github");
      }
    }
  }
}

//   exec("git add .", (err, stdout, stderr) => {
//     if (err) {
//       throw new Error("There is a problem");
//     }
//     exec(`git commit -m "${message}"`, (err, stdout, stderr) => {
//       if (err) {
//         throw new Error("There is a problem");
//       }
//       exec(`git push origin ${branchname}`, (err, stdout, stderr) => {
//         if (err) {
//           throw new Error("There is a problem");
//         }
//         console.log("Successfully pushed to Github ");
//       });
//     });
//   });
// } else {
//   console.log(
//     "Please Provide Two Arguments ==> 1 - Your Commit Message, 2 - Your Branch Name "
//   );

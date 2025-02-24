# PROJECT URL: https://roadmap.sh/projects/task-tracker

# run the task

chmod +x task-cli.js<br>
task-cli.js add "Buy groceries"<br>
task-cli.js update 1 "Buy groceries and cook dinner"<br>
task-cli.js mark-in-progress 1<br>
task-cli.js list<br>
task-cli.js list done<br>
task-cli.js list in-progress<br>
task-cli.js list todo<br>


#! ---> shebang

`#! /usr/bin/env node`

`#!` → This tells the system that the script should be executed using a specific program.
`/usr/bin/env` → This is a command that finds and runs the correct version of the specified program.
`node` → This tells the system to run the script using Node.js.

# utf-8 reading
'utf8' ensures that the file content is read as a human-readable text string instead of raw binary data

# process.argv

In a Node.js CLI application, we use process.argv to get arguments passed to the script.

Example:

bash<br>
Copy<br>
Edit<br>
node task-cli.js add "Buy groceries"<br>
process.argv[0] → Path to Node.js executable.<br>
process.argv[1] → Path to the script (task-cli.js).<br>
process.argv[2] → The first argument (add in this case).<br>
process.argv[3] → The second argument ("Buy groceries" in this case).<br>


# find vs filter ----> find returns a object whereas filter returns a array


# npm link

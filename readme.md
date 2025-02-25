# PROJECT URL(GITHUB-ACTIVITY): https://roadmap.sh/projects/github-user-activity
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

`#!` → This tells the system that the script should be executed using a specific program.<br>
`/usr/bin/env` → This is a command that finds and runs the correct version of the specified program.<br>
`node` → This tells the system to run the script using Node.js.<br>

# fs (File System Module)
Node.js has a built-in module called fs (File System) that allows us to read, write, and modify files.<br>

fs.existsSync(path) → Checks if a file or directory exists.<br>
fs.writeFileSync(path, data, options) → Writes data to a file.<br>
fs.readFileSync(path, options) → Reads data from a file.<br>
fs.appendFileSync(path, data, options) → Appends data to a file.<br>
Since we are storing tasks in a JSON file, we will use fs to read and write to this file.<br>

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

# npm link

# Difference adding files in bin and script package.json

Both bin and scripts are used for executing commands in Node.js projects, but they serve different purposes.<br>

`bin`: The bin field in package.json is used to define executable commands that can be run globally when the package is installed.<br>
`script`: The scripts section is used to define custom npm commands for development purposes.

# JSON.stringify(tasks, null, 2)
The JSON.stringify() function converts a JavaScript object into a JSON-formatted string. It takes up to three arguments:<br>
JSON.stringify(value, replacer, space);<br>

value → The object to convert to JSON (in this case, tasks).<br>
replacer → Can be null or a function to modify the values before conversion (we are using null, meaning we don't modify anything).<br>
space → Number of spaces used for indentation (we are using 2 for pretty formatting).<br>

null → This means we are not modifying or filtering any part of the object.<br>
2 → This specifies that we want the JSON to be formatted with 2 spaces per indentation level, making it easier to read.<br>

# find vs filter ----> find returns a object whereas filter returns a array





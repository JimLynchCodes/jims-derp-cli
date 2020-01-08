# Jim's Derp CLI
A cute little command line tool that prints "derp" to the console.

# Usage
Please use node version `8.16.0` or later.

First, install the derp cli globally:
```
npm i -g jims-derp-cli
```

Then just run it:
```
jims-derp-cli
```

# Optional Flags
Any one of these flags or their aliases may be added to get a more interesting output...

`--politely, -p` - Prints derp politely.

`--forcefully, -f` - Prints derp forcefully.

`--very-forcefully, -e` - Prints derp very forcefully.

`--extremely-forcefully, -x` - Prints derp extremely forcefully.


These basic options are also supported:

`--version, -v` - Show version number.

`--help` - Show help


For example:
```
jims-derp-cli -p
```

# Key Takeaways For Making Your Own CLI

- Add "bin" to your package.json:
```
 "bin": {
    "jims-derp-cli": "./bin/index.js"
  },
```

- Make it a "default command" with the [$0 argument](https://github.com/JimLynchCodes/jims-derp-cli/blob/master/bin/index.js#L39) in the yargs library:
```
.command('$0', 'Prints "derp" to the console.', () => { }, (argv) => {
```

- Shows how to add aliases for your custom commands and for the yargs builtin `--version` ([here](https://github.com/JimLynchCodes/jims-derp-cli/blob/master/bin/index.js#L6_L37)).


- Publish your own npm packages with:
```
npm publish
```


# Enjoy!
Hopefully this helps you somehow! 🙏

Much thanks and best regards,

[Jim](https://github.com/JimLynchCodes)


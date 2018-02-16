# Does random stuff

# Modules and Testing

- Modules 
  - Separate js file, that you can refer to from your other js file.
  - Can be libraries. Functions that you can use.

- Separate files
  - Shorter code = easier to read.
  - easier to find what you're looking for. 
  - easier to dubug.
  - Reusability!
  - You only have to program once. Or nonce.

Before node runs a javascript file, it wraps all the code in that file in a function that looks like this:

```js
(function (exports, require, module, __filename, __dirname) {
}
```

* It gives the file a local scope.

* exports is an empty object
* require is a function
* mode is not an empty object.

`require` returns the `module.exports` from the resolved module.

https://nodejs.org/api/modules.html#modules_module_require_id

We can access code from one file by mutating a file's `module.exports`.

Dont do this:

```js
exports = someFunction;
```

do this:


```js
exports.someFunction = someFunction;
```

or 

```js
module.exports = someFunction;
```

- npm
  - Nutty Programming Men
  - Node Package manager, manages modules for us.
  - Module is a javascript file that exports something.

- package.json `npm init`

Every node app that you build should have a `package.json` file that tells us about the package. 

Part of that is describing the dependencies of the package.

Random string, now depends on left-pad.

Google left-pad

- mocha
- --save-dev
- npm install -g `cowsay`

- ESLint 
  - linter
  - Checks for formatting errors. Like
    - Semi colon
    - indentation
    - other syntaxy things.
  - Other people can read our code.
  - standardize what our code looks like, consistency.

https://gist.github.com/davidvandusen/a60a7461cba90632d7be009e3d10b364

- Mock Test

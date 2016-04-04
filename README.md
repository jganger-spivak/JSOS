# JSOS
A web desktop with a small filesystem written in JavaScript.
## Features:

* A virtual filesystem based on localStorage holding up to 5mb of files (can be increased by changing settings)
* Support for reading and writing text files stored in filesystem
* Files can also be executed from a number of formats: JavaScript, MPL (a small scripting language), HTML, SVG, and animation files.
* There is a bare-bones text editor, and a specialized application to create your own animations.

## Task List:
 - [ ] Improving the UI with CSS
 - [ ] Creating a basic word processor to output HTML
 - [ ] A image editor for SVG
 - [ ] Expanding the capacity of the filesystem, probably through PHP and a server
 - I will check off these issues as I come to them.

### Libraries/Projects used:
* [Lockr.js](https://github.com/tsironis/lockr) A simple wrapper for LocalStorage
* [MPL](https://github.com/LEGOJACKI/micro-programming-language) A very basic somewhat buggy scripting language written in JavaScript

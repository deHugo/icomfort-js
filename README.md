# node-icomfort
A client for the Lennox iComfort services implemented in node.js

## Testing
Some very basic tests are implemented using the [Mocha](https://mochajs.org/) testing framework. An npm script has also been defined to fire off the tests. Before running the tests, you will need to define your iComfort username and password in your environment. In Unix/Linux/BSD/mac OS, you can do the following:

```
export ICOMFORT_USERNAME='your icomfort username'
export ICOMFORT_PASSWORD='your icomfort password'
```

On Windows, the command is similar:

```
set ICOMFORT_USERNAME='your icomfort username'
set ICOMFORT_PASSWORD='your icomfort password'
```

After setting your username and password, to run the test command do the following:

```
npm test
```

If your username and password are correct, all of the tests will pass. If not, all of the tests will fail.

## Thanks
Thanks to [Ian Macdonald](https://github.com/bruman) for his [Ruby iComfort](https://github.com/bruman/ruby-icomfort) repo which helped get me started in the right direction.

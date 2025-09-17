# Run sample

## Install dependencies

```sh
npm install
```

## Build it

```sh
npm run build
```

## Run it

```sh
npm start
```

You should see the text:

```text
Registering tools...
Starting server...
```

Great, that means it' starting up correctly.

## Test the server

Test out the capabilities with the following command:

```sh
npx @modelcontextprotocol/inspector node build/app.js
```

This should start up the web interface of the inspector tool.

### Test in CLI mode

```sh
npx @modelcontextprotocol/inspector --cli node ./build/app.js --method tools/list
```

You should see the following output:

```json
```


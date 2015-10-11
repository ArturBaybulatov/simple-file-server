# simple-file-server
simple file server done using connect middleware

### usage

install globally with:

```
> npm install https://github.com/Nieralyte/simple-file-server --global
```

then in command line type:

```
> cd some/target/folder && simple-file-server
```

a simple web server will start at `localhost:80` serving files from `some/target/folder`

a custom port can be specified via `PORT` environment variable:

```
> set PORT=8080 && simple-file-server
```

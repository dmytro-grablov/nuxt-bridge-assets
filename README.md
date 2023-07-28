### Steps to reproduce

```sh
npm ci
npm run build
```

An error appears and build does not succeed:
```
[11:19:21 AM]  ERROR  Invalid pattern "/[name]-[hash].[ext]" for "output.assetFileNames", patterns can be neither absolute nor relative paths. If you want your files to be stored in a subdirectory, write its name without a leading slash like this: subdirectory/pattern.
```

# Indexer and Search

Simple indexer of files, and search by word(s)

## Run

Index the files in a directory with an extension

```shell
node indexer.js <repoPath> <extension>
```

Example

```shell
node indexer.js /var/myrepo md
```

An alternative way to index is by specifying a mapping JSON file,
where the keys are the file names.
(Values can be anything.)

```json
{
  "some/path/file.md": "",
  "some/other/path/file.md": ""
}
```

In this case, the index command has an extra parameter

```shell
node indexer.js <repoPath> <mappingFilePath> <extension>
```

Example

```shell
node indexer.js /var/myrepo /var/myrepo/mapping.json md
```

This process creates two files in current directory:
`files.json` and `index.json`

Now search the files with:

```shell
node search.js <words>...
```

Example

```shell
node search.js block transaction
```

The list of files containing ALL the words will be listed.
The first ones have more occurrences of the words combination

## References

- [Node.js fs.readdir recursive directory search](https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search)
- [Find file with wild card matching](https://stackoverflow.com/questions/21319602/find-file-with-wild-card-matching)
- [Node.js check if path is file or directory](https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory)
- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Multiline strings in ES6 JavaScript](https://jack.ofspades.com/multiline-strings-in-es6-javascript/)

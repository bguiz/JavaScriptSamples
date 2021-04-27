# Indexer and Search

Simple indexer of files, and search by word(s)

## Run

### Create the index

Index the files in a directory with an extension
```
node indexer <path> <extension> [-w]
```

The option `-w` specified a weighted count of words into a file, pondering
the number of unique words.

Example
```
node indexer.js /var/myrepo md
```

This process creates two files in current directory:
`files.json` and `index.json`

### Prune frequent words

Some words are included in many pages, so frequently that
they are not add something to the search process. You
can prune the words using:

```
rm pruned.json
node pruneindex.js [options...]
```

Examples:
```
rm pruned.json
node pruneindex --minlen 3 --maxcount 300
```

The above commands remove the words with length equal or less
than 3 AND no of pages equal or greater than 300

Another example:
```
rm pruned.json
node pruneindex.js --minlen 2
node pruneindex.js --maxcount 200
```

In this case, these commands remove the words with length equal or less
than 2 OR no of pages equal or greater than 200.

Exaple using subword:
```
rm pruned.json
node pruneindex.js --subword block --maxcount 200
```
The above command remove the words with no of pages equal or
greater than 200 AND containing the subword `block`.


This prune index command adds the removed words to
the local file `pruned.json`. It is convenient to
remove the file before the first removal after creating
the index (to be improved in next versions).

If you write a file named `included.json` containing an
array of normalized words (lowercase), these words will NOT BE
included in the prune filter.

Example, if that file contains:
```
["tdd", "ddd"]
```

the prune command:
```
node pruneindex.js -ml 3
```

DONT REMOVE the words `tdd` nor `ddd`.


### List index

Using the command

```
node listindex.js [options...]
```

It list the words in the created index sorted by descending
no of pages where the word appears.

Options:
- `-ml`, `--maxlen` `<value>`: words with lenght less or
equal to `<value>`.
- `-mc`, `--mincount` `<value>`: words with no of pages greater or
equal to `<value>`.
- `-s`, `--subword` `<value>`: words containing the subword `<value>`.

Examples
```
node listindex.js
node listindex.js -mc 200
node listindex.js -ml 3 -mc 150
node listindex.js -s block

```


### Search

Search the files with:
```
node search.js <words>...
```

Example
```
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
- [Improvements by bguiz](https://github.com/bguiz/JavaScriptSamples/blob/feat/bguiz-indexer-improvements/Indexer/README.md)

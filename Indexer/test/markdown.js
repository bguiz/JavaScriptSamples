
const markdown = require('../lib/markdown');

const text = '---\n\
layout: lay1\n\
title: Hello world\n\
tags: hello, world\n\
description: "Hello application"\n\
collection_order: 2200\n\
---\n\
# Hello everybody\n\
';

exports['get title from annotation'] = function (test) {
    const title = markdown.getTitle(text);
    
    test.ok(title);
    test.equal(title, 'Hello world');
};

exports['get description from annotation'] = function (test) {
    const description = markdown.getDescription(text);
    
    test.ok(description);
    test.equal(description, 'Hello application');
};

exports['get header first level'] = function (test) {
    const header = markdown.getHeader(text);
    
    test.ok(header);
    test.equal(header, 'Hello everybody');
};


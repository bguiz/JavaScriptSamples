
const markdown = require('../lib/markdown');

const text = '---\n\
layout: lay1\n\
title: Hello world\n\
tags: hello, tags\n\
description: "Hello application"\n\
collection_order: 2200\n\
permalink: /rsk/rbtc/\n\
---\n\
# Hello everybody\n\
';

const text2 = '---\n\
layout: lay1\n\
title: Hello world\n\
tags: hello, world\n\
event:\n\
  descriptionSummary: "Hello application"\n\
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

exports['get summary from annotation'] = function (test) {
    const summary = markdown.getSummary(text2);
    
    test.ok(summary);
    test.equal(summary, 'Hello application');
};

exports['get tags from annotation'] = function (test) {
    const tags = markdown.getTags(text);
    
    test.ok(tags);
    test.equal(tags, 'hello, tags');
};

exports['get header first level'] = function (test) {
    const header = markdown.getHeader(text);
    
    test.ok(header);
    test.equal(header, 'Hello everybody');
};

exports['get permalink'] = function (test) {
    const permalink = markdown.getPermalink(text);
    
    test.ok(permalink);
    test.equal(permalink, '/rsk/rbtc/');
};


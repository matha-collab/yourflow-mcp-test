'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { capitalizeWords } = require('../src/utils/stringUtils');

test('capitalizes the first letter of each word (normal input)', () => {
  assert.equal(capitalizeWords('hello world'), 'Hello World');
  assert.equal(capitalizeWords('the quick brown fox'), 'The Quick Brown Fox');
});

test('leaves the rest of each word unchanged', () => {
  assert.equal(capitalizeWords('hELLO wORLD'), 'HELLO WORLD');
  assert.equal(capitalizeWords('a1 b2c'), 'A1 B2c');
});

test('handles a single word', () => {
  assert.equal(capitalizeWords('yourflow'), 'Yourflow');
});

test('returns empty string for empty input', () => {
  assert.equal(capitalizeWords(''), '');
});

test('returns empty string for whitespace-only input', () => {
  assert.equal(capitalizeWords('   \t\n  '), '');
});

test('returns empty string for null or undefined', () => {
  assert.equal(capitalizeWords(null), '');
  assert.equal(capitalizeWords(undefined), '');
});

test('trims leading and trailing whitespace', () => {
  assert.equal(capitalizeWords('   hello world   '), 'Hello World');
});

test('collapses multiple internal spaces and tabs to single spaces', () => {
  assert.equal(capitalizeWords('hello    big\t\tworld'), 'Hello Big World');
});

test('throws TypeError for non-string input', () => {
  assert.throws(() => capitalizeWords(42), TypeError);
});

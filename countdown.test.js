import test from 'node:test';
import assert from 'node:assert';
import { formatTime } from './countdown.js';

test('formatTime should format 300 seconds as "05:00"', () => {
    const formattedTime = formatTime(300);
    assert.strictEqual(formattedTime, "05:00");
});
test('formatTime should format 0 seconds as "00:00"', () => {
    const formattedTime = formatTime(0);
    assert.strictEqual(formattedTime, "00:00");
});

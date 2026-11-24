import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filterTasks } from '../docs/tasks.mjs';

test('returns an empty list when no tasks exist', () => {
    assert.deepEqual(filterTasks([], 'all'), []);
});

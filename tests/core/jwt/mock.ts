import fs, { readFile } from 'fs';

export const readFileSpy = jest.spyOn(fs, 'readFile');
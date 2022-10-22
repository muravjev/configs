import micromatch from 'micromatch';

// Remark will not honor .remarkignore during lint-stage,
// so, we do it manually through micromatch.
// Note, that except .changeset other excluded pathes also
// excluded in gitignore, so they will never be here.

export default {
    '*.{mjs,js,ts,tsx,md,json,yaml}': 'pnpm format:fix',
    '*.{mjs,js,ts,tsx}': 'pnpm lint:fix',
    '*.md': files => {
        const match = micromatch.not(files, '**/.changeset/**');
        if (match.length === 0) {
            return [];
        }
        return `pnpm remark:fix ${match.join(' ')}`;
    }
};

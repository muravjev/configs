export default {
    '*.md': 'pnpm remark:fix',
    '*.{mjs,js,ts,tsx,md,json,yaml}': 'pnpm format:fix',
    '*.{mjs,js,ts,tsx}': 'pnpm lint:fix'
};

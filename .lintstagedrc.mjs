export default {
    '*.md': ['pnpm remark:fix', 'pnpm format:fix'],
    '*.{mjs,js,ts,tsx,json,yaml}': 'pnpm format:fix',
    '*.{mjs,js,ts,tsx}': 'pnpm lint:fix'
};

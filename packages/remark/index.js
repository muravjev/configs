import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkPrettier from 'remark-preset-prettier';
import remarkToc from 'remark-toc';

const remarkConfig = {
    settings: {
        bullet: '-', // Use `-` for list item bullets
        listItemIndent: 'one'
        // See <https://github.com/remarkjs/remark/tree/main/packages/remark-stringify> for more options.
    },
    plugins: [
        remarkPresetLintConsistent, // Check that markdown is consistent.
        remarkPresetLintRecommended, // Few recommended rules.
        [remarkLintListItemIndent, 'space'],
        [remarkToc, { heading: 'contents', tight: true }], // Generate a table of contents in `## Contents`
        remarkPrettier
    ]
};

export default remarkConfig;

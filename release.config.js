module.exports = {
    "branches": [
        "main"
    ],
    repositoryUrl: "https://github.com/Actunime/validations",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        "@semantic-release/git",
        "@semantic-release/npm"
    ],
    verifyConditions: ['@semantic-release/github'],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
    ],
    publish: [
        {
            path: '@semantic-release/npm',
        },
        {
            path: '@semantic-release/github'
        }
    ]
}
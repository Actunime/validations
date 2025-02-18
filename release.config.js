module.exports = {
    "branches": [
        "main"
    ],
    repositoryUrl: "https://github.com/Actunime/typescript-config",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        "@semantic-release/git"
    ],
    verifyConditions: ['@semantic-release/github'],
    prepare: [
        '@semantic-release/changelog',
        {
            path: '@semantic-release/git',
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
    ],
    publish: [
        {
            path: '@semantic-release/github'
        }
    ]
}
/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
    app.on('issues.opened', async (context) => {
        const { issue } = context.payload;
        await context.octokit.issues.createComment('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
            owner: 'aimbot1526',
            repo: 'imdb-clone',
            issue_number: issue.number,
            body: 'Testing--- test-body'
        });
        await context.octokit.request('PUT /repos/{owner}/{repo}/issues/{issue_number}/labels', {
            owner: 'aimbot1526',
            repo: 'imdb-clone',
            issue_number: issue.number,
            labels: ['bug', 'test-label']
        });
    });
};


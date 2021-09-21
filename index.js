const program = require('commander');
const {version} = require('./package.json');


const actions = {
    command: {
        alias: 'g',
        description: '生成代码规范',
        examples: [
            'standard-cli gen <project-name>'
        ]
    }
}
program
    .command('gen')
    .alias('g')
    .description('生成代码规范')
    .action(() => {
        console.log('gen')
    })
program.version(version).parse(process.args);

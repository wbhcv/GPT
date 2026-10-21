import {readFile,writeFile,mkdir} from 'node:fs/promises';
const root=new URL('./',import.meta.url);
const [html,css,engine,audio,app,icon]=await Promise.all(['index.html','style.css','engine.js','audio.js','game.js','icon.svg'].map(n=>readFile(new URL(n,root),'utf8')));
const code=[engine,audio,app].join('\n').replace(/^export /gm,'').replace(/^import [^\n]+\n/gm,'');
const out=html.replace('href="icon.svg"',`href="data:image/svg+xml;base64,${Buffer.from(icon).toString('base64')}"`).replace('<link rel="stylesheet" href="style.css">',`<style>\n${css}\n</style>`).replace('<script type="module" src="game.js"></script>',`<script type="module">\n${code}\n</script>`);
await mkdir(new URL('dist/',root),{recursive:true});await writeFile(new URL('play.html',root),out);await writeFile(new URL('dist/cloudhop.html',root),out);console.log('Built play.html and dist/cloudhop.html (both retained in Git).');

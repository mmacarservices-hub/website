import { compile } from "sass";

const input  = './css/style.scss';
const output = './css/style.css';

async function compileCss(input: string, output: string) {
  try {
    const content = compile(input, { style: 'compressed' }).css.toString();
    await Bun.write(output, content);

  } catch(err) {
    console.log('css build failed');
    console.log(err);
    process.exit(-1);
  }
}


(async () => {
  await compileCss(input, output);
  console.log('css packed');
})();

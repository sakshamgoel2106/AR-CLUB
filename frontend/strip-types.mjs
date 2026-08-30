import fs from 'fs';
import path from 'path';
import * as babel from '@babel/core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      // Don't process vite-env.d.ts if it exists
      if (fullPath.endsWith('.d.ts')) {
        fs.unlinkSync(fullPath);
        continue;
      }
      
      const isTSX = fullPath.endsWith('.tsx');
      console.log(`Processing: ${fullPath}`);
      const code = fs.readFileSync(fullPath, 'utf8');
      
      try {
        const result = babel.transformSync(code, {
          filename: fullPath,
          presets: [
            ['@babel/preset-typescript']
          ],
          plugins: isTSX ? ['@babel/plugin-syntax-jsx'] : [],
          retainLines: true,
        });
        
        const newExt = isTSX ? '.jsx' : '.js';
        const newPath = fullPath.replace(/\.tsx?$/, newExt);
        
        fs.writeFileSync(newPath, result.code);
        fs.unlinkSync(fullPath);
        console.log(`Saved as: ${newPath}`);
      } catch (e) {
        console.error(`Failed on ${fullPath}`, e);
      }
    }
  }
}

traverse(srcDir);

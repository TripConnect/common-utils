// tools/generate-index.ts
import * as fs from 'fs';
import * as path from 'path';

const defsDir = path.resolve(__dirname, '../protos/defs');
const files = fs.readdirSync(defsDir);

const exportLines = files
    .filter((f: any) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f: any) => `export * from './${f.replace('.ts', '')}';`);

fs.writeFileSync(path.join(defsDir, 'index.ts'), exportLines.join('\n'));
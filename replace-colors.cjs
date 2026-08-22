const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // replace text-white with text-text-primary for general text/headings
  { regex: /text-white mb-3/g, replacement: 'text-text-primary mb-3' },
  { regex: /text-white mb-4/g, replacement: 'text-text-primary mb-4' },
  { regex: /text-white text-center mb-6/g, replacement: 'text-text-primary text-center mb-6' },
  { regex: /text-white font-medium/g, replacement: 'text-text-primary font-medium' },
  
  // replace for form inputs
  { regex: /border-border-subtle text-white placeholder-slate-500/g, replacement: 'border-border-subtle text-text-primary placeholder-text-secondary' },
  
  // hover states
  { regex: /hover:text-white/g, replacement: 'hover:text-text-primary' },
  
  // miscellaneous old colors
  { regex: /border-dark-950/g, replacement: 'border-bg-primary' },
  { regex: /bg-white\/5/g, replacement: 'bg-text-primary/5' },
  { regex: /bg-white\/10/g, replacement: 'bg-text-primary/10' },
  
  // ProjectCard text
  { regex: /text-lg font-bold text-white group-hover:text-primary-300/g, replacement: 'text-lg font-bold text-text-primary group-hover:text-accent-start' },
  { regex: /text-white text-center mb-6/g, replacement: 'text-text-primary text-center mb-6' },
];

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            replacements.forEach(({regex, replacement}) => {
                if(regex.test(content)) {
                  content = content.replace(regex, replacement);
                  modified = true;
                }
            });
            
            if(modified) {
              fs.writeFileSync(fullPath, content, 'utf8');
              console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

processFiles(srcDir);
console.log("Replacement completed.");

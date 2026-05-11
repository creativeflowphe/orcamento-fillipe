const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

let depth = 0;
let lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = (line.match(/<div/g) || []).length;
    const closes = (line.match(/<\/div>/g) || []).length;
    depth += (opens - closes);
    if (line.includes('class="slide ')) {
        console.log(`Slide at line ${i+1}, depth before: ${depth - (opens - closes)}`);
    }
}
console.log('Final depth:', depth);

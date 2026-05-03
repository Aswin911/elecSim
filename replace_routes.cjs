const fs = require('fs');

const files = [
    'src/App.jsx',
    'src/pages/Journey.jsx',
    'src/pages/Result.jsx',
    'src/pages/Roadmap.jsx',
    'src/pages/AskAI.jsx',
    'src/pages/MythFact.jsx'
];

files.forEach(f => {
    let txt = fs.readFileSync(f, 'utf8');
    if (f === 'src/App.jsx') {
        txt = txt.replace('import Home from "./pages/Home";', 'import Landing from "./pages/Landing";\nimport Home from "./pages/Home";');
        txt = txt.replace('<Route path="/" element={<Home />} />', '<Route path="/" element={<Landing />} />\n                <Route path="/dashboard" element={<Home />} />');
    } else {
        txt = txt.replace(/navigate\("\/"\)/g, 'navigate("/dashboard")');
    }
    fs.writeFileSync(f, txt);
});
console.log('Routing updated successfully.');

fetch('https://api.github.com/repos/matilda081133-sketch/-/actions/runs?per_page=5', {
  headers: { 'User-Agent': 'Node-Checker' }
})
.then(r => r.json())
.then(data => {
  if (data.workflow_runs) {
    data.workflow_runs.forEach(r => {
      console.log(`Run: ${r.name} | Status: ${r.status} | Conclusion: ${r.conclusion} | Head: ${r.head_commit?.message?.substring(0, 50)} | Created: ${r.created_at}`);
    });
  } else {
    console.log(data);
  }
})
.catch(err => console.error(err));

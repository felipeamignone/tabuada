import express from "express";

const port = 3001;
const app = express();

function returnMultiplication(number, greaterMultiplier) {
  const multipliers = Array.from(Array(greaterMultiplier + 1).keys());
  let result = "";
  multipliers.forEach(
    (multiplier) =>
      (result += `<p>${number} x ${multiplier} = ${number * multiplier}</p>`)
  );

  return result;
}

app.get("/", (req, res) => {
  const number = parseInt(req.query.tabuada) || 1;
  const greaterMultiplier = parseInt(req.query.sequencia) || 10;
  res.send(`
        <h3> Tabuada do ${number}: </h3>
        ${returnMultiplication(number, greaterMultiplier)}
        `);
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});

export default app;
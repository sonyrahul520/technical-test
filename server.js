// @ts-check
const Express = require("express");
const Browserify = require("browserify");
const Babel = require("@babel/core");
const Through = require("through2");
const App = Express();

/** @returns {Promise<string>} */
function CompileApp() {
  return new Promise((res, rej) => {
    Browserify("./src/entry.jsx", { extensions: [".js", ".jsx"] })
      .transform((file) => {
        return Through(function (chunk, enc, next) {
          Babel.transform(
            chunk.toString("utf8"),
            {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      edge: "17",
                      firefox: "60",
                      chrome: "67",
                      safari: "11.1",
                    },
                    useBuiltIns: "usage",
                    corejs: "3.6.5",
                  },
                ],
                "@babel/preset-react",
              ],
            },
            (err, res) => {
              if (err) {
                console.error(err);
                rej();
              } else {
                this.push(res.code, "utf8");
                next();
              }
            }
          );
        });
      })
      .bundle((err, buf) => {
        if (err) {
          console.error(err);
          rej();
        } else {
          res(buf.toString());
        }
      });
  });
}

App.get("/_/bundle.js", async (req, res) => {
  const data = await CompileApp();
  res.header("Content-Type", "application/javascript").status(200).send(data);
});

App.get("*", (req, res) => {
    res.header("Content-Type", "text/html").status(200).send(`<!DOCTYPE html>
<html>
    <head>
    <title>Pharmacy2U Technical Test</title>
    <link rel="stylesheet" href="/_/bundle.css" />
    </head>
    <body>
    <div id="react-container"></div>
    <script src="/_/bundle.js"></script>
    </body>
</html>`)
})

App.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000/`);
});

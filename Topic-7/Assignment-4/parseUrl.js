const url = new URL(
  "http://localhost:5500/default.htm?year=2021&month=february"
);

function parseUrl(url) {
  console.log(url.protocol);
  console.log(url.port);
  console.log(url.host);
  console.log(url.searchParams);
  document.write(url.protocol + "<br>");
  document.write(url.port + "<br>");
  document.write(url.host + "<br>");
  document.write(url.searchParams + "<br>");
}

parseUrl(url);

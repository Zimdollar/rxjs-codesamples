import "./styles.css";
import { async, Observable } from "rxjs";
import { of, from, map } from "rxjs";

const data = of(1, 2, 3);

const subscription = data
  .pipe(map((value) => value * 2))
  .subscribe((v) => console.log(v));

document.getElementById("app").innerHTML = `
<h1>Hello Observer!</h1>
<div>
  ${data | async} 
</div>`;

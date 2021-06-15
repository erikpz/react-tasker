export const alpha = (hex: string, op: number) => {
  /* let r = hex.slice(1, 3);
    let g = hex.slice(3, 5);
    let b = hex.slice(5);
    r = `0x${r}`;
    g = `0x${g}`;
    b = `0x${b}`;
    return `rgba(${parseInt(r)},${parseInt(g)},${parseInt(b)},${op})`; */
  let decop = op * 100;
  let h: any = (decop * 255) / 100;
  h = Math.trunc(h);
  h = h.toString(16).toUpperCase();
  if (h.length === 1) {
    h = "0" + h;
  }
  return hex + h;
};

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export const formatStatus = (stat: "Nueva" | "En proceso" | "Completada") => {
  switch (stat) {
    case "Nueva":
      return "new";
    case "En proceso":
      return "process";
    case "Completada":
      return "done";
  }
};

export const formatStatusReverse = (stat: "new" | "process" | "done") => {
  switch (stat) {
    case "new":
      return "Nueva";
    case "process":
      return "En proceso";
    case "done":
      return "Completada";
  }
};

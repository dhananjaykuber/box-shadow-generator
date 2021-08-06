let hshadow = "1px";
let vshadow = "1px";
let bradius = "5px";
let sradius = "1px";
let scolor = "#000";
// let scoloropacity = "0.5";

const inputs = document.querySelectorAll(".control input");

function updateChange() {
  const size = this.dataset.size;
  if (size === undefined) {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
    if (this.name == "s-color") scolor = this.value;
  } else {
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + size
    );
    if (this.name == "h-shadow") hshadow = this.value + size;
    else if (this.name == "v-shadow") vshadow = this.value + size;
    else if (this.name == "b-radius") bradius = this.value + size;
    else if (this.name == "s-radius") sradius = this.value + size;
    else scoloropacity = this.value;
  }
  document.querySelector(
    ".text-input"
  ).value = `box-shadow: ${hshadow} ${vshadow} ${bradius} ${sradius} ${scolor}`;
}

document.querySelector(
  ".text-input"
).value = `box-shadow: ${hshadow} ${vshadow} ${bradius} ${sradius} ${scolor}`;

inputs.forEach((input) => input.addEventListener("change", updateChange));
inputs.forEach((input) => input.addEventListener("mousemove", updateChange));

// Copy
const clipboard = document.querySelector(".clipboard");
clipboard.addEventListener("click", copy_to_clipboard);
const text_input = document.querySelector(".text-input");

function copy_to_clipboard() {
  text_input.select();
  text_input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied!");
}

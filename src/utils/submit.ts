/**
 * Redirect using a form submit – allows to use methods like 'POST'.
 */
export function submit(
  method: string,
  url: string,
  body: Record<string, string>
): void {
  const form = document.createElement("form");
  form.method = method;
  form.style.visibility = "hidden";
  form.action = url;

  Object.keys(body).forEach((name) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = body[name];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}

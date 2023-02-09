import { Button, TextField } from "@mui/material";

export function ContactMeForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column" }} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="ccbeb53f-b829-4137-8e9b-c3aaaf561664" />
      <TextField placeholder={"Your name"} variant={"outlined"} type="text" name="name" required />
      <TextField placeholder={"Your e-mail address"} type="email" name="email" required />
      <TextField multiline placeholder={"Your message"} rows={3} maxRows={3} name="message" required />
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <Button sx={{ mt: 5 }} variant={"contained"} type="submit">
        Send
      </Button>
    </form>
  );
}

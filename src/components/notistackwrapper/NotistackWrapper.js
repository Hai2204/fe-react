import { SnackbarProvider } from "notistack";

const MAX_SNACK = 3;
const AUTO_HIDE_DURATION = 3000;

export default function NotistackWrapper({ children }) {
  console.log(25, children);
  return (
    <SnackbarProvider
      maxSnack={MAX_SNACK}
      autoHideDuration={AUTO_HIDE_DURATION}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

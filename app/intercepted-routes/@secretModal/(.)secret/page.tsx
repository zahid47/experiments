import InterceptedDialog from "@/app/intercepted-routes/_components/InterceptedDialog";
import SecretContent from "@/app/intercepted-routes/_components/SecretContent";

export default function page() {
  return (
    <InterceptedDialog>
      <SecretContent text="Secrets in modal" />
    </InterceptedDialog>
  );
}

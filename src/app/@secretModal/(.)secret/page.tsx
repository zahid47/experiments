import MyModal from "@/components/Modal";
import SecretContent from "@/components/SecretContent";

export default function page() {
  return (
    <MyModal>
      <SecretContent text="Secrets in modal"/>
    </MyModal>
  );
}

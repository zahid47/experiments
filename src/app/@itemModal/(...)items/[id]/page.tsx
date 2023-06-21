import MyModal from "@/components/Modal";

interface Props {
  params: {
    id: string;
  };
}

export default function page({ params: { id } }: Props) {
  return <MyModal>ID in modal {id}</MyModal>;
}

import InterceptedDialog from "@/app/intercepted-routes/_components/InterceptedDialog";

interface Props {
  params: {
    id: string;
  };
}

export default function page({ params: { id } }: Props) {
  return <InterceptedDialog>ID in modal {id}</InterceptedDialog>;
}

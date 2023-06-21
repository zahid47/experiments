interface Props {
  params: {
    id: string;
  };
}

export default function page({ params: { id } }: Props) {
  return <div>ID in modal {id}</div>;
}

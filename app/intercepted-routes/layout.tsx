export default function Layout({
  children,
  secretModal,
}: {
  children: React.ReactNode;
  secretModal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {secretModal}
    </div>
  );
}

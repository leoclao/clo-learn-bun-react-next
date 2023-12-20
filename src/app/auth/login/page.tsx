import Components from '@/components';

export default function LoginPage() {
  const collapseHeader = <h2>Collapse Header</h2>;
  const collapseBody = <p>Collapse Body</p>;

  return (
    <div>
      <Components.Collapse
        header={collapseHeader}
        body={collapseBody}
      />
    </div>
  );
}
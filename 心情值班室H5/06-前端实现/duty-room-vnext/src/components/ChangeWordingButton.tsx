// Block3: 换个说法.

interface Props {
  onClick: () => void;
}

export function ChangeWordingButton({ onClick }: Props) {
  return (
    <button
      className="vnext-change-wording"
      onClick={onClick}
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      换个说法
    </button>
  );
}

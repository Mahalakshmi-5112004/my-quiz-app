export default function ProgressBar({ value = 0 }: { value?: number }) {
  return (
    <div className="w-full">
      <div className="progress-track mb-6">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
